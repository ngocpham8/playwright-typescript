const Horse = require('./Horse');
const Tiger = require('./Tiger');
const Dog = require('./Dog');
const Racing = require('./Racing');

// Models
const horse = new Horse('horse');
const tiger = new Tiger('tiger');
const dog = new Dog('dog');
console.log(horse, tiger, dog);
// Usage of controller
Racing.getWinner([horse, tiger, dog]);


