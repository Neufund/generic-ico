import BN from 'bn';

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const deepfreeze = (obj) => {
  if (obj !== null && typeof obj === 'object') {
    Object.freeze(obj);
    Object.getOwnPropertyNames(obj).forEach((prop) => {
      deepfreeze(obj[prop]);
    });
  }
  return obj;
};

export const objectMap = (obj, map) =>
  Object.keys(obj).reduce(
    (others, key) => ({
      ...others,
      [key]: map(obj[key], key),
    }),
    {}
  );

export const objectZip = (keys, values) =>
  keys.reduce(
    (others, key, index) => ({
      ...others,
      [key]: values[index],
    }),
    {}
  );

export const objectPromise = async obj =>
  objectZip(Object.keys(obj), await Promise.all(Object.values(obj)));

export const toPromise = func => (...args) =>
  new Promise((resolve, reject) =>
    func(...args, (error, result) => (error ? reject(new Error(error.message)) : resolve(result)))
  );

export const fallback = async (promise, alternative = null) => {
  try {
    return await promise;
  } catch (error) {
    return alternative;
  }
};

const hex = n => '0123456789abcdef'[n];

export const bytesToHex = bytes =>
  // eslint-disable-next-line no-bitwise
  bytes.reduce((total, byte) => total + hex(byte >>> 4) + hex(byte & 0xf), '0x');

export const bytesToNumber = bytes =>
  // eslint-disable-next-line no-mixed-operators
  bytes.reduce((total, byte) => byte + total * 256, 0);

export const bytesToBigNumber = bytes =>
  bytes.reduce((total, byte) => total.mul(256).add(byte), new BN(0));
