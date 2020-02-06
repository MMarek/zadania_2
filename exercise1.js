let n = 5;
let result1 = 1;
for (let i = 1; i <=n ; i++) {
    result1 = result1 * i
}

console.log(`Silnia liczby ${n} wynosi ${result1}`);
// console.log("Silnia liczby " + n + " wynosi " + result1);

let result2 = 1;
let j = 1;
while (j<=n){
    result2 *= j;
    j++;
}

console.log(`Silnia liczby ${n} wynosi ${result2}`);
