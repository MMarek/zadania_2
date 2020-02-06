let randomNumbers = [];

for (let i = 0; i < 10; i++) {
    let random = Math.floor(Math.random() * 29 + 1);
    randomNumbers.push(random)
}
console.log(randomNumbers);

for (let i = 0; i < randomNumbers.length; i++) {
    if (randomNumbers[i] % 2 !== 0) {
        randomNumbers[i] +=1;
    }
}
console.log(randomNumbers);