class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        console.log('Beep');
    }

    toString(){
        console.log(`The vehicle is a ${this.year} ${this.make} ${this.model}`);
    }
}

class Car extends Vehicle{
    constructor(make, model, year, numWheels){
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcylce extends Vehicle{
    constructor(make, model, year, numWheels){
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine(){
        console.log('VROOM VROOM')
    }
}

class Garage extends Vehicle{
    constructor(capacity, make, model, year){
        super(make,model,year);
        this.capacity = capacity;
        this.vehicles = [];
    }

    add(make, model, year){
        let newVehicle = [make, model, year];

            if (!newVehicle.includes(make,model,year)) {
              return "Only vehicles are allowed in here!";
            }   

            if (this.vehicles.length >= this.capacity) {
              return "Sorry, we're full.";
            }

            this.vehicles.push(newVehicle);
            return "Vehicle added!"; 
    }
}

const vehicle = new Car('Scion', 'xD', 2010);
const moto = new Motorcylce('KTM', 'Duke', 2020);
const garage = new Garage(2);