import { Arryx } from '@arryx';
import { expect } from 'chai';

export function PropertyEmpty(): void {
  describe('empty', () => {
    it('should correctly return whether the array is empty or not', () => {
      const arr = new Arryx<number>();

      arr.push(1);
      expect(arr.empty).to.be.false;

      arr.pop();
      expect(arr.empty).to.be.true;
    });
  });
}
