import { createSelector } from 'reselect';
import { makeCreators, makeReducer } from './redux-utils';
import { getEth } from './web3';
import { sleep } from '../utils';

export const TxState = {
  SIGNING: 'SIGNING',
  PENDING: 'PENDING',
  CONFIRMING: 'CONFIRMING',
  CONFIRMED: 'CONFIRMED',
};

const initialState = {
  nextId: 0,
  byId: {},
  ids: [],
  hashToId: {},
};

const reducers = {
  newTransaction: (state, tx) => ({
    ...state,
    nextId: state.nextId + 1,
    ids: [...state.ids, state.nextId],
    byId: {
      ...state.byId,
      [state.nextId]: {
        id: state.nextId,
        state: TxState.SIGNING,
        ...tx,
      },
    },
  }),
  setTransactionHash: (state, id, hash) => ({
    ...state,
    byId: {
      ...state.byId,
      [id]: {
        ...state.byId[id],
        state: TxState.PENDING,
        hash,
      },
    },
    hashToId: {
      ...state.hashToId,
      [hash]: id,
    },
  }),
  setTransactionReceipt: (state, id, receipt) => ({
    ...state,
    byId: {
      ...state.byId,
      [id]: {
        ...state.byId[id],
        state: TxState.CONFIRMING,
        ...receipt,
      },
    },
  }),
  setConfirmed: (state, id) => ({
    ...state,
    byId: {
      ...state.byId,
      [id]: {
        ...state.byId[id],
        state: TxState.CONFIRMED,
      },
    },
  }),
};

export const reducer = makeReducer(reducers, initialState);
export const creators = makeCreators(reducers);
export const { setTransactionHash, setTransactionReceipt, setConfirmed } = creators;
export default reducer;

// Selectors

export const getOrderedTransactions = createSelector(
  [state => state.transactions.byId, state => state.transactions.ids],
  (byId, ids) => ids.map(id => byId[id])
);

export const getFilteredTransactionsCreator = filterSelector =>
  createSelector([getOrderedTransactions, filterSelector], (txs, filter) =>
    txs.filter(tx => tx.state === filter)
  );

// Custom action creators

export const newTransaction = tx => (dispatch, getState) => {
  const id = getState().transactions.nextId;
  dispatch(creators.newTransaction(tx));
  return id;
};

export const sendTransaction = tx => async (dispatch, getState) => {
  // Add transaction to store
  const id = dispatch(newTransaction(tx));

  // Sign transaction (This will trigger user interaction)
  // TODO: What if it times out or the user declines?
  const hash = await getEth(getState()).sendTransaction(tx);
  dispatch(setTransactionHash(id, hash));

  // HACK: Do polling in the background
  setTimeout(async () => {
    // Polling loop for receipt
    // TODO: Move to some on-block-event-handler insterad of polling
    // TODO: What if this block gets uncled?
    let receipt = null;
    while (receipt === null) {
      /* eslint-disable no-await-in-loop */
      receipt = await getEth(getState()).getTransactionReceipt(hash);
      if (receipt === null) await sleep(1000);
      /* eslint-enable no-await-in-loop */
    }
    dispatch(setTransactionReceipt(id, receipt));

    // Polling loop for confirmations
    let confirmed = false;
    while (!confirmed) {
      const chain = getState().web3.chain;
      confirmed = receipt.blockNumber + chain.confirmations <= chain.blockNumber;

      // eslint-disable-next-line no-await-in-loop
      if (!confirmed) await sleep(5000);
    }
    dispatch(setConfirmed(id));
  }, 0);
};
