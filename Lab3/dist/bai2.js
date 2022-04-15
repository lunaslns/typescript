"use strict";
//function & void
let sum = (x = 5, y) => {
    return x + y;
};
let speech = (output) => {
    console.log('result:' + output);
};
speech(sum(5, 12));
console.log(speech(sum(8, 5)));
//# sourceMappingURL=bai2.js.map