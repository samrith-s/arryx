import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodIncludes(): void {
  describe('includes', () => {
    it('should return true if a value is included in the array', () => {
      const arr = new Arryx([1, 2, 3, 4, 5]);
      expect(arr.includes(2)).to.be.true;
    });

    it('should return false if a value is included in the array', () => {
      const arr = new Arryx(['foo', 'bar', 'baz']);
      expect(arr.includes('foobar')).to.be.false;
    });
  });
}
