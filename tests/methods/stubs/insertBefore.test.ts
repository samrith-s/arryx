import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodInsertBefore(): void {
  describe('insertBefore', () => {
    it('should insert the item before the index', () => {
      const arr = new Arryx([2, 3]);
      arr.insertBefore(0, 1);
      expect(arr.entries()).deep.equal([1, 2, 3]);
      expect(arr.length).equal(3);
    });

    it('should insert items before the index', () => {
      const arr = new Arryx([4, 5]);
      arr.insertBefore(0, [1, 2, 3]);
      expect(arr.entries()).deep.equal([1, 2, 3, 4, 5]);
      expect(arr.length).equal(5);
    });
  });
}
