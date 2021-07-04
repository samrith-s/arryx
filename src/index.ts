import { fillValue } from "./utils";

/**
 * A lightweight implementation over native Javascript array for some extra sauce..
 *
 * Examples:
 * ```ts
 * import { Arryx } from 'arryx';
 * const array1 = new Arryx() // []
 * const array2 = new Arryx(3) // [3]
 * const array3 = new Arryx([1,2,3]) // [1, 2, 3]
 * ```
 */
export class Arryx<T = unknown> {
  /**
   * Create an new array.
   */
  constructor(initialValues?: T | T[]) {
    if (initialValues !== undefined) {
      if (Array.isArray(initialValues)) {
        this.#array = initialValues;
        this.#length = initialValues.length;
      } else {
        this.#array = [initialValues];
        this.#length = 1;
      }
    }
  }

  /**
   * Create a new array of the specified size.
   */
  static create<NT>(size: number): Arryx<NT> {
    const emptyInitial = new Array(size);
    return Arryx.from<NT>(emptyInitial);
  }

  /**
   * Creates a new array from given entry(ies).
   */
  static from<FT>(entries: FT | FT[]): Arryx<FT> {
    let _entries: FT[];

    if (Array.isArray(entries)) {
      _entries = entries;
    } else {
      _entries = [entries];
    }

    return new Arryx<FT>(_entries);
  }

