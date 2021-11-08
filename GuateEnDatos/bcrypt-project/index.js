const bcrypt = require("bcrypt");
const readline = require('readline');
var Writable = require('stream').Writable;

algorithm = "bcrypt"
iterations = 12

async function hashIt(password) {
    const salt = await bcrypt.genSalt(12);
    const hashed = await bcrypt.hash(password, salt);
    console.log(`\n ${this.algorithm}$${hashed}`)
}

function password() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.stdoutMuted = true;

    rl.question('Ingrese la constraseña que desea cifrar: ', (answer) => {
        hashIt(answer);
        rl.close();
    });
    
    rl._writeToOutput = function _writeToOutput(stringToWrite) {
        if (rl.stdoutMuted)
            rl.output.write("*");
        else
            rl.output.write(stringToWrite);
    };
}

password();

