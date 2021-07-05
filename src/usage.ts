import { Arryx } from '.';

// const array = new Arryx([1, 2, 3, 4]);
// console.log("before:", array.entries(), array.length);
// array.insert(1, [8, 9, 10]);
// console.log("after:", array.entries(), array.length);
// console.log("is array", Arryx.is({}));
// console.log(
//   array.reduce(
//     (acc, next) => ({
//       ...acc,
//       hello: (acc.hello += next),
//     }),
//     {
//       hello: 0,
//     }
//   )
// );
// console.log(array.peekAt(-1));
// console.group("Fill dynamic");
// console.log(
//   Arryx.create(4)
//     .fillDynamic((index) => `a${index + 1}`, 2, 3)
//     .entries()
// );
// console.log(
//   Arryx.create(5)
//     .fillDynamic((index) => `b${index + 1}`, 1, 0)
//     .entries()
// );
// console.log(
//   Arryx.create(5)
//     .fillDynamic((index) => `c${index + 1}`, 2)
//     .entries()
// );
// console.groupEnd();
// console.log();
// console.group("Fill");
// console.log(Arryx.create(4).fill("a").entries());
// console.log(Arryx.create(5).fill("b", 1, 0).entries());
// console.log(Arryx.create(5).fill("c", 2, 1).entries());
// const arrI1 = new Arryx([1, 3]);
// arrI1.insert(1, 2);
// const arrI2 = new Arryx([1, 5]);
// arrI2.insert(1, [2, 3, 4]);
// console.log(arrI1.entries());
// console.log(arrI2.entries());

// {
//   const arr = new Arryx([1, 3, 4, 5, 6, 7, 2]);
//   arr.removeRange(1, 5);
//   console.log("remove range", arr.entries());
// }

// {
//   const arr = new Arryx([1, 2, 3, 4, 5, 6]);

//   const arr2 = arr.take(3);
//   console.log(arr2.entries()); // [1, 2, 3]

//   const arr3 = arr.take(3, 3);
//   console.log(arr3.entries()); // [4, 5, 6];

//   console.log(arr.values());
// }
