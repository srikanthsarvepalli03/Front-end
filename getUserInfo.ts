let age: number = 25;
let isActive: boolean = true;

function getUserInfo(age: number, isActive: boolean): string {
    return `Age: ${age}, Status: ${isActive ? "Active" : "Inactive"}`;
}

console.log(getUserInfo(age, isActive));