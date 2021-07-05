import { Arryx } from '@arryx';
import { expect } from 'chai';

export function PropertyLength(): void {
  describe('length', () => {
    it('should return the proper length of the array', () => {
      const arr = new Arryx<number>([1]);

      expect(arr.length).equal(1);

      arr.pop();
      expect(arr.length).equal(0);
    });
  });
}
