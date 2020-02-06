let arr = [];

for (let i = 0; i < 15; i++) {
    let random = Math.floor(Math.random() * 9 + 1);
    arr.push(random)
}

console.log(arr);

let duplicatedValues = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if (arr[i] === arr[j] && duplicatedValues.indexOf(arr[i]) === -1) {
            duplicatedValues.push(arr[i]);
            break;
        }
    }
}

console.log('liczby które się powtarzają to: ' + duplicatedValues);
console.log('powtarzają się ' + duplicatedValues.length + ' liczb/y');