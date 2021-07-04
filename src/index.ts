import { fillValue } from "./utils";

/**
 * A simple abstraction over the native `Array` which adds extra flavour to concise usage.
 *
 * Examples:
 * ```ts
 * const array = new ArrayX()
 * ```
 * ```ts
 * const array = new ArrayX(3)
 * ```
 * ```ts
 * const array = new ArrayX([1,2,3])
 * ```
 */
export class ArrayX<T = unknown> {
  constructor(initializer: T[] | number = []) {
    if (Array.isArray(initializer)) {
      this.#_array = initializer;
      this.#_length = initializer.length;
    } else {
      this.#_array = new Array(initializer);
      this.#_length = initializer;
    }
  }

  /**
   * Local array over which functions execute.
   * @internal
   */
  #_array: T[] = [];
  /**
   * Counter to maintain length of the array.
   * @internal
   */
  #_length = 0;

  /**
   * Checks if the provided argument is an instance of `ArrayX` or not.
   */
  static is(object: unknown): boolean {
    return object instanceof ArrayX;
  }

  /**
   * Creates a new array from an entries.
   */
  static from<FT>(entries: FT | FT[]): ArrayX<FT> {
    let _items: FT[];

    if (Array.isArray(entries)) {
      _items = entries;
    } else {
      _items = [entries];
    }

    return new ArrayX<FT>(_items);
  }

  /**
   * Returns the number of entries in the array.
   */
  public get length(): number {
    return this.#_length;
  }

  public get empty(): boolean {
    return !!this.length;
  }

  /**
   * Returns all the entries in the array.
   */
  public entries(): T[] {
    return this.#_array;
  }

  /**
   * Insert a new entry to the end of the array.
   */
  public push(entry: T): number {
    this.#_array.push(entry);
    return this.#_length++;
  }

  /**
   * Insert a new entry to the beginning of the array.
   */
  public unshift(entry: T): number {
    this.#_array.unshift(entry);
    return this.#_length++;
  }

  /**
   * Insert a new entry at the specified index.
   */
  public insert(index: number, entries: T | T[]): number {
    if (Array.isArray(entries)) {
      let startIndex = index;
      entries.forEach((entry) => {
        this.#_array.splice(startIndex, 0, entry);
        startIndex++;
        this.#_length++;
      });
    } else {
      this.#_array.splice(index, 0, entries);
      this.#_length++;
    }

    return this.#_length;
  }

  /**
   * Update the entry at a specified index.
   */
  public update(index: number, newItem: T): ArrayX<T> {
    if (index >= 0 && index < length) {
      this.#_array[index] = newItem;
    }
    return this;
  }

  /**
   * Return the last entry in the array if it exists, otherwise return `undefined`.
   */
  public pop(): T | undefined {
    if (this.length) {
      this.#_length--;
      return this.#_array.pop();
    }
  }

  /**
   * Returns the first entry in the array if it exists, otherwise returns `undefined`.
   */
  public shift(): T | undefined {
    if (this.length) {
      this.#_length--;
      return this.#_array.shift();
    }
  }

  /**
   * Remove the entry at the specified index.
   */
  public removeAt(index: number): T | undefined {
    if (this.length) {
      this.#_length--;
      return this.#_array.splice(index, 1)[0];
    }
  }

  /**
   * Remove `N` entries in the array from a starting index.
   */
  public removeRange(start: number, count: number): T[] {
    this.#_length -= count;
    return this.#_array.splice(start, count);
  }

  /**
   * Peek at the first entry in the array.
   */
  public peek(): T {
    return this.#_array[0];
  }

  /**
   * Peek at the last entry in the array. This returns the reference of the entry.
   */
  public peekLast(): T {
    return this.#_array[this.#_length - 1];
  }

  /**
   * Peek at the entry at the specified index. This returns the reference of the entry.
   */
  public peekAt(index: number): T {
    if (index < 0) {
      return this.#_array[this.#_length - Math.abs(index)];
    }

    return this.#_array[index];
  }

  /**
   * Returns the first `N` items of the array from the specified start index.
   */
  public take(count: number, startIndex?: number): T[] {
    const entries: T[] = [];
    for (let i = startIndex || 0; i < count; i++) {
      entries.push(this.peekAt(i));
    }
    return entries;
  }

  /**
   * Find an entry which matches the criteria.
   */
  public find(finder: (entry: T) => boolean): T | undefined {
    return this.#_array.find(finder);
  }

