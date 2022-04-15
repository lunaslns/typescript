//interface va ke thua
interface Named{
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named{
    greet(phrase: string): void;
}

class person implements Greetable{
    name: string;
    constructor(n:string){
        this.name = n;
    }
    greet(phrase: string){
        console.log(phrase+""+this.name);
    }
}

let user1:Greetable;

user1 = new person('lunas');

user1.greet('hi there - i am ');
console.log(user1);