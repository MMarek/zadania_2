function getSecoundMaxNumber(arrayNumbers) {
    let firstMaxNumber = 0;
    let SecoundMaxNumber = 0;

    for (let i = 0; i < arrayNumbers.length; i++) {
        if (firstMaxNumber < arrayNumbers[i]) {
            secoundMaxNumber = firstMaxNumber;
            firstMaxNumber = arrayNumbers[i];
        } else if (secoundMaxNumber < arrayNumbers[i]) {
            secoundMaxNumber = arrayNumbers[i];
        }
    }
    return secoundMaxNumber
}

let newArray = [3,7,42,277,4,51,9,8,7,66,53,278];
console.log(getSecoundMaxNumber(newArray))