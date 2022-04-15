"use strict";
//type guard
class Car {
    drive() {
        console.log('driving...');
    }
}
class Truck {
    drive() {
        console.log('driving a truck...');
    }
    loadCargo(amount) {
        console.log('loading cargo...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
//# sourceMappingURL=bai2.js.map