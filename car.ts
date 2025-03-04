interface Vehicle {
    startEngine(): void;
}

class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    startEngine(): void {
        console.log("Engine started");
    }
}

let myCar = new Car("Toyota", "Corolla", 2020);
myCar.startEngine();