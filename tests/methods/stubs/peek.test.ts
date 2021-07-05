import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodPeek(): void {
  describe('peek', () => {
    it('should peek at the first item in the array', () => {
      const arr = new Arryx(['foo', 'bar', 'baz']);
      expect(arr.peek()).equal('foo');
    });

    it('should return undefined if the array is empty', () => {
      const arr = new Arryx();
      expect(arr.peek()).to.be.undefined;
    });
  });
}
