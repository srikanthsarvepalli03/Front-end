var sum = function (numbers) { return numbers.reduce(function (acc, curr) { return acc + curr; }, 0); };
console.log(sum([1, 2, 3, 4, 5]));
