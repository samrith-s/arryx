import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodReduce(): void {
  describe('reduce', () => {
    it('should reduce the array to the desired value from left-to-right', () => {
      const arr = new Arryx(['foo', 'bar', 'baz']);
      expect(arr.reduce((acc, item) => (acc += item))).equal('foobarbaz');
    });
  });
}
