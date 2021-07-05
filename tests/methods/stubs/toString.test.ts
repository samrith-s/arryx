import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodToString(): void {
  describe('toString', () => {
    it('should return the string representation of the array', () => {
      expect(new Arryx([1, 2, 3]).toString()).equal('1,2,3');
    });
  });
}
