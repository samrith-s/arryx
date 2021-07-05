import { Arryx } from '@arryx';
import { expect } from 'chai';

export function StaticCreate(): void {
  describe('create', () => {
    it('should create an empty array given the size', () => {
      const arr = Arryx.create(3);
      expect(arr.entries()).deep.equal(new Array(3));
    });
  });
}
