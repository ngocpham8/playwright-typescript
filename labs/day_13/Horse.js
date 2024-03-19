const Animal = require('./Animal');

class Horse extends Animal {
    constructor(name) {
        super(name);
        this.speed =  Animal.generateSpeed(75);
    }
}

module.exports = Horse;