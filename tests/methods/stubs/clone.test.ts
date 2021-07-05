import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodClone(): void {
  describe('clone', () => {
    it('should clone the array and return a new array', () => {
      const arr1 = new Arryx([1, 2, 3]);
      const arr2 = arr1.clone();

      expect(arr1.entries()).deep.equal([1, 2, 3]);
      expect(arr2.entries()).deep.equal([1, 2, 3]);

      arr2.pop();

      expect(arr1.entries()).deep.equal([1, 2, 3]);
      expect(arr2.entries()).deep.equal([1, 2]);
    });
  });
}
