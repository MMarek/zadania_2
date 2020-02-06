const numbers = [2,5,17,53,89,146,271,330,751];

let sum1 = 0;
for (let i = 0; i < numbers.length; i++) {
    sum1 += numbers[i];
}
let avg = sum1 / numbers.length;
console.log('\n'+'suma liczb: ' + numbers + '\n' + 'podzielona przez ich ilość,' + '\n' + 'daje średnią arytmetyczną równą:' + avg);