function divideNumbers(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

console.log(divideNumbers(10, 2));
console.log(divideNumbers(10, 0));