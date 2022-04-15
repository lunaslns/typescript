const hobbies = ['sports', 'cooking'];
const activehobbies = ['hiking'];
activehobbies.push('lunas');
console.log(activehobbies);
activehobbies.push(hobbies[0], hobbies[1]);
console.log(activehobbies);
activehobbies.push(...hobbies);
console.log(activehobbies);