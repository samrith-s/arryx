import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodClear(): void {
  describe('clear', () => {
    it('should clear the array', () => {
      const arr = new Arryx([1, 2, 3]);

      expect(arr.empty).to.be.false;
      expect(arr.length).equal(3);

      arr.clear();

      expect(arr.empty).to.be.true;
      expect(arr.length).equal(0);
    });
  });
}
