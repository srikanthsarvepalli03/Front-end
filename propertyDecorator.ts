function validateEmail(target: any, context: ClassFieldDecoratorContext) {
    return function (value: string) {
        if (!value.includes("@")) {
            throw new Error("Invalid email");
        }
        return value;
    };
}

class UserWithEmail {
    @validateEmail
    email: string;

    constructor(email: string) {
        this.email = email;
    }
}

const userWithEmail = new UserWithEmail("test@example.com");
console.log(userWithEmail.email);