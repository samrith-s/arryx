import { Arryx } from '@arryx';
import { expect } from 'chai';

export function StaticFrom(): void {
  describe('from', () => {
    describe('should create a new array from an existing array', () => {
      it('number', () => {
        const arr = [1, 2, 3];
        expect(Arryx.from(arr).entries()).deep.equal(arr);
      });

      it('string', () => {
        const arr = ['foo', 'bar', 'baz'];
        expect(Arryx.from(arr).entries()).deep.equal(arr);
      });

      it('boolean', () => {
        const arr = [true, false, true];
        expect(Arryx.from(arr).entries()).deep.equal(arr);
      });

      it('object', () => {
        const arr = [{ name: 'Arryx' }, { name: 'Array' }];
        expect(Arryx.from(arr).entries()).deep.equal(arr);
      });

      it('array', () => {
        const arr = [
          [1, 2],
          [3, 4],
          [5, 6],
        ];
        expect(Arryx.from(arr).entries()).deep.equal(arr);
      });
    });
  });
}
