import utils from 'ethereumjs-util';

export const isValidAddressUnchecked = utils.isValidAddress;

export const { isValidChecksumAddress, toChecksumAddress } = utils;

const isLowerCase = str => str === str.toLowerCase();

export const isValidAddress = address =>
  isValidAddressUnchecked(address) && (isLowerCase(address) || isValidChecksumAddress(address));

export const keccak = utils.sha3;

export const signHash = utils.hashPersonalMessage;
