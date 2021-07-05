import { Arryx } from '@arryx';
import { expect } from 'chai';

export function MethodFillDynamic(): void {
  const filler = (index: number) => index + 1;

  describe('fillDynamic', () => {
    it('should fill all all indices with the provided value', () => {
      const arr = Arryx.create(3).fillDynamic(filler);
      expect(arr.entries()).deep.equal([1, 2, 3]);
    });

    it('should fill all indices from start index', () => {
      const arr = Arryx.create(5).fillDynamic(filler, 3);
      expect(arr.entries()).deep.equal([undefined, undefined, undefined, 4, 5]);
    });

    it('should fill all indices from start index to end index', () => {
      const arr = Arryx.create(10).fillDynamic(filler, 2, 8);
      expect(arr.entries()).deep.equal([undefined, undefined, 3, 4, 5, 6, 7, 8, 9, undefined]);
    });

    it('should invert indices and fill if start index is greater than end index', () => {
      const arr = Arryx.create(10).fillDynamic(filler, 8, 2);
      expect(arr.entries()).deep.equal([undefined, undefined, 3, 4, 5, 6, 7, 8, 9, undefined]);
    });
  });
}
