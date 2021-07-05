import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodFind(): void {
  describe('find', () => {
    it('should return the element if found', () => {
      const arr = new Arryx([
        { id: 1, name: 'Jack' },
        { id: 2, name: 'Diane' },
      ]);
      expect(arr.find((item) => item.id === 2)).deep.equal({ id: 2, name: 'Diane' });
      expect(arr.find((item) => item.id === 2)).equal(arr.peekLast());
    });

    it('should return undefined if no element is found', () => {
      const arr = new Arryx([
        { id: 1, name: 'Jack' },
        { id: 2, name: 'Diane' },
      ]);
      expect(arr.find((item) => item.id === 3)).to.be.undefined;
    });
  });
}
