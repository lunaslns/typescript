//class decorator
function Logger(contructor: Function){
    console.log('logging...');
    console.log(contructor);
}

@Logger
class Person {
    name = 'max';
    constructor(){
        console.log('creating person object...');
    }
}

const pers = new Person();
console.log(pers);