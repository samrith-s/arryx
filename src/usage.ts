import { ArrayX } from ".";

const array = new ArrayX([1, 2, 3, 4]);
console.log("before:", array.entries(), array.length);
array.insert(1, [8, 9, 10]);
console.log("after:", array.entries(), array.length);
console.log("is array", ArrayX.isStack({}));
console.log(
  array.reduce(
    (acc, next) => ({
      ...acc,
      hello: (acc.hello += next),
    }),
    {
      hello: 0,
    }
  )
);
console.log(array.peekAt(-1));
const array2 = new ArrayX<string>(3).fillDynamic((index) => `${index + 1}`);
const newArray = array.concat(array2);
console.log(newArray.entries());
console.log(newArray.join());
console.group("Fill dynamic");
console.log(new ArrayX(4).fillDynamic((index) => `a${index + 1}`, 2, 3).entries());
console.log(new ArrayX(5).fillDynamic((index) => `b${index + 1}`, 1, 0).entries());
console.log(new ArrayX(5).fillDynamic((index) => `c${index + 1}`, 2).entries());
console.groupEnd();
console.log();
console.group("Fill");
console.log(new ArrayX(4).fill("a").entries());
console.log(new ArrayX(5).fill("b", 1, 0).entries());
console.log(new ArrayX(5).fill("c", 2, 1).entries());
