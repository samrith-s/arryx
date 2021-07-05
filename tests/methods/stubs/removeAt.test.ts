import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodRemoveAt(): void {
  describe('removeAt', () => {
    it('should remove an item at the specified index', () => {
      const arr = new Arryx([1, 2, 3]);

      expect(arr.entries()).deep.equal([1, 2, 3]);
      expect(arr.length).equal(3);

      arr.removeAt(1);

      expect(arr.entries()).deep.equal([1, 3]);
      expect(arr.length).equal(2);
    });
  });
}
