import { expect } from 'chai';
import { Arryx } from 'lib';

export function MethodEvery(): void {
  describe('every', () => {
    it('should return true if all items in array match predicate', () => {
      const arr = new Arryx(['foo', 'bar', 'baz']);
      expect(arr.every((item) => typeof item === 'string')).to.be.true;
    });

    it('should return false if all items in array do not match predicate', () => {
      const arr = new Arryx([1, 2, 3]);
      expect(arr.every((item) => item % 2 === 0)).to.be.false;
    });
  });
}
