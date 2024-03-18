const Animal = require('./Animal');

class Horse extends Animal {
    getSpeed() {
        return super.getSpeed(75);
    }
}

module.exports = Horse;