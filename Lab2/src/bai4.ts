//array, tuple, any, enum
enum Role {ADMIN, READ_ONLY, AUTHOR};
const persons : {
    name: string,
    age: number,
    hobbies: string[],
    role: number,
    roletuple: [number, string, any]
} = {
    name: 'typescript',
    age: 11,
    hobbies: ['sports', 'cooking'],
    role: Role.AUTHOR,
    roletuple: [2, 'author', 'lunas']
}
let favouriteActivites: any[];
favouriteActivites = [5, 'sports', true];
console.log(favouriteActivites);
if(persons.role === Role.AUTHOR){
    console.log('is author');
}
persons.roletuple.push('admin');
console.log(persons.roletuple);
persons.roletuple[0] = 10;
console.log(persons.roletuple);
persons.roletuple = [0, 'admin', 'user'];
console.log(persons.roletuple);