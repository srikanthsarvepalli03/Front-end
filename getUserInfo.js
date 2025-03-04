var age = 25;
var isActive = true;
function getUserInfo(age, isActive) {
    return "Age: ".concat(age, ", Status: ").concat(isActive ? "Active" : "Inactive");
}
console.log(getUserInfo(age, isActive));
