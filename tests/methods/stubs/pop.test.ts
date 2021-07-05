import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodPop(): void {
  describe('pop', () => {
    it('should return the last item in the array', () => {
      const arr = new Arryx([1, 2, 3]);
      expect(arr.entries()).deep.equal([1, 2, 3]);
      expect(arr.pop()).equal(3);
      expect(arr.entries()).deep.equal([1, 2]);
    });
  });
}
