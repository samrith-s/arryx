import { Arryx } from '@arryx';
import { expect } from 'chai';

describe('Constructor', () => {
  it('should initialize with an emty array', () => {
    const arr = new Arryx();
    expect(arr.entries()).deep.equal([]);
  });

  it('should initialize from an empty array', () => {
    const empty = new Array(4);
    const arr = new Arryx(empty);
    expect(arr.entries()).deep.equal(empty);
  });

  describe('should initialize an array with a single item', () => {
    it('number', () => {
      const arr1 = new Arryx(1);
      expect(arr1.entries()).deep.equal([1]);
    });

    it('string', () => {
      const arr1 = new Arryx('foo');
      expect(arr1.entries()).deep.equal(['foo']);
    });

    it('boolean', () => {
      const arr1 = new Arryx(true);
      expect(arr1.entries()).deep.equal([true]);
    });

    it('object', () => {
      const arr1 = new Arryx({ name: 'Arryx' });
      expect(arr1.entries()).deep.equal([{ name: 'Arryx' }]);
    });

    it('array', () => {
      const arr1 = new Arryx([[3, 4]]);
      expect(arr1.entries()).deep.equal([[3, 4]]);
    });
  });

  describe('should initialize an array with multiple items', () => {
    it('number', () => {
      const arr1 = new Arryx([1, 2, 3]);
      expect(arr1.entries()).deep.equal([1, 2, 3]);
    });

    it('string', () => {
      const arr1 = new Arryx(['foo', 'bar', 'baz']);
      expect(arr1.entries()).deep.equal(['foo', 'bar', 'baz']);
    });

    it('boolean', () => {
      const arr1 = new Arryx([true, false, true]);
      expect(arr1.entries()).deep.equal([true, false, true]);
    });

    it('object', () => {
      const arr1 = new Arryx([{ name: 'Arryx' }, { name: 'Array' }]);
      expect(arr1.entries()).deep.equal([{ name: 'Arryx' }, { name: 'Array' }]);
    });

    it('array', () => {
      const arr1 = new Arryx([
        [1, 2],
        [3, 4],
      ]);
      expect(arr1.entries()).deep.equal([
        [1, 2],
        [3, 4],
      ]);
    });
  });
});
