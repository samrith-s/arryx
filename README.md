# Arryx

[![version](https://badgen.net/npm/v/arryx)](https://www.npmjs.com/package/arryx) [![minzip size](https://badgen.net/bundlephobia/minzip/arryx)](https://bundlephobia.com/package/arryx) [![checks](https://github.com/samrith-s/arryx/actions/workflows/checks.yml/badge.svg)](https://github.com/samrith-s/arryx/actions/workflows/checks.yml)

> A lightweight implementation over native Javascript array for some extra sauce.

Ever felt like arrays in Javascript are tedious to work with? Then this is the extension to arrays that you deserve. Arryx is a comprehensive library which provides extra firepower to make working with arrays a breeze. All this in [**less than 2kb**](https://bundlephobia.com/package/arryx).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  - [Static methods](#static-methods)
    - [`create`](#create)
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
    - [`insertAfter`](#insertAfter)
    - [`insertBefore`](#insertBefore)
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
- [Differences](#differences)
- [Contributing](#contributing)

## Installation

- ### via NPM
  ```shell
  npm install arryx
  ```
- ### via Yarn
  ```shell
  yarn add arryx
  ```

## Usage

The package exposes the `Arryx` class which can be used to instantiate a new array.

```ts
import { Arryx } from 'arryx';
const array = new Arryx();
```

## API

The `Arryx` class follows the native Javascript arrays very closely and tries to mimic and provide as many inbuilt methods as possible so as to not cause a drastic change in the API.

### Initialization

The `Arryx` class can be initialised almost exactly like the regular `Array` class.

- #### Empty array
  ```ts
  const arr = new Arryx();
  ```
- #### With a single element

  ```ts
  const arr = new Arryx('foo'); // ['foo']
  ```

  ```ts
  const arr = Arryx.from('foo'); // ['foo']
  ```

- #### With multiple elements

  ```ts
  const arr = new Arryx([1, 2, 3]); // [1, 2, 3]
  ```

  ```ts
  const arr = Arryx.from([1, 2, 3]); // [1, 2, 3]
  ```

- #### Empty array of size `N`
  ```ts
  const arr = Arryx.create(3); // [empty x3]
  ```
  ```ts
  const arr = Arryx.from(new Array(3)); // [empty x3]
  ```

### Static methods

- #### `create`

  Create a new array of the specified size.

  ##### Signature:

  ```ts
  static create<NT>(size: number): Arryx<NT>
  ```

  ##### Example:

  ```ts
  const arr = Arryx.create(3); // [empty x3]
  ```

- #### `from`

  Creates a new array from given entry(ies).

  ##### Signature:

  ```ts
  static from<FT>(entries: FT | FT[]): Arryx<FT>
  ```

  ##### Example:

  ```ts
  const arr1 = Arryx.from('a'); // ['a']
  const arr2 = Arryx.from([1, 2, 3]); // [1, 2, 3]
  ```

- #### `is`

  Checks if the provided argument is an instance of `Arryx` or not

  ##### Signature:

  ```ts
  static is(object: unknown): boolean
  ```

  ##### Example:

  ```ts
  const arr = new Arryx();
  Arryx.is(arr); // true
  Arryx.is({}); // false
  ```

### Properties

- #### `empty`

  Returns whether the array is empty or not.

  ##### Return type: `boolean`

  ##### Example:

  ```ts
  const arr = new Arryx();
  arr.empty; // true
  ```

- #### `length`
  Returns the number of entries in the array.
  ##### Return type: `number`
  ##### Example:
  ```ts
  const arr = new Arryx([1, 2, 3]);
  arr.length; // 3
  ```

### Methods

- #### `clear`

  Clear all entries from the array.

  ##### Signature:

  ```ts
  public clear(): Arryx<T>
  ```

  ##### Example:

  ```ts
  const arr = new Arryx([1, 2, 3, 4, 5]);
  arr.entries(); // [1, 2, 3, 4, 5]
  arr.length; // 5
  arr.clear();
  arr.entries(); // []
  arr.length; // 0
  ```

- #### `clone`

  Creates a shallow copy of the array.

  ##### Signature:

  ```ts
  public clone(): Arryx<T>
  ```

  ##### Example:

  ```ts
  const arr1 = new Arryx([1, 2, 3]);
  const arr2 = arr1.clone();
  arr2.update(0, 10);
  arr1.entries(); // [1, 2, 3]
  arr2.entries(); // [10, 2, 3]
  ```

- #### `concat`

  Concatenates two arrays and returns a new array pre-filled with the entries from the two arrays.

  ##### Signature:

  ```ts
  public concat<N>(array: Arryx<N>): Arryx<T | N>
  ```

  ##### Example:

  ```ts
  const a1 = new Arryx([1, 2, 3]);
  const a2 = new Arryx([4, 5, 6]);
  const a3 = a1.concat(a2); // [1, 2, 3, 4, 5, 6]
  ```

- #### `entries`

  Returns all the entries in the array.

  ##### Signature:

  ```ts
  public entries(): T[]
  ```

  ##### Example:

  ```ts
  new Arryx(['a', 'b', 'c']).entries(); // ['a', 'b', 'c']
  ```

- #### `every`

  Check if all entries in the array match the predicate.

  ##### Signature:

  ```ts
  public every(predicate: (entry: T) => boolean): boolean
  ```

  ##### Example:

  ```ts
  const arr1 = new Arryx([1, 2, 3]);
  const arr2 = new Arryx(['a', 'b', 'c']);
  arr1.every((item) => Number.isFinite(item)); // true
  arr2.every((item) => Number.isFinite(item)); // false
  ```

- #### `fill`

  Returns the instance of the array after filling the ranges identified by start and end indices with the specified value.

  ##### Signature:

  ```ts
  public fill<N = T>(
    value: N extends Function ? never : N,
    startIndex?: number,
    endIndex?: number
  ): Arryx<N>
  ```

  ##### Example:

  ```ts
  Arryx.create(5).fill('a').entries();
  // ['a', 'a', 'a', 'a', 'a']

  Arryx.create(5).fill('b', 0, 1).entries();
  // ['b', 'b', empty x3]

  Arryx.create(5).fill('c', 1, 2).entries();
  // [empty, 'c', 'c', empty x2]
  ```

- #### `fillDynamic`

  Returns the instance of the array after filling the ranges identified by start and end indices, while running the callback for each index in the array.

  ##### Signature:

  ```ts
  public fillDynamic<N = T>(
    filler: (index: number, entries: N[]) => N,
    startIndex?: number,
    endIndex?: number
  ): Arryx<N>
  ```

  ##### Example:

  ```ts
  Arryx.create(5)
    .fillDynamic((index) => `a${index + 1}`)
    .entries();
  // ['a1', 'a2', 'a3', 'a4', 'a5']

  Arryx.create(5)
    .fillDynamic((index) => `b${index + 1}`, 0, 1)
    .entries();
  // ['b1', 'b2', empty x3]

  Arryx.create(5)
    .fillDynamic((index) => `c${index + 1}`, 2)
    .entries();
  // [empty x2, 'c3', 'c4, 'c5']
  ```

- #### `filter`

  Returns a new array with entries of the array that meet the predicate.

  ##### Signature:

  ```ts
  public filter(predicate: (value: T, index: number, entries: T[]) => value is T): Arryx<T>
  ```

  ##### Example:

  ```ts
  const arr = new Arryx([1, 2, 3, 4, 5, 6]);
  arr.filter((item) => item % 2 === 0).entries();
  // [2, 4, 6]
  ```

- #### `find`

  Find an entry which matches the criteria.

  ##### Signature:

  ```ts
  public find(finder: (entry: T) => boolean): T | undefined
  ```

  ##### Example:

  ```ts
  const arr = new Arryx([{ id: 1 }, { id: 2 }, { id: 3 }]);
  arr.find((item) => item.id === 3); // { id: 3 }
  arr.find((item) => item.id === 100); // undefined
  ```

- #### `findIndex`

  Find the index of the first matching entry in the array, given a predicate. If no match found, returns `-1`.

  ##### Signature:

  ```ts
  public findIndex(predicate: (entry: T) => boolean): number
  ```

  ##### Example:

  ```ts
  const arr = new Arryx([5, 12, 8, 130, 44]);
  arr.findIndex((item) => item > 13); // 3
  ```

- #### `flat`

  Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

  ##### Signature:

  ```ts
  public flat<NT = T>(depth?: number): Arryx<NT>
  ```

  ##### Example:

  ```ts
  const arr1 = new Arryx([0, 1, 2, [3, 4]]);
  const arr2 = new Arryx([0, 1, 2, [[[3, 4]]]]);
  arr1.flat(); // [0, 1, 2, 3, 4]
  arr2.flat(2); // [0, 1, 2, [3, 4]]
  ```

- #### `flatMap`

  Calls a defined callback function on each entry of the array. Then, flattens the result into a new array.

  ##### Signature:

  ```ts
  public flatMap<NT = T>(
    mapper: (entry: T, index: number, entries: T[]) => NT | readonly NT[]
  ): Arryx<NT>
  ```

  ##### Example:

  ```ts
  const arr1 = new Arryx([1, 2, 3, 4]);
  arr1.flatMap((item) => [item * 2]); // [2, 4, 6, 8]
  arr1.flatMap((item) => [[item * 2]]); // [[2], [4], [6], [8]]
  ```

- #### `forEach`

  Performs the specified action for each entry in the array.

  ##### Signature:

  ```ts
  public forEach(iterator: (value: T, index: number, entries: T[]) => void): void
  ```

  ##### Example:

  ```ts
  const arr = new arryx(['a', 'b', 'c']);
  arr.forEach((element) => console.log(element));
  // a
  // b
  // c
  ```

- #### `includes`

  Check whether the array includes a certain entry.

  ##### Signature:

  ```ts
  public includes(entry: T, fromIndex?: number): boolean
  ```

  ##### Example:

  ```ts
  const arr = new Arryx([1, 2, 3]);
  arr.includes(2); // true
  arr.includes(4); // true
  ```

- #### `indexOf`

  Find the index of the first occurence of an entry. If no match found, returns `-1`.

  ##### Signature:

  ```ts
  public indexOf(entry: T, fromindex?: number): number
  ```

  ##### Example:

  ```ts
  const beasts = new Arryx(['ant', 'bison', 'camel', 'duck', 'bison']);
  beasts.indexOf('bison'); // 1
  beasts.indexOf('bison', 2); // 4
  beasts.indexOf('ox'); // -1
  ```

- #### `insertAfter`

  Insert a new entry after the specified index.

  ##### Signature:

  ```ts
  public insertAfter(index: number, entries: T | T[]): number
  ```

  ##### Example:

  ```ts
  const arr1 = new Arryx([1, 3]);
  arr1.insert(0, 2);
  arr1.entries(); // [1, 2, 3]

  const arr2 = new Arryx([1, 5]);
  arr2.insert(0, [2, 3, 4]);
  arr2.entries(); // [1, 2, 3, 4, 5]
  ```

- #### `insertBefore`

  Insert a new entry before the specified index.

  ##### Signature:

  ```ts
  public insertBefore(index: number, entries: T | T[]): number
  ```

  ##### Example:

  ```ts
  const arr1 = new Arryx([1, 3]);
  arr1.insert(1, 2);
  arr1.entries(); // [1, 2, 3]

  const arr2 = new Arryx([1, 5]);
  arr2.insert(1, [2, 3, 4]);
  arr2.entries(); // [1, 2, 3, 4, 5]
  ```

- #### `join`

  Adds all the entries of the array into a string, separated by the specified separator string.

  ##### Signature:

  ```ts
  public join(separator?: string): string
  ```

  ##### Example:

  ```ts
  const arr = new Arryx([1, 2, 3]);
  arr.join(); // 1,2,3
  arr.join('..'); // 1..2..3
  ```

- #### `lastIndexOf`

  Find the index of last occurence of an entry. If no match found, returns `-1`.

  ##### Signature:

  ```ts
  public lastIndexOf(entry: T, fromIndex?: number): number
  ```

  ##### Example:

  ```ts
  const animals = new Arryx(['Dodo', 'Tiger', 'Penguin', 'Dodo']);
  animals.lastIndexOf('Dodo'); // 3
  animals.lastIndexOf('Dodo', 1); // 0
  ```

- #### `map`

  Calls a defined callback function on each entry of the array, and returns an new array that contains the results.

  ##### Signature:

  ```ts
  public map<NT = T>(mapper: (entry: T, index: number, entries: T[]) => NT): Arryx<NT>
  ```

  ##### Example:

  ```ts
  const arr = new Arryx([1, 2, 3]);
  arr.map((item) => item * 2).entiries(); // [2, 4, 6]
  ```

- #### `peek`

  Peek at the first entry in the array.

  ##### Signature:

  ```ts
  public peek(): T
  ```

  ##### Example:

  ```ts
  const arr = new Arryx(['foo', 'bar', 'baz']);
  arr.peek(); // foo
  ```

- #### `peekAt`

  Peek at the entry at the specified index. This returns the reference of the entry.

  ##### Signature:

  ```ts
  public peekAt(index: number): T
  ```

  ##### Example:

  ```ts
  const arr = new Arryx(['foo', 'bar', 'baz']);
  arr.peekAt(1); // bar
  ```

- #### `peekLast`

  Peek at the last entry in the array. This returns the reference of the entry.

  ##### Signature:

  ```ts
  public peekLast(): T
  ```

  ##### Example:

  ```ts
  const arr = new Arryx(['foo', 'bar', 'baz']);
  arr.peekAt(1); // baz
  ```

- #### `pop`

  Return the last entry in the array if it exists, otherwise return `undefined`.

  ##### Signature:

  ```ts
  public pop(): T | undefined
  ```

  ##### Example:

  ```ts
  const arr = new Arryx([1, 2, 3]);
  arr.pop();
  arr.entries(); // [1, 2]
  ```

- #### `push`

  Insert a new entry to the end of the array.

  ##### Signature:

  ```ts
  public push(entry: T): number
  ```

  ##### Example:

  ```ts
  const arr = new Arryx([1, 2]);
  arr.push();
  ```

- #### `reduce`

  Calls the specified reducer for all entries in the array, in the left-to-right order. Returns the accumulated result.

  ##### Signature:

  ```ts
  public reduce<NT = T>(
    reducer: (previous: NT, current: T, index: number, entries: T[]) => NT,
    initialValue: NT
  ): NT
  ```

  ##### Example:

  ```ts
  const arr = new Arryx([1, 2, 3]);
  const reducer = (accumulator, current) => accumulator + current;
  arr.reduce(reducer); // 6
  arr.reduce(reducer, 5); // 11
  ```

- #### `reduceRight`

  Calls the specified callback function for all the entries the array, in right-to-left order. Returns the accumulated result.

  ##### Signature:

  ```ts
  public reduceRight<NT = T>(
    reducer: (previous: NT, current: T, index: number, entries: T[]) => NT,
    initialValue: NT
  ): NT
  ```

  ##### Example:

  ```ts
  const arr = new Arryx([
    [0, 1],
    [2, 3],
    [4, 5],
  ]);
  const reducer = (accumulator, currentValue) => accumulator.concat(currentValue);
  arr.reduceRight(reducer); // [4, 5, 2, 3, 0, 1]
  ```

- #### `removeAt`

  Remove the entry at the specified index.

  ##### Signature:

  ```ts
  public removeAt(index: number): T | undefined
  ```

  ##### Example:

  ```ts
  const arr = new Arryx([1, 3, 2]);
  arr.removeAt(1);
  arr.entries(); // [1, 2]
  ```

- #### `removeRange`

  Remove `N` entries in the array from a starting index. Returns the removed elements.

  ##### Signature:

  ```ts
  public removeRange(start: number, count: number): T[]
  ```

  ##### Example:

  ```ts
  const arr = new Arryx([1, 3, 4, 5, 6, 7, 2]);
  arr.removeRange(1, 5);
  arr.entries(); // [1, 2]
  ```

- #### `reverse`

  Reverses the entries in the array. This method mutates the entries in the array and returns a reference the instance of the array.

  ##### Signature:

  ```ts
  public reverse(): Arryx<T>
  ```

  ##### Example:

  ```ts
  const arr = new Arryx([1, 2, 3]);
  arr.reverse().entries(); // [3, 2, 1]
  ```

- #### `shift`

  Returns the first entry in the array if it exists, otherwise returns `undefined`.

  ##### Signature:

  ```ts
  public shift(): T | undefined
  ```

  ##### Example:

  ```ts
  const arr = new Arryx([1, 2, 3]);
  arr.shift();
  arr.entries(); // [2, 3]
  ```

- #### `some`

  Check if some entries in the array match the predicate.

  ##### Signature:

  ```ts
  public some(predicate: (entry: T) => boolean): boolean
  ```

  ##### Example:

  ```ts
  const arr = new Arryx([1, 2, 3]);
  arr.some((item) => item % 2 === 0); // true
  arr.some((item) => item < 0); // false
  ```

- #### `sort`

  Sorts and returns the instance of the array.

  ##### Signature:

  ```ts
  public sort(sorter?: (firstEntry: T, secondEntry: T) => number): Arryx<T>
  ```

  ##### Example:

  ```ts
  const arr = new Arryx([3, 4, 2, 1, 7, 11]);
  arr.sort().entries(); // [1, 2, 3, 4, 7, 11]
  ```

- #### `take`

  Returns a new array as a subset of entries from the existing instance.

  ##### Signature:

  ```ts
  public take(count: number, startIndex?: number): Arryx<T>
  ```

  ##### Example:

  ```ts
  const arr = new Arryx([1, 2, 3, 4, 5, 6]);

  const arr2 = arr.take(3);
  arr2.entries(); // [1, 2, 3]

  const arr3 = arr.take(3, 3);
  arr3.entries(); // [4, 5, 6];
  ```

- #### `toString`

  Returns a string representation of the array.

  ##### Signature:

  ```ts
   public toString(): string
  ```

  ##### Example:

  ```ts
  const arr = new Arryx([1, 2, 3]);
  arr.toString(); // 1,2,3
  ```

- #### `unshift`

  Insert a new entry to the beginning of the array.

  ##### Signature:

  ```ts
   public unshift(entry: T): number
  ```

  ##### Example:

  ```ts
  const arr = new Arryx([2, 3]);
  arr.unshift(1);
  arr.entries(); // [1, 2, 3]
  ```

- #### `update`

  Update the entry at a specified index.

  ##### Signature:

  ```ts
   public update(index: number, newItem: T): Arryx<T>
  ```

  ##### Example:

  ```ts
  const arr = new Arryx([1, 2, 3]);
  arr.update(0, 10);
  arr.entries(); // [10, 2, 3]
  ```

- #### `values`

  Returns an iterable of entries in the array.

  ##### Signature:

  ```ts
   public values(): Iterable<T>
  ```

  ##### Example:

  ```ts
  const arr = new Arryx([1, 2, 3]);
  arr.values(); // Array Iterator {}
  ```

## Differences

Naturally, being an abstraction over the native array there are quite a couple of distinct differences.

- Passing a number to the constructor will create a new array with **EXACTLY** one item instead of the number of items
  ```ts
  new Array(3); // [empty x3]
  new Arryx(3); // [3]
  ```
  This is done to ensure consistency between creating an array with other data types.
- To access the values you need to call `entries` method.
  ```ts
  const array = new Arryx([1, 2, 3]);
  array.entries(); // [1, 2, 3]
  ```

## Contributing

All PRs are welcome. To setup the project you can run the following commands once you fork and clone the repository:

```bash
yarn install
```

- To develop locally:
  ```
  yarn dev
  ```
- To build from source:
  ```
  yarn build
  ```

Once your changes are made, create a PR from your fork to this repository.

## License

MIT. Do whatever you want with it.
