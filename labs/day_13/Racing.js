class Racing {

    static getWinner(animalList) {
        let winner = animalList[0];
        for (let i = 0; i < animalList.length; i++) {
            if (animalList[i].getSpeed() > winner.getSpeed()) {
                winner = animalList[i]
            }
        }
        // Print result with format: `Winner is <Animal name>, with speed: <speed>`
        console.log(`Winner is ${winner.getName()}, with speed: ${winner.getSpeed()}`);
    }
}
module.exports = Racing;