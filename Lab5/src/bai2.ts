//type guard
class Car{
    drive(){
        console.log('driving...');
    }
}
class Truck{
    drive(){
        console.log('driving a truck...');
    }
    loadCargo(amount:number){
        console.log('loading cargo...' + amount);
    }
}
type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    if(vehicle instanceof Truck){
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1)
useVehicle(v2)