"use strict";
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('moving at speed: ' + speed);
}
let b = { type: 'bird', flyingSpeed: 100 };
let h = { type: 'horse', runningSpeed: 200 };
moveAnimal(b);
moveAnimal(h);
//# sourceMappingURL=bai3.js.map