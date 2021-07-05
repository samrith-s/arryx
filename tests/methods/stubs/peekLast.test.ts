import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodPeekLast(): void {
  describe('peekLast', () => {
    it('should peek at the last item in the array', () => {
      const arr = new Arryx(['foo', 'bar', 'baz']);
      expect(arr.peekLast()).equal('baz');
    });

    it('should return undefined if the array is empty', () => {
      const arr = new Arryx();
      expect(arr.peek()).to.be.undefined;
    });
  });
}
