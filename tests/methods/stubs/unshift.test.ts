import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodUnshift(): void {
  describe('unshift', () => {
    it('should add a new item to the beginning of the array', () => {
      const arr = new Arryx([2, 3, 4]);
      expect(arr.entries()).deep.equal([2, 3, 4]);
      expect(arr.unshift(1)).equal(4);
      expect(arr.entries()).deep.equal([1, 2, 3, 4]);
    });
  });
}
