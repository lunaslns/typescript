//method decorator
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor){
    console.log('method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
class Products{
    title: string;
    private _price: number;
    constructor(t:string, p:number){
        this.title = t;
        this._price = p;
    }
    @Log3
    getPriceWithTax(){}
}