import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodConcat(): void {
  describe('concat', () => {
    it('should concatenate two arrays into a new array', () => {
      const arr1 = new Arryx([1, 2, 3]);
      const arr2 = new Arryx([4, 5, 6]);
      const arr3 = arr1.concat(arr2);

      expect(arr1.entries()).deep.equal([1, 2, 3]);
      expect(arr2.entries()).deep.equal([4, 5, 6]);
      expect(arr3.entries()).deep.equal([1, 2, 3, 4, 5, 6]);
    });
  });
}
