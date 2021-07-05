import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodSort(): void {
  describe('sort', () => {
    it('should sort the array and return new array', () => {
      const arr1 = new Arryx([2, 5, 1, 3, 6, 4]);
      expect(arr1.sort().entries()).deep.equal([1, 2, 3, 4, 5, 6]);

      const arr2 = new Arryx(['a', 'c', 'd', 'b', 'f', 'e']);
      expect(arr2.sort().entries()).deep.equal(['a', 'b', 'c', 'd', 'e', 'f']);
    });

    it('should sort using the provided sorter', () => {
      const arr = new Arryx([1, 3, 2, 4, 5, 6]);
      expect(arr.sort((a, b) => (a % 2) - (b % 2)).entries()).deep.equal([2, 4, 6, 1, 3, 5]);
    });
  });
}
