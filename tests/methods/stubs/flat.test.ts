import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodFlat(): void {
  describe('flat', () => {
    it('should flatten an array into a new array', () => {
      const arr = new Arryx([
        [1, 2],
        [3, 4],
        [5, 6],
      ]);
      expect(arr.flat().entries()).deep.equal([1, 2, 3, 4, 5, 6]);
    });

    it('should flatten an array upto the provided depth', () => {
      const arr = new Arryx([[[[1, 2]]], [[[3, 4]]], [[[5, 6]]]]);
      expect(arr.flat(3).entries()).deep.equal([1, 2, 3, 4, 5, 6]);
    });

    it('should only flatten an array to a depth of 1 if no depth is provided', () => {
      const arr = new Arryx([[[1, 2]], [[3, 4]], [[5, 6]]]);
      expect(arr.flat().entries()).deep.equal([
        [1, 2],
        [3, 4],
        [5, 6],
      ]);
    });
  });
}
