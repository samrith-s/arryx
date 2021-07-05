import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodValues(): void {
  describe('values', () => {
    it('should return an iterable of the array', () => {
      const isIterable = Symbol.iterator in Object(new Arryx([1, 2, 3]).values());
      expect(isIterable).to.be.true;
    });
  });
}
