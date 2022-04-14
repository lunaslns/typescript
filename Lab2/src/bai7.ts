//Unknown & any
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'typescript';
// userName = userInput;
userName = <string> userInput;
if(typeof userInput === 'string'){
    userName = userInput;
}
console.log(userInput);
console.log(userName);