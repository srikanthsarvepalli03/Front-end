var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.startEngine = function () {
        console.log("Engine started");
    };
    return Car;
}());
var myCar = new Car("Toyota", "Corolla", 2020);
myCar.startEngine();
