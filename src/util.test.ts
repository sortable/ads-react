import { assert } from 'chai';
import { ADS_REACT_VERSION } from './util';

describe('Utils', () => {
  it('should have correct version', async () => {
    // @ts-ignore: this should only be tested in node env
    if (typeof require !== 'undefined' && typeof __dirname !== 'undefined') {
      // @ts-ignore
      const version = JSON.parse(require('fs').readFileSync(__dirname + '/../package.json')).version;
      assert.equal(ADS_REACT_VERSION, version);
    }
  });
});