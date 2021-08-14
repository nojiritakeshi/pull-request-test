const sortNumber = function (number) {
  number.sort(function (a, b) {
     if (a === b) {
         return 0;
     }
     return a < b ? -1 : 1;
  });
};
const number = [19, 3, 13, 81, 45, 38];
sortNumber(number);
console.log(numher);
