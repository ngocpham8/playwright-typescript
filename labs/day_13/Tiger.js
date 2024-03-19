const Animal = require('./Animal');

class Tiger extends Animal {
    constructor(name) {
        super(name);
        this.speed =  Animal.generateSpeed(100);
    }
}

module.exports = Tiger;