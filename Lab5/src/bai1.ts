// Intersection Type
type Admin = {
    name: string;
    privileges: string;
}
type Employee = {
    name: string;
    startDate: Date;
}
type ElevatedEmployee = Admin & Employee;

let e:ElevatedEmployee = {
    name: 'Lunas',
    privileges: '2022',
    startDate: new Date()
}
console.log(e);