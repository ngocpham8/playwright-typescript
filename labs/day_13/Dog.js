const Animal = require('./Animal');

class Dog extends Animal {
    getSpeed() {
        return super.getSpeed(60);
    }
}

module.exports = Dog;