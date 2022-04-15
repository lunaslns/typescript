//function & void
let sum = (x:number=5, y?:number) =>{
    return x + <number>y;
}
let speech = (output: any):void=>{
    console.log('result:' + output);
}
speech(sum(5,12));
console.log(speech(sum(8,5)));