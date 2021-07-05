import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodShift(): void {
  describe('shift', () => {
    it('should return the first item in the array', () => {
      const arr = new Arryx([1, 2, 3]);
      expect(arr.entries()).deep.equal([1, 2, 3]);
      expect(arr.shift()).equal(1);
      expect(arr.entries()).deep.equal([2, 3]);
    });
  });
}