  /**
   * Find the index of the entry in the array, given a predicate
   */
  public findIndex(predicate: (entry: T) => boolean): number {
    return this.#_array.findIndex(predicate);
  }

  /**
   * Find the index of an entry.
   */
  public indexOf(entry: T): number {
    return this.#_array.indexOf(entry);
  }

  /**
   * Find the index of last occurence of an entry.
   */
  public lastIndexOf(entry: T): number {
    return this.#_array.lastIndexOf(entry);
  }

  /**
   * Check if some entries in the array match the predicate.
   */
  public some(predicate: (entry: T) => boolean): boolean {
    return this.#_array.some(predicate);
  }

  /**
   * Check if all entries in the array match the predicate.
   */
  public every(predicate: (entry: T) => boolean): boolean {
    return this.#_array.every(predicate);
  }

  /**
   * Check whether the array includes a certain entry.
   */
  public includes(item: T, fromIndex?: number): boolean {
    return this.#_array.includes(item, fromIndex);
  }

  /**
   * Sorts and returns the instance of the array.
   */
  public sort(sorter?: (itemA: T, itemB: T) => number): ArrayX<T> {
    this.#_array.sort(sorter);
    return this;
  }

  /**
   * Reverses the entries in the array. This method mutates the entries in the array and returns a reference the instance of the array.
   */
  public reverse(): ArrayX<T> {
    this.#_array.reverse();
    return this;
  }

  /**
   * Calls the specified reducer for all entries in the array. Returns the accumulated result.
   */
  public reduce<NT = T>(
    reducer: (previous: NT, current: T, index: number, entries: T[]) => NT,
    initialValue: NT
  ): NT {
    return this.#_array.reduce<NT>(reducer, initialValue);
  }

  /**
   * Calls the specified callback function for all the entries the array, in descending order. Returns the accumulated result.
   */
  public reduceRight<NT = T>(
    reducer: (previous: NT, current: T, index: number, entries: T[]) => NT,
    initialValue: NT
  ): NT {
    return this.#_array.reduceRight<NT>(reducer, initialValue);
  }

  /**
   * Calls a defined callback function on each entry of the array, and returns an array that contains the results.
   */
  public map<NT = T>(mapper: (entry: T, index: number, entries: T[]) => NT): NT[] {
    return this.#_array.map(mapper);
  }

  /**
   * Returns the entries of the array that meet the predicate.
   */
  public filter(predicate: (value: T, index: number, entries: T[]) => value is T): T[] {
    return this.#_array.filter<T>(predicate);
  }

  /**
   * Returns the instance of the array after filling the ranges identified by start and end indices with the specified value.
   */
  public fill<N = T>(
    // eslint-disable-next-line @typescript-eslint/ban-types
    value: N extends Function ? never : N,
    startIndex?: number,
    endIndex?: number
  ): ArrayX<N> {
    const _this = this as unknown as ArrayX<N>;
    fillValue({
      value,
      entries: _this.#_array,
      length: _this.#_length,
      startIndex,
      endIndex,
    });
    return _this;
  }

  /**
   * Returns the instance of the array after filling the ranges identified by start and end indices, while running the callback for each index in the array.
   */
  public fillDynamic<N = T>(
    filler: (index: number, entries: N[]) => N,
    startIndex?: number,
    endIndex?: number
  ): ArrayX<N> {
    const _this = this as unknown as ArrayX<N>;
    fillValue({
      value: filler,
      entries: _this.#_array,
      length: _this.#_length,
      startIndex,
      endIndex,
    });
    return _this;
  }

  /**
   * Concatenates two stacks and returns a new array pre-filled with tne entries from the two stacks.
   */
  public concat<N>(array: ArrayX<N>): ArrayX<T | N> {
    const newItems: (T | N)[] = [...this.#_array, ...array.entries()];
    return new ArrayX<T | N>(newItems);
  }

  /**
   * Adds all the entries of the array into a string, separated by the specified separator string.
   */
  public join(separator?: string): string {
    return this.#_array.join(separator);
  }

  /**
   * Creates a shallow copy of the array.
   */
  public clone(): ArrayX<T> {
    return new ArrayX<T>(this.#_array);
  }

  /**
   * Clear all entries from the array.
   */
  public clear(): ArrayX<T> {
    this.#_array = [];
    this.#_length = 0;
    return this;
  }
}
