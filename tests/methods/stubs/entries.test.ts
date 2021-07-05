import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodEntries(): void {
  describe('entries', () => {
    it('should properly return the items of the array', () => {
      const arr = new Arryx([1, 2, 3]);

      expect(arr.entries()).deep.equal([1, 2, 3]);

      arr.pop();

      expect(arr.entries()).deep.equal([1, 2]);
    });
  });
}
