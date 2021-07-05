import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodFlatMap(): void {
  describe('flatMap', () => {
    it('should flatten and map over the array and return a new array', () => {
      const arr = new Arryx([
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
      ]);
      expect(arr.flatMap(([first, second]) => [first * 2, second * 2]).entries()).deep.equal([
        2, 4, 6, 8, 10, 12, 14, 16,
      ]);
    });
  });
}
