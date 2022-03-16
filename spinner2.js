
const spins = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

let delay = 0

for (let spinner of spins) {
  delay += 200
  setTimeout(() => {

    process.stdout.write(`\r${spinner}  `);
  }, delay);
};

// setTimeout(() => {console.log('')}, delay)
