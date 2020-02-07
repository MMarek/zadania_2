let negativeNumbers = [];
function getNegativeNumbers(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negativeNumbers.push(array[i]);
        }
    }
    return negativeNumbers;
}

let randomArray = [4, -7, 86, 9, -43, 23, -14, -99, 3];
console.log(getNegativeNumbers(randomArray));