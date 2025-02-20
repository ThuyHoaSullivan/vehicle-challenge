"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// DONEZO 
// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
var Vehicle_js_1 = require("./Vehicle.js");
var Wheel_js_1 = require("./Wheel.js");
// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    // Constructor for the Truck class 
    function Truck(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
        // Call the constructor of the parent class, Vehicle
        var _this = _super.call(this) || this;
        // Initialize properties of the Truck class
        _this.vin = vin;
        _this.color = color;
        _this.make = make;
        _this.model = model;
        _this.year = year;
        _this.weight = weight;
        _this.topSpeed = topSpeed;
        _this.towingCapacity = towingCapacity;
        // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not.
        _this.wheels = wheels.length === 4 ? wheels : [new Wheel_js_1.default(), new Wheel_js_1.default(), new Wheel_js_1.default(), new Wheel_js_1.default()];
        return _this;
    }
    // tow(vehicle: Truck | Motorbike | Car): void {
    //   console.log(`${this.make} ${this.model} is towing a ${vehicle.make} ${vehicle.model}`);
    // }
    // TODO: Create a constructor that accepts the properties of the Truck class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Truck class
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    // TODO: Implement the tow method from the AbleToTow interface
    Truck.prototype.tow = function (vehicle) {
        var make = vehicle.make ? vehicle.make : "Unknown";
        var model = vehicle.model ? vehicle.model : "Unknown";
        console.log("Towing vehicle: ".concat(make, " ").concat(model));
        // TODO2: Check if the vehicle's weight is less than or equal to the truck's towing capacity. If it is, log that the vehicle is being towed. If it is not, log that the vehicle is too heavy to be towed
        if (vehicle.weight <= this.towingCapacity) {
            console.log("the vehicle is being towed");
        }
        else {
            console.log("the vehicle is too heavy to be towed");
        }
    };
    // TODO: Override the printDetails method from the Vehicle class
    Truck.prototype.printDetails = function () {
        // TODO: The method should call the printDetails method of the parent class
        _super.prototype.printDetails.call(this);
        // TODO: The method should log the details of the Truck
        // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
        console.log("VIN: ".concat(this.vin));
        console.log("Color: ".concat(this.color));
        console.log("Make: ".concat(this.make));
        console.log("Model: ".concat(this.model));
        console.log("Year: ".concat(this.year));
        console.log("Weight: ".concat(this.weight, " lbs"));
        console.log("Top Speed: ".concat(this.topSpeed, " mph"));
        console.log("Towing: ".concat(this.towingCapacity, " mph"));
        console.log("Wheels: ".concat(this.wheels));
    };
    return Truck;
}(Vehicle_js_1.default));
// Export the Truck class as the default export
exports.default = Truck;
