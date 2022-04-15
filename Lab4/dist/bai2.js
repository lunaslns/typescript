"use strict";
class person {
    constructor(n) {
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + "" + this.name);
    }
}
let user1;
user1 = new person('lunas');
user1.greet('hi there - i am ');
console.log(user1);
//# sourceMappingURL=bai2.js.map