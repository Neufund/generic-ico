/* global console */
import { createSelector } from 'reselect';
import jwtDecode from 'jwt-decode';
import { makeCreators, makeReducer } from './redux-utils';
import { getEth } from './web3';
import { signHash } from '../ether-utils';
import { fetchJson } from '../utils';

const initialState = {
  url: '/signature-authentication-server/api',
  token: null,
};

const reducers = {
  setToken: (state, token) => ({
    ...state,
    token,
  }),
};

export const reducer = makeReducer(reducers, initialState);
export const creators = makeCreators(reducers);
export const { setToken } = creators;
export default reducer;

export const getJwtPayload = createSelector([state => state.authenticate.token], jwtDecode);

export const getAddress = createSelector([getJwtPayload], jwt => jwt.sub);

export const doRenew = () => async (dispatch, getState) => {
  const url = getState().authenticate.url;
  const oldToken = getState().authenticate.token;

  const { token } = await fetchJson(
    `${url}/renew`,
    {},
    {
      headers: {
        Authorization: `Bearer ${oldToken}`,
      },
    }
  );

  // Set token and jwt payload
  dispatch(setToken(token));
};

export const doDeauthenticate = () => setToken(null);

export const doAuthenticate = address => async (dispatch, getState) => {
  const url = getState().authenticate.url;

  // call /challenge
  const { challenge } = await fetchJson(`${url}/challenge`, { address });

  // Ethereum-TestRPC needs a workaround for signing
  // See: https://github.com/ethereumjs/testrpc/issues/243
  const hash = `0x${signHash(Buffer.from(challenge, 'hex')).toString('hex')}`;

  // Sign challenge
  const response = (await getEth(getState()).sign(address, hash)).replace('0x', '');

  // call /login
  // NOTE: This will trigger user interaction
  // TODO: What if it times out or the user declines?
  const { token } = await fetchJson(`${url}/login`, { address, challenge, response });

  // Set token and jwt payload
  dispatch(setToken(token));

  // eslint-disable-next-line no-console
  console.log('Authenticated as: ', getAddress(getState()));

  // Start polling to renew the token
  const renewSeconds = 5;
  setTimeout(async () => {
    dispatch(doRenew());
  }, renewSeconds * 1000);
};
