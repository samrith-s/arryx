import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodForEach(): void {
  describe('forEach', () => {
    it('should iterate over an array and return proper values', () => {
      const arr = new Arryx([1, 2, 3, 4, 5]);
      const values: number[] = [];

      arr.forEach((value) => {
        values.push(value * 2);
      });

      expect(values).deep.equal([2, 4, 6, 8, 10]);
    });
  });
}
