import { MethodClear } from './stubs/clear.test';
import { MethodClone } from './stubs/clone.test';
import { MethodConcat } from './stubs/concat.test';
import { MethodEntries } from './stubs/entries.test';
import { MethodEvery } from './stubs/every.test';
import { MethodFill } from './stubs/fill.test';
import { MethodFillDynamic } from './stubs/fillDynamic.test';
import { MethodFilter } from './stubs/filter.test';
import { MethodFlat } from './stubs/flat.test';
import { MethodFlatMap } from './stubs/flatMap.test';
import { MethodForEach } from './stubs/forEach.test';
import { MethodIncludes } from './stubs/includes.test';
import { MethodIndexOf } from './stubs/indexOf.test';

describe('Methods', () => {
  MethodClear();
  MethodClone();
  MethodConcat();
  MethodEntries();
  MethodEvery();
  MethodFill();
  MethodFillDynamic();
  MethodFlat();
  MethodFlatMap();
  MethodForEach();
  MethodIncludes();
  MethodIndexOf();
  MethodFilter();
});
