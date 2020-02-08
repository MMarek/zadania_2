function getEvenSum(m) {
    let sum4 = 0;
    for (let i = 1; i <= m; i++) {
        if (i % 2 === 0) {
            sum4 = sum4 + i;
        }
    }
    return sum4
}

let m = 10;
let sum4 = getEvenSum(m);
console.log(sum4);