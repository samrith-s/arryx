import { fillValue } from "./utils";

/**
 * A lightweight implementation over native Javascript array some extra sauce.
 *
 * Examples:
 * ```ts
 * import { ArrayX } from 'arrayx';
 * const array1 = new ArrayX() // []
 * const array2 = new ArrayX(3) // [empty x3]
 * const array3 = new ArrayX(3).fill(1) // [1, 1, 1]
 * const array4 = new ArrayX([1,2,3]) // [1, 2, 3]
 * ```
 */
export class ArrayX<T = unknown> {
  constructor(initializer: T[] | number = []) {
    if (Array.isArray(initializer)) {
      this.#array = initializer;
      this.#length = initializer.length;
    } else {
      this.#array = new Array(initializer);
      this.#length = initializer;
    }
  }

  /**
   * Local array over which functions execute.
   * @internal
   */
  #array: T[] = [];
  /**
   * Counter to maintain length of the array.
   * @internal
   */
  #length = 0;

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
    let _entries: FT[];

    if (Array.isArray(entries)) {
      _entries = entries;
    } else {
      _entries = [entries];
    }

    return ArrayX.from<FT>(_entries);
  }

  /**
   * Returns the number of entries in the array.
   */
  public get length(): number {
    return this.#length;
  }

  public get empty(): boolean {
    return !!this.length;
  }

  /**
   * Returns all the entries in the array.
   */
  public entries(): T[] {
    return this.#array;
  }

  /**
   * Insert a new entry to the end of the array.
   */
  public push(entry: T): number {
    this.#array.push(entry);
    return this.#length++;
  }

  /**
   * Insert a new entry to the beginning of the array.
   */
  public unshift(entry: T): number {
    this.#array.unshift(entry);
    return this.#length++;
  }

  /**
   * Insert a new entry at the specified index.
   */
  public insert(index: number, entries: T | T[]): number {
    if (Array.isArray(entries)) {
      let startIndex = index;
      entries.forEach((entry) => {
        this.#array.splice(startIndex, 0, entry);
        startIndex++;
        this.#length++;
      });
    } else {
      this.#array.splice(index, 0, entries);
      this.#length++;
    }

    return this.#length;
  }

  /**
   * Update the entry at a specified index.
   */
  public update(index: number, newItem: T): ArrayX<T> {
    if (index >= 0 && index < length) {
      this.#array[index] = newItem;
    }
    return this;
  }

  /**
   * Return the last entry in the array if it exists, otherwise return `undefined`.
   */
  public pop(): T | undefined {
    if (this.length) {
      this.#length--;
      return this.#array.pop();
    }
  }

  /**
   * Returns the first entry in the array if it exists, otherwise returns `undefined`.
   */
  public shift(): T | undefined {
    if (this.length) {
      this.#length--;
      return this.#array.shift();
    }
  }

  /**
   * Remove the entry at the specified index.
   */
  public removeAt(index: number): T | undefined {
    if (this.length) {
      this.#length--;
      return this.#array.splice(index, 1)[0];
    }
  }

  /**
   * Remove `N` entries in the array from a starting index. Returns the removed elements.
   */
  public removeRange(start: number, count: number): T[] {
    this.#length -= count;
    return this.#array.splice(start, count);
  }

  /**
   * Peek at the first entry in the array.
   */
  public peek(): T {
    return this.#array[0];
  }

  /**
   * Peek at the last entry in the array. This returns the reference of the entry.
   */
  public peekLast(): T {
    return this.#array[this.#length - 1];
  }

  /**
   * Peek at the entry at the specified index. This returns the reference of the entry.
   */
  public peekAt(index: number): T {
    if (index < 0) {
      return this.#array[this.#length - Math.abs(index)];
    }

    return this.#array[index];
  }

  /**
   * Returns a new array as a subset of entries from the existing instance.
   */
  public take(count: number, startIndex?: number): ArrayX<T> {
    const entries: T[] = [];
    for (let i = startIndex || 0; i < count; i++) {
      const peekedItem = this.peekAt(i);
      if (peekedItem) {
        entries.push(peekedItem);
      }
    }

    return ArrayX.from(entries);
  }

  /**
   * Find an entry which matches the criteria.
   */
  public find(finder: (entry: T) => boolean): T | undefined {
    return this.#array.find(finder);
  }

  /**
   * Find the index of the entry in the array, given a predicate
   */
  public findIndex(predicate: (entry: T) => boolean): number {
    return this.#array.findIndex(predicate);
  }

  /**
   * Find the index of an entry.
   */
  public indexOf(entry: T): number {
    return this.#array.indexOf(entry);
  }

  /**
   * Find the index of last occurence of an entry.
   */
  public lastIndexOf(entry: T): number {
    return this.#array.lastIndexOf(entry);
  }

  /**
   * Check if some entries in the array match the predicate.
   */
  public some(predicate: (entry: T) => boolean): boolean {
    return this.#array.some(predicate);
  }

  /**
   * Check if all entries in the array match the predicate.
   */
  public every(predicate: (entry: T) => boolean): boolean {
    return this.#array.every(predicate);
  }

  /**
   * Check whether the array includes a certain entry.
   */
  public includes(entry: T, fromIndex?: number): boolean {
    return this.#array.includes(entry, fromIndex);
  }

  /**
   * Sorts and returns the instance of the array.
   */
  public sort(sorter?: (firstEntry: T, secondEntry: T) => number): ArrayX<T> {
    this.#array.sort(sorter);
    return this;
  }

  /**
   * Reverses the entries in the array. This method mutates the entries in the array and returns a reference the instance of the array.
   */
  public reverse(): ArrayX<T> {
    this.#array.reverse();
    return this;
  }

  /**
   * Calls the specified reducer for all entries in the array. Returns the accumulated result.
   */
  public reduce<NT = T>(
    reducer: (previous: NT, current: T, index: number, entries: T[]) => NT,
    initialValue: NT
  ): NT {
    return this.#array.reduce<NT>(reducer, initialValue);
  }

  /**
   * Calls the specified callback function for all the entries the array, in descending order. Returns the accumulated result.
   */
  public reduceRight<NT = T>(
    reducer: (previous: NT, current: T, index: number, entries: T[]) => NT,
    initialValue: NT
  ): NT {
    return this.#array.reduceRight<NT>(reducer, initialValue);
  }

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
   */
  public flat<NT = T>(depth?: number): ArrayX<NT> {
    const newEntries = this.#array.flat(depth) as unknown as NT[];
    return ArrayX.from<NT>(newEntries);
  }

  /**
   * Calls a defined callback function on each entry of the array. Then, flattens the result into a new array.
   */
  public flatMap<NT = T>(
    mapper: (entry: T, index: number, entries: T[]) => NT | readonly NT[]
  ): ArrayX<NT> {
    const newEntries = this.#array.flatMap(mapper) as unknown as NT[];
    return ArrayX.from<NT>(newEntries);
  }

  /**
   * Calls a defined callback function on each entry of the array, and returns an new array that contains the results.
   */
  public map<NT = T>(mapper: (entry: T, index: number, entries: T[]) => NT): ArrayX<NT> {
    const newEntries = this.#array.map(mapper);
    return ArrayX.from<NT>(newEntries);
  }

  /**
   * Performs the specified action for each entry in the array.
   */
  public forEach(iterator: (value: T, index: number, entries: T[]) => void): void {
    this.#array.forEach(iterator);
  }

  /**
   * Returns a new array with entries of the array that meet the predicate.
   */
  public filter(predicate: (value: T, index: number, entries: T[]) => value is T): ArrayX<T> {
    const newEntries = this.#array.filter<T>(predicate);
    return ArrayX.from<T>(newEntries);
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
      entries: _this.#array,
      length: _this.#length,
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
      entries: _this.#array,
      length: _this.#length,
      startIndex,
      endIndex,
    });
    return _this;
  }

  /**
   * Concatenates two arrays and returns a new array pre-filled with the entries from the two arrays.
   */
  public concat<N>(array: ArrayX<N>): ArrayX<T | N> {
    const newEntries: (T | N)[] = [...this.#array, ...array.entries()];
    return ArrayX.from<T | N>(newEntries);
  }

  /**
   * Adds all the entries of the array into a string, separated by the specified separator string.
   */
  public join(separator?: string): string {
    return this.#array.join(separator);
  }

  /**
   * Creates a shallow copy of the array.
   */
  public clone(): ArrayX<T> {
    return ArrayX.from<T>(this.#array);
  }

  /**
   * Clear all entries from the array.
   */
  public clear(): ArrayX<T> {
    this.#array = [];
    this.#length = 0;
    return this;
  }

  /**
   * Returns an iterable of entries in the array.
   */
  public values(): Iterable<T> {
    return this.#array.values();
  }

  /**
   * Returns a string representation of the array.
   */
  public toString(): string {
    return this.#array.toString();
  }
}
