import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodTake(): void {
  describe('take', () => {
    it('should take `N` items from the array and create a new array', () => {
      const arr1 = new Arryx([1, 2, 3, 4, 5, 6]);
      const arr2 = arr1.take(3);
      expect(arr2.entries()).deep.equal([1, 2, 3]);
    });

    it('should take `N` items after starting index from array and create a new array', () => {
      const arr1 = new Arryx([1, 3, 2, 4, 5, 6]);
      const arr2 = arr1.take(3, 3);
      expect(arr2.entries()).deep.equal([4, 5, 6]);
    });
  });
}
