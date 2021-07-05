import { Arryx } from '@arryx';
import { expect } from 'chai';

export function StaticIs(): void {
  describe('is', () => {
    it('should check if the passed value is an instance of Arryx', () => {
      expect(Arryx.is(1)).to.be.false;
      expect(Arryx.is('foo')).to.be.false;
      expect(Arryx.is({ name: 'Arryx' })).to.be.false;
      expect(Arryx.is([1, 2, 3])).to.be.false;
      expect(Arryx.is(new Arryx())).to.be.true;
    });
  });
}
