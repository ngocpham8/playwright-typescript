const Horse = require('./Horse');
const Tiger = require('./Tiger');
const Dog = require('./Dog');
const Racing = require('./Racing');

// Models
const horse = new Horse('horse');
const tiger = new Tiger('tiger');
const dog = new Dog('dog');

// Usage of controller
Racing.run([horse, tiger, dog]);
Racing.getWinner([horse, tiger, dog]);


