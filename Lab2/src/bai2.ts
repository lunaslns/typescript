//type inference
function add(x=5){
    let phrase = 'result is ';
    phrase = '10';
    x = 2.8;
    return phrase + x;
}
let results:string = add();
console.log(results);