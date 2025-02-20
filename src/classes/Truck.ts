
// DONEZO 
// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';
import Driveable from '../interfaces/Driveable.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {

 
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
   // TODO: Declare properties of the Truck class
    vin: string;
    color: string;
    make: string;
    model: string;
    year: number;
    weight: number;
    topSpeed: number;
    wheels: Wheel[];
    towingCapacity: number; 
// Constructor for the Truck class 
  constructor (
    vin: string,
    color: string, 
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number, 
  ) {
    // Call the constructor of the parent class, Vehicle
    super();
     // Initialize properties of the Truck class

    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not.
    this.wheels = wheels.length === 4 ? wheels : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
  }
  // tow(vehicle: Truck | Motorbike | Car): void {
  //   console.log(`${this.make} ${this.model} is towing a ${vehicle.make} ${vehicle.model}`);
  // }
  
  // TODO: Create a constructor that accepts the properties of the Truck class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Truck class
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not

  // TODO: Implement the tow method from the AbleToTow interface
  tow (vehicle: Truck | Motorbike | Car): void {
   const make = vehicle.make ? vehicle.make : "Unknown";
   const model = vehicle.model ? vehicle.model : "Unknown"; 
    console.log(`Towing vehicle: ${make} ${model}`);
    
    // TODO2: Check if the vehicle's weight is less than or equal to the truck's towing capacity. If it is, log that the vehicle is being towed. If it is not, log that the vehicle is too heavy to be towed
   if (vehicle.weight <= this.towingCapacity) {
    console.log("the vehicle is being towed");
   } else {
    console.log("the vehicle is too heavy to be towed");
   }
  }  

  // TODO: Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // TODO: The method should call the printDetails method of the parent class
    super.printDetails(); 
    // TODO: The method should log the details of the Truck
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Towing: ${this.towingCapacity} mph`);
    console.log(`Wheels: ${this.wheels}`); 
  }
} 
// Export the Truck class as the default export
export default Truck;
