let sum = (numbers: number[]): number => numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum([1, 2, 3, 4, 5]));