import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodFilter(): void {
  describe('filter', () => {
    it('should filter the items in the array given the predicate', () => {
      const arr = new Arryx([1, 2, 3, 4, 5, 6]);
      expect(arr.filter((item) => item % 2 === 0).entries()).deep.equal([2, 4, 6]);
    });
  });
}
