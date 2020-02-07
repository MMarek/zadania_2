// sposób 1

function calculateTip(amount, rating) {
    switch (rating) {
        case "Bardzo duży napiwek":
            return amount * 0.25;
        case "Dobry napiwek":
            return amount * 0.20;
        case "Średni napiwek":
            return amount * 0.15;
        case "Zły napiwek":
            return 0;
        default:
            return "opis nieczytelny"
    }
}

let amount = 100;
let rating = "Bardzo duży napiwek";
console.log(calculateTip(amount, rating));


// sposób 2

let calculateTip2 = function (amount2, rating2) {
    if (rating2 === "Bardzo duży napiwek") {
        return amount2 * 0.25;
    } else if (rating2 === "Dobry napiwek") {
        return amount2 * 0.20;
    } else if (rating2 === "Średni napiwek") {
        return amount2 * 0.15;
    } else if (rating2 === "Złu napiwek") {
        return 0;
    } else {
        console.log("Opis nieczytelny");
        return false
    }
};

let amount2 = 100;
let rating2 = "Dobry napiwek";
console.log(calculateTip2(amount2,rating2));