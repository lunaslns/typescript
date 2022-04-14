import validate from './StaticZipCodeValidator';

let strings = ['hello', '98052', '101'];

strings.forEach((s)=>{
    console.log(`"${s}" ${validate(s) ? "matches" : "does not match"}`);
})