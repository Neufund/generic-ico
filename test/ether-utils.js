import { assert } from 'chai';
import { isValidAddress } from '../src/ether-utils';

describe('isValidAddress', () => {
  it('accepts any lowercase address', () => {
    assert(isValidAddress('0xb1f488e8fc86c12a80097fb73845312751564d13'));
  });
  it('accepts checksummed addresses', () => {
    assert(isValidAddress('0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359'));
  });
  it('rejects invalid checksums', () => {
    assert(!isValidAddress('0xFB6916095ca1df60bB79Ce92cE3Ea74c37c5d359'));
    assert(!isValidAddress('0xfB6916095ca1df60bB79Ce92cE3Ea74c37C5d359'));
  });
  it('rejects non-addresses', () => {
    assert(!isValidAddress(''));
    assert(!isValidAddress('0'));
    assert(!isValidAddress('0x'));
    assert(!isValidAddress('0xb1f488e8fc86c12a80097fb73845312751564d'));
    assert(!isValidAddress('0xb1f488e8fc86c12a80097fb73845312751564d1'));
    assert(!isValidAddress('0xb1f488e8fc86c12a80097fb73845312751564d130'));
    assert(!isValidAddress('0xb1f488e8fc86c12a80097fb73845312751564d1300'));

    assert(!isValidAddress('b1f488e8fc86c12a80097fb73845312751564d13'));
    assert(!isValidAddress('0xb1f488e8fc86c12a80097fb73845312751564d1g'));
  });
});
