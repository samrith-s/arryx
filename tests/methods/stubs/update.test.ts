import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodUpdate(): void {
  describe('update', () => {
    it('should update the item at the specified index', () => {
      const arr = new Arryx([1, 2, 3]);

      expect(arr.entries()).deep.equal([1, 2, 3]);

      const ref = arr.update(1, 222);

      expect(arr.entries()).deep.equal([1, 222, 3]);

      expect(arr).equal(ref);
    });
  });
}
