/* 
    Faça uma rotina com e sem recursão em JavaScript para encontrar o fatorial de um número.
    n! = n.(n – 1).(n – 2).(n – 3)...2,1. 
*/

// const fatorial = (x) => {
//   let i, n;

//   if (x === 0) {
//     return;
//   } else {
//     n = 1;
//     for (i = 1; i <= x; i += 1) {
//       n *= i;
//     }
//   }
//   return n;
// }

// console.log(fatorial(5));

const fatorial = (x) => {
  return x <= 1 ? 1 : x * fatorial(x - 1);
};
console.log(fatorial(10));
