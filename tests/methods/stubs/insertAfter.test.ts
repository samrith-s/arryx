import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodInsertAfter(): void {
  describe('insertAfter', () => {
    it('should insert the item after the index', () => {
      const arr = new Arryx([1, 3]);
      arr.insertAfter(0, 2);
      expect(arr.entries()).deep.equal([1, 2, 3]);
      expect(arr.length).equal(3);
    });

    it('should insert items after the index', () => {
      const arr = new Arryx([1, 5]);
      arr.insertAfter(0, [2, 3, 4]);
      expect(arr.entries()).deep.equal([1, 2, 3, 4, 5]);
      expect(arr.length).equal(5);
    });
  });
}
