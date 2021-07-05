import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodReduceRight(): void {
  describe('reduceRight', () => {
    it('should reduce the array to the desired value from right-to-left', () => {
      const arr = new Arryx(['foo', 'bar', 'baz']);
      expect(arr.reduceRight((acc, item) => (acc += item))).equal('bazbarfoo');
    });
  });
}
