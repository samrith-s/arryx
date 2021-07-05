import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodReverse(): void {
  describe('reverse', () => {
    it('should reverse the array and return a new array', () => {
      const arr1 = new Arryx([1, 2, 3]);

      expect(arr1.entries()).deep.equal([1, 2, 3]);

      const arr2 = arr1.reverse();

      expect(arr2.entries()).deep.equal([3, 2, 1]);
    });
  });
}
