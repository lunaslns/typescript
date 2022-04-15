//decorator factory
function Loggers(logString: string){
    return function(constructor: Function){
        console.log(logString);
        console.log(constructor);
    }
}

@Loggers('LOGGING - PERSON')
class Persons {
    name = 'max';
    constructor(){
        console.log('creating person object...');
    }
}