  /**
   * Checks if the provided argument is an instance of `Arryx` or not.
   */
  static is(object: unknown): boolean {
    return object instanceof Arryx;
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
   * Returns whether the array is empty or not.
   */
  get empty(): boolean {
    return !!this.length;
  }

  /**
   * Returns the number of entries in the array.
   */
  get length(): number {
    return this.#length;
  }

  /**
   * Clear all entries from the array.
   */
  public clear(): Arryx<T> {
    this.#array = [];
    this.#length = 0;
    return this;
  }

  /**
   * Creates a shallow copy of the array.
   */
  public clone(): Arryx<T> {
    return Arryx.from<T>(this.#array);
  }

  /**
   * Concatenates two arrays and returns a new array pre-filled with the entries from the two arrays.
   */
  public concat<N>(array: Arryx<N>): Arryx<T | N> {
    const newEntries: (T | N)[] = [...this.#array, ...array.entries()];
    return Arryx.from<T | N>(newEntries);
  }

  /**
   * Returns all the entries in the array.
   */
  public entries(): T[] {
    return this.#array;
  }

  /**
   * Check if all entries in the array match the predicate.
   */
  public every(predicate: (entry: T) => boolean): boolean {
    return this.#array.every(predicate);
  }

  /**
   * Returns the instance of the array after filling the ranges identified by start and end indices with the specified value.
   */
  public fill<N = T>(
    // eslint-disable-next-line @typescript-eslint/ban-types
    value: N extends Function ? never : N,
    startIndex?: number,
    endIndex?: number
  ): Arryx<N> {
    const _this = this as unknown as Arryx<N>;
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
  ): Arryx<N> {
    const _this = this as unknown as Arryx<N>;
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
   * Returns a new array with entries of the array that meet the predicate.
   */
  public filter(predicate: (value: T, index: number, entries: T[]) => value is T): Arryx<T> {
    const newEntries = this.#array.filter<T>(predicate);
    return Arryx.from<T>(newEntries);
  }

  /**
   * Find an entry which matches the criteria.
   */
  public find(finder: (entry: T) => boolean): T | undefined {
    return this.#array.find(finder);
  }

  /**
   * Find the index of the first matching entry in the array, given a predicate. If no match found, returns `-1`.
   */
  public findIndex(predicate: (entry: T) => boolean): number {
    return this.#array.findIndex(predicate);
  }

  /**
   * Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
   */
  public flat<NT = T>(depth?: number): Arryx<NT> {
    const newEntries = this.#array.flat(depth) as unknown as NT[];
    return Arryx.from<NT>(newEntries);
  }

  /**
   * Calls a defined callback function on each entry of the array. Then, flattens the result into a new array.
   */
  public flatMap<NT = T>(
    mapper: (entry: T, index: number, entries: T[]) => NT | readonly NT[]
  ): Arryx<NT> {
    const newEntries = this.#array.flatMap(mapper) as unknown as NT[];
    return Arryx.from<NT>(newEntries);
  }

  /**
   * Performs the specified action for each entry in the array.
   */
  public forEach(iterator: (value: T, index: number, entries: T[]) => void): void {
    this.#array.forEach(iterator);
  }

  /**
   * Check whether the array includes a certain entry.
   */
  public includes(entry: T, fromIndex?: number): boolean {
    return this.#array.includes(entry, fromIndex);
  }

  /**
   * Find the index of the first occurence of an entry. If no match found, returns `-1`.
   */
  public indexOf(entry: T, fromindex?: number): number {
    return this.#array.indexOf(entry, fromindex);
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
   * Adds all the entries of the array into a string, separated by the specified separator string.
   */
  public join(separator?: string): string {
    return this.#array.join(separator);
  }

  /**
   * Find the index of last occurence of an entry. If no match found, returns `-1`.
   */
  public lastIndexOf(entry: T, fromIndex?: number): number {
    return this.#array.lastIndexOf(entry, fromIndex);
  }

  /**
   * Calls a defined callback function on each entry of the array, and returns an new array that contains the results.
   */
  public map<NT = T>(mapper: (entry: T, index: number, entries: T[]) => NT): Arryx<NT> {
    const newEntries = this.#array.map(mapper);
    return Arryx.from<NT>(newEntries);
  }

  /**
   * Peek at the first entry in the array.
   */
  public peek(): T {
    return this.#array[0];
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
   * Peek at the last entry in the array. This returns the reference of the entry.
   */
  public peekLast(): T {
    return this.#array[this.#length - 1];
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
   * Insert a new entry to the end of the array.
   */
  public push(entry: T): number {
    this.#array.push(entry);
    return this.#length++;
  }

  /**
   * Calls the specified reducer for all entries in the array, in the left-to-right order. Returns the accumulated result.
   */
  public reduce<NT = T>(
    reducer: (previous: NT, current: T, index: number, entries: T[]) => NT,
    initialValue: NT
  ): NT {
    return this.#array.reduce<NT>(reducer, initialValue);
  }

  /**
   * Calls the specified callback function for all the entries the array, in right-to-left order. Returns the accumulated result.
   */
  public reduceRight<NT = T>(
    reducer: (previous: NT, current: T, index: number, entries: T[]) => NT,
    initialValue: NT
  ): NT {
    return this.#array.reduceRight<NT>(reducer, initialValue);
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
   * Reverses the entries in the array. This method mutates the entries in the array and returns a reference the instance of the array.
   */
  public reverse(): Arryx<T> {
    this.#array.reverse();
    return this;
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
   * Check if some entries in the array match the predicate.
   */
  public some(predicate: (entry: T) => boolean): boolean {
    return this.#array.some(predicate);
  }

  /**
   * Sorts and returns the instance of the array.
   */
  public sort(sorter?: (firstEntry: T, secondEntry: T) => number): Arryx<T> {
    this.#array.sort(sorter);
    return this;
  }

  /**
   * Returns a new array as a subset of entries from the existing instance.
   */
  public take(count: number, startIndex?: number): Arryx<T> {
    const start = startIndex ?? 0;
    const total = start + count;
    const entries = this.#array.slice(start, total);
    return Arryx.from(entries);
  }

  /**
   * Returns a string representation of the array.
   */
  public toString(): string {
    return this.#array.toString();
  }

  /**
   * Insert a new entry to the beginning of the array.
   */
  public unshift(entry: T): number {
    this.#array.unshift(entry);
    return this.#length++;
  }

  /**
   * Update the entry at a specified index.
   */
  public update(index: number, newItem: T): Arryx<T> {
    if (index >= 0 && index < length) {
      this.#array[index] = newItem;
    }
    return this;
  }

  /**
   * Returns an iterable of entries in the array.
   */
  public values(): Iterable<T> {
    return this.#array.values();
  }
}
