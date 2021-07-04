export function fillValue<T>({
  entries,
  value,
  length,
  startIndex,
  endIndex,
}: {
  entries: T[];
  value: ((index: number, entries: T[]) => T) | T;
  length: number;
  startIndex?: number;
  endIndex?: number;
}): void {
  let _startIndex = startIndex || 0;
  let _endIndex = endIndex ?? length - 1;

  if (_endIndex < _startIndex) {
    const temp = _startIndex;
    _startIndex = _endIndex;
    _endIndex = temp;
  }

  for (let index = _startIndex; index <= _endIndex; index++) {
    let _value: T;
    if (value instanceof Function) {
      _value = value(index, entries);
    } else {
      _value = value;
    }

    entries[index] = _value;
  }
}
