const readlineSync = require('readline-sync');

function rollDice() {
    return Math.floor(Math.random() * 6) + 1; 
}

function main() {
   
    for (let i=1;i<=1;i++) {
        readlineSync.question('Press Enter to roll the dice (or type "exit" to quit): ');

        const result = rollDice();
        console.log(`You rolled: ${result}`);
    }
}

main();
