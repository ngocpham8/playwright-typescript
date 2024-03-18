const Animal = require('./Animal');

class Tiger extends Animal {
    getSpeed() {
        return super.getSpeed(100);
    }
}

module.exports = Tiger;