import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodFill(): void {
  describe('fill', () => {
    it('should fill all all indices with the provided value', () => {
      const arr = Arryx.create(3).fill('foo');
      expect(arr.entries()).deep.equal(['foo', 'foo', 'foo']);
    });

    it('should fill all indices from start index', () => {
      const arr = Arryx.create(5).fill(1, 3);
      expect(arr.entries()).deep.equal([undefined, undefined, undefined, 1, 1]);
    });

    it('should fill all indices from start index to end index', () => {
      const arr = Arryx.create(10).fill(1, 2, 8);
      expect(arr.entries()).deep.equal([undefined, undefined, 1, 1, 1, 1, 1, 1, 1, undefined]);
    });

    it('should invert indices and fill if start index is greater than end index', () => {
      const arr = Arryx.create(10).fill(1, 8, 2);
      expect(arr.entries()).deep.equal([undefined, undefined, 1, 1, 1, 1, 1, 1, 1, undefined]);
    });
  });
}
