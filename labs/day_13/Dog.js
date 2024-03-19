const Animal = require('./Animal');

class Dog extends Animal {
    constructor(name) {
        super(name);
        this.speed =  Animal.generateSpeed(60);
    }
}

module.exports = Dog;