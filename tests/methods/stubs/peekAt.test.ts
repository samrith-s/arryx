import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodPeekAt(): void {
  describe('peekAt', () => {
    it('should peek at the item at the index in the array', () => {
      const arr = new Arryx(['foo', 'bar', 'baz']);
      expect(arr.peekAt(1)).equal('bar');
    });

    it('should return undefined if the item does not exist', () => {
      const arr = new Arryx([1, 2, 3]);
      expect(arr.peekAt(3)).to.be.undefined;
    });

    it('should return undefined if the array is empty', () => {
      const arr = new Arryx();
      expect(arr.peekAt(1)).to.be.undefined;
    });
  });
}
