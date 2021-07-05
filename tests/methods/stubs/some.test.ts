import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodSome(): void {
  describe('some', () => {
    it('should return true if some items match predicate', () => {
      const arr = new Arryx([1, 2, 3]);
      expect(arr.some((item) => item % 2 === 0)).to.be.true;
    });

    it('should return false if no items match predicate', () => {
      const arr = new Arryx([1, 2, 3]);
      expect(arr.some((item) => item % 4 === 0)).to.be.false;
    });
  });
}
