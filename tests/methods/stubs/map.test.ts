import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodMap(): void {
  describe('map', () => {
    it('should map over the array, running the callback, and return a new array', () => {
      const arr = new Arryx([1, 2, 3]);
      const arr2 = arr.map((item) => item * 2);

      expect(arr.entries()).deep.equal([1, 2, 3]);
      expect(arr2.entries()).deep.equal([2, 4, 6]);
    });
  });
}
