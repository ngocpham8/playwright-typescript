class Animal {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }

    static generateSpeed(maxSpeed) {
        return Math.floor(Math.random() * maxSpeed) + 1;
    }

    getSpeed() {
        return this.speed;
    }

    getName() {
        return this.name;
    }
}
module.exports = Animal;