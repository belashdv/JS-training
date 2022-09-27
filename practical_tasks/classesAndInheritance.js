//Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal

let animal = {
    move: true
};

let cat = {
    __proto__: animal
};

//cat.__proto__ = animal; //or
console.log(cat.move);