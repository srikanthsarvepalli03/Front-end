function logClass(target: Function) {
    console.log("Class instantiated");
}

@logClass
class UserClass {}

const user = new UserClass();