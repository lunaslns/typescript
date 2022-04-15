"use strict";
//array, tuple, any, enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const persons = {
    name: 'typescript',
    age: 11,
    hobbies: ['sports', 'cooking'],
    role: Role.AUTHOR,
    roletuple: [2, 'author', 'lunas']
};
let favouriteActivites;
favouriteActivites = [5, 'sports', true];
console.log(favouriteActivites);
if (persons.role === Role.AUTHOR) {
    console.log('is author');
}
persons.roletuple.push('admin');
console.log(persons.roletuple);
persons.roletuple[0] = 10;
console.log(persons.roletuple);
persons.roletuple = [0, 'admin', 'user'];
console.log(persons.roletuple);
