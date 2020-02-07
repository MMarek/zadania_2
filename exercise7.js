let sumArr = function (numbersArray) {
    let sum = 0;
    for (let i = 0; i < numbersArray.length ; i++) {
        sum += numbersArray[i]
    }
    return sum;
};

// first example

let arr1 = [1,2,3,4,5,6,7,8,9];
let sum2 = sumArr(arr1);
console.log(sum2);

// secound example

let arr2 = [4,8,12,16,20,24,28,32,36,40];
let sum3 = sumArr(arr2);
console.log(sum3);