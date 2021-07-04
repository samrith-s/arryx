# Arryx

A lightweight implementation over native Javascript array for some extra sauce.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  - [Static methods](#static-methods)
    - [`from`](#from)
    - [`is`](#is)
  - [Properties](#properties)
    - [`empty`](#empty)
    - [`length`](#length)
  - [Methods](#methods)
    - [`clear`](#clear)
    - [`clone`](#clone)
    - [`concat`](#concat)
    - [`entries`](#entries)
    - [`every`](#every)
    - [`fill`](#fill)
    - [`fillDynamic`](#fillDynamic)
    - [`filter`](#filter)
    - [`find`](#find)
    - [`findIndex`](#findIndex)
    - [`flat`](#flat)
    - [`flatMap`](#flatMap)
    - [`forEach`](#forEach)
    - [`includes`](#includes)
    - [`indexOf`](#indexOf)
    - [`insert`](#insert)
    - [`join`](#join)
    - [`lastIndexOf`](#lastIndexOf)
    - [`map`](#map)
    - [`peek`](#peek)
    - [`peekAt`](#peekAt)
    - [`peekLast`](#peekLast)
    - [`pop`](#pop)
    - [`push`](#push)
    - [`reduce`](#reduce)
    - [`reduceRight`](#reduceRight)
    - [`removeAt`](#removeAt)
    - [`removeRange`](#removeRange)
    - [`reverse`](#reverse)
    - [`shift`](#shift)
    - [`some`](#some)
    - [`sort`](#sort)
    - [`take`](#take)
    - [`toString`](#toString)
    - [`unshift`](#unshift)
    - [`update`](#update)
    - [`values`](#values)

---

## Installation

```shell
# via NPM
npm install arrayx

# via Yarn
yarn add arrayx
```

---

## Usage

The package exposes the `ArrayX` class which can be used to instantiate a new array.

```ts
import { ArrayX } from "arrayx";
const array = new ArrayX();
```

---

## API

The `ArrayX` class follows the native Javascript arrays very closely and tries to mimic and provide as many inbuilt methods as possible so as to not cause a drastic change in the API.

### Initialization

WIP

### Static methods

- #### `from`

  Creates a new array from given entry(ies).

  ##### Signature:

  ```ts
  static from<FT>(entries: FT | FT[]): ArrayX<FT>
  ```

  ##### Example:

  ```ts
  const arr = Array.from("a"); // ['a']
  ```

  ```ts
  const arr = Array.from([1, 2, 3]); // [1, 2, 3]
  ```

- #### `is`

  Checks if the provided argument is an instance of `ArrayX` or not

  ##### Signature:

  ```ts
  static is(object: unknown): boolean
  ```

  ##### Example:

  ```ts
  console.log(ArrayX.is({})); // false
  ```

  ```ts
  const arr = new ArrayX();
  console.log(ArrayX.is(arr)); // true
  ```

### Properties

- #### `empty`

  Returns whether the array is empty or not.

  ##### Return type: `boolean`

  ##### Example:

  ```ts
  const arr = new ArrayX();
  console.log(arr.empty); // true
  ```

- #### `length`
  Returns the number of entries in the array.
  ##### Return type: `number`
  ##### Example:
  ```ts
  const arr = new ArrayX([1, 2, 3]);
  console.log(arr.length); // 3
  ```

### Methods

- #### `clear`

  Clear all entries from the array.

  ##### Signature:

  ```ts
  public clear(): ArrayX<T>
  ```

  ##### Example:

  ```ts
  const arr = new ArrayX([1, 2, 3, 4, 5]);
  console.log(arr.entries()); // [1, 2, 3, 4, 5]
  console.log(arr.length); // 5
  arr.clear();
  console.log(arr.entries()); // []
  console.log(arr.length); // 0
  ```

- #### `clone`

  Creates a shallow copy of the array.

  ##### Signature:

  ```ts
  public clone(): ArrayX<T>
  ```

  ##### Example:

  ```ts
  const arr1 = new ArrayX([1, 2, 3]);
  const arr2 = arr1.clone();
  arr2.update(0, 10);
  console.log(arr1.entries()); // [1, 2, 3]
  console.log(arr2.entries()); // [10, 2, 3]
  ```

- #### `concat`

  Concatenates two arrays and returns a new array pre-filled with the entries from the two arrays.

  ##### Signature:

  ```ts
  public concat<N>(array: ArrayX<N>): ArrayX<T | N>
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `entries`

  Returns all the entries in the array.

  ##### Signature:

  ```ts
  public entries(): T[]
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `every`

  Check if all entries in the array match the predicate.

  ##### Signature:

  ```ts
  public every(predicate: (entry: T) => boolean): boolean
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `fill`

  Returns the instance of the array after filling the ranges identified by start and end indices with the specified value.

  ##### Signature:

  ```ts
  public fill<N = T>(
    value: N extends Function ? never : N,
    startIndex?: number,
    endIndex?: number
  ): ArrayX<N>
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `fillDynamic`

  Returns the instance of the array after filling the ranges identified by start and end indices, while running the callback for each index in the array.

  ##### Signature:

  ```ts
  public fillDynamic<N = T>(
    filler: (index: number, entries: N[]) => N,
    startIndex?: number,
    endIndex?: number
  ): ArrayX<N>
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `filter`

  Returns a new array with entries of the array that meet the predicate.

  ##### Signature:

  ```ts
  public filter(predicate: (value: T, index: number, entries: T[]) => value is T): ArrayX<T>
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `find`

  Find an entry which matches the criteria.

  ##### Signature:

  ```ts
  public find(finder: (entry: T) => boolean): T | undefined
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `findIndex`

  Find the index of the entry in the array, given a predicate.

  ##### Signature:

  ```ts
  public findIndex(predicate: (entry: T) => boolean): number
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `flat`

  Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

  ##### Signature:

  ```ts
  public flat<NT = T>(depth?: number): ArrayX<NT>
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `flatMap`

  Calls a defined callback function on each entry of the array. Then, flattens the result into a new array.

  ##### Signature:

  ```ts
  public flatMap<NT = T>(
    mapper: (entry: T, index: number, entries: T[]) => NT | readonly NT[]
  ): ArrayX<NT>
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `forEach`

  Performs the specified action for each entry in the array.

  ##### Signature:

  ```ts
  public forEach(iterator: (value: T, index: number, entries: T[]) => void): void
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `includes`

  Check whether the array includes a certain entry.

  ##### Signature:

  ```ts
  public includes(entry: T, fromIndex?: number): boolean
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `indexOf`

  Find the index of an entry.

  ##### Signature:

  ```ts
  public indexOf(entry: T): number
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `insert`

  Insert a new entry at the specified index.

  ##### Signature:

  ```ts
  public insert(index: number, entries: T | T[]): number
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `join`

  Adds all the entries of the array into a string, separated by the specified separator string.

  ##### Signature:

  ```ts
  public join(separator?: string): string
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `lastIndexOf`

  Find the index of last occurence of an entry.

  ##### Signature:

  ```ts
  public lastIndexOf(entry: T): number
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `map`

  Calls a defined callback function on each entry of the array, and returns an new array that contains the results.

  ##### Signature:

  ```ts
  public map<NT = T>(mapper: (entry: T, index: number, entries: T[]) => NT): ArrayX<NT>
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `peek`

  Peek at the first entry in the array.

  ##### Signature:

  ```ts
  public peek(): T
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `peekAt`

  Peek at the entry at the specified index. This returns the reference of the entry.

  ##### Signature:

  ```ts
  public peekAt(index: number): T
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `peekLast`

  Peek at the last entry in the array. This returns the reference of the entry.

  ##### Signature:

  ```ts
  public peekLast(): T
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `pop`

  Return the last entry in the array if it exists, otherwise return `undefined`.

  ##### Signature:

  ```ts
  public pop(): T | undefined
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `push`

  Insert a new entry to the end of the array.

  ##### Signature:

  ```ts
  public push(entry: T): number
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `reduce`

  Calls the specified reducer for all entries in the array. Returns the accumulated result.

  ##### Signature:

  ```ts
  public reduce<NT = T>(
    reducer: (previous: NT, current: T, index: number, entries: T[]) => NT,
    initialValue: NT
  ): NT
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `reduceRight`

  Calls the specified callback function for all the entries the array, in descending order. Returns the accumulated result.

  ##### Signature:

  ```ts
  public reduceRight<NT = T>(
    reducer: (previous: NT, current: T, index: number, entries: T[]) => NT,
    initialValue: NT
  ): NT
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `removeAt`

  Remove the entry at the specified index.

  ##### Signature:

  ```ts
  public removeAt(index: number): T | undefined
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `removeRange`

  Remove `N` entries in the array from a starting index. Returns the removed elements.

  ##### Signature:

  ```ts
  public removeRange(start: number, count: number): T[]
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `reverse`

  Reverses the entries in the array. This method mutates the entries in the array and returns a reference the instance of the array.

  ##### Signature:

  ```ts
  public reverse(): ArrayX<T>
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `shift`

  Returns the first entry in the array if it exists, otherwise returns `undefined`.

  ##### Signature:

  ```ts
  public shift(): T | undefined
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `some`

  Check if some entries in the array match the predicate.

  ##### Signature:

  ```ts
  public some(predicate: (entry: T) => boolean): boolean
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `sort`

  Sorts and returns the instance of the array.

  ##### Signature:

  ```ts
  public sort(sorter?: (firstEntry: T, secondEntry: T) => number): ArrayX<T>
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `take`

  Returns a new array as a subset of entries from the existing instance.

  ##### Signature:

  ```ts
  public take(count: number, startIndex?: number): ArrayX<T>
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `toString`

  Returns a string representation of the array.

  ##### Signature:

  ```ts
   public toString(): string
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `unshift`

  Insert a new entry to the beginning of the array.

  ##### Signature:

  ```ts
   public unshift(entry: T): number
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `update`

  Update the entry at a specified index.

  ##### Signature:

  ```ts
   public update(index: number, newItem: T): ArrayX<T>
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```

- #### `values`

  Returns an iterable of entries in the array.

  ##### Signature:

  ```ts
   public values(): Iterable<T>
  ```

  ##### Example:

  ```ts
  /** Code here **/
  ```
