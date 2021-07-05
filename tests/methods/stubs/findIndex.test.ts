import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodFindIndex(): void {
  describe('findIndex', () => {
    it('should find the correct index of a value matching the predicate in the array', () => {
      const arr = new Arryx([1, 2, 3, 4]);
      expect(arr.findIndex((item) => item % 2 === 0)).equal(1);
    });

    it('should return -1 if no value matching the predicate exist in the array', () => {
      const arr = new Arryx([1, 2, 3, 4]);
      expect(arr.findIndex((item) => item / 5 === 1)).equal(-1);
    });
  });
}
