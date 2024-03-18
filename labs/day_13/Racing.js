const Animal = require('./Animal');

class Racing {
    static run(animalList) {
        animalList.forEach(animal => {
            console.log(`${animal.name} has speed: ${animal.getSpeed()}`);
        });
    }

    static getWinner(animalList) {
        let winner = animalList[0];
        for (let i = 0; i < animalList.length; i++) {
            if (animalList[i].speed > winner.speed) {
                winner = animalList[i]
            }
        }
        // Print result with format: `Winner is <Animal name>, with speed: <speed>`
        console.log(`Winner is ${winner.name}, with speed: ${winner.speed}`);
    }
}
module.exports = Racing;