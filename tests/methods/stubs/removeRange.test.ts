import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodRemoveRange(): void {
  describe('removeRange', () => {
    it('should remove `N` items from specified index', () => {
      const arr = new Arryx([1, 10, 20, 30, 40, 50, 2, 3]);

      expect(arr.entries()).deep.equal([1, 10, 20, 30, 40, 50, 2, 3]);
      expect(arr.length).equal(8);

      arr.removeRange(1, 5);

      expect(arr.entries()).deep.equal([1, 2, 3]);
      expect(arr.length).equal(3);
    });
  });
}
