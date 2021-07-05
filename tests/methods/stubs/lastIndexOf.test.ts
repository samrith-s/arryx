import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodLastIndexOf(): void {
  describe('lastIndexOf', () => {
    it('should find the correct last index of a value in the array', () => {
      const arr = new Arryx([2, 1, 3, 4, 1]);
      expect(arr.lastIndexOf(1)).equal(4);
    });

    it('should find the correct last index of a value in the array from the specified index', () => {
      const arr = new Arryx([2, 1, 3, 4, 1]);
      expect(arr.lastIndexOf(1, 1)).equal(1);
    });

    it('should return -1 if value does not exist in the array', () => {
      const arr = new Arryx([1, 2, 3, 4]);
      expect(arr.indexOf(5)).equal(-1);
    });
  });
}
