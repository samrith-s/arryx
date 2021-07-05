import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodPush(): void {
  describe('push', () => {
    it('should add a new item to the end of the array', () => {
      const arr = new Arryx([1, 2, 3]);
      expect(arr.entries()).deep.equal([1, 2, 3]);
      expect(arr.push(4)).equal(4);
      expect(arr.entries()).deep.equal([1, 2, 3, 4]);
    });
  });
}
