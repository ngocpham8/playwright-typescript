class Animal {
    constructor(name) {
        this.name = name;
    }

    getSpeed(maxSpeed) {
        const randomNumber = Math.floor(Math.random() * maxSpeed) + 1;
        this.speed = randomNumber;
        return randomNumber;
    }
}
module.exports = Animal;