import { expect } from 'chai';
import { Arryx } from 'lib';

export function MethodJoin(): void {
  describe('join', () => {
    it('should join the items in the array into a string', () => {
      const arr = new Arryx([1, 2, 3]);
      expect(arr.join()).equal('1,2,3');
    });

    it('should join the array into a string seperated by the provided separator', () => {
      const arr = new Arryx([1, 2, 3]);
      expect(arr.join('..')).equal('1..2..3');
      expect(arr.join('-')).equal('1-2-3');
      expect(arr.join('')).equal('123');
    });
  });
}
