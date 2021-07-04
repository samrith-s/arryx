# ArrayX

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
  <FT>(entries: FT | FT[]): ArrayX<FT>
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
  (object: unknown): boolean
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

WIP
