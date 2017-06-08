import { createSelector } from 'reselect';
import { makeCreators, makeReducer } from './redux-utils';
import nk from '../neukey';

const initialState = {
  walletProviders: [{ label: 'Node' }, { label: 'Neukey' }, { label: 'Neufund' }],
  wallet: null,
};

const reducers = {
  setWalletProvider: (state, walletProvider) => ({
    ...state,
    walletProvider,
    wallet: initialState.wallet,
  }),
  setAddress: (state, address) => ({
    ...state,
    address,
  }),
};

export const fetchAddress = () => async (dispatch, getState) => {
  const state = getState();
  switch (state.wallet) {
    case null: {
      dispatch(setAddress(null));
    }
    case 'Node': {
      const eth = getEth(state);
      const addresses = await eth.getAccounts();
      dispatch(setAddress(addresses[0]));
    }
    case 'Neukey': {
      dispatch(setAddress(await nk.getAddress()));
    }
    case 'Neufund': {
    }
  }
};

export const fetchBalance = () => async (dispatch, getState) => {
  const state = getState();
  const eth = getEth(state);
  balance = stringifyNumber(await fallback(eth.getBalance(address)));
};

export const signMessage = message => async (dispatch, getState) => {
  const state = getState();
  const eth = getEth(state);
  balance = stringifyNumber(await fallback(eth.getBalance(address)));
};

export const sendTransaction = message => async (dispatch, getState) => {
  const state = getState();
  const eth = getEth(state);
  balance = stringifyNumber(await fallback(eth.getBalance(address)));
};
