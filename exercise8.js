let calcValues = function (argument) {
    let singleValue;
    if (argument === 1) {
        singleValue = 200;
    }else if (argument >= 2 && argument <= 3) {
        singleValue = 180;
    }else if (argument >= 4 && argument <= 7) {
        singleValue = 160;
    }else if (argument >= 8) {
        singleValue = 150;
    }else{
        console.log('Niepoprawna ilość dni');
        return false;
    }

    let bonus = Math.floor(argument / 7) * 50;
    let finalValue = argument * singleValue - bonus;
    return  finalValue;
};

let value = calcValues(1);
console.log('wartość pierwszego argumentu jest równy ' + value);

let value2 = calcValues(3);
console.log('wartość drugiego argumentu jest równy ' + value2);

let value3 = calcValues(7);
console.log('wartość trzeciego argumentu jest równy ' + value3);

let value4 = calcValues(12);
console.log('wartość czwartego argumentu jest równy ' + value4);

let value5 = calcValues(18);
console.log('wartość piątego argumentu jest równy ' + value5);

let value6 = calcValues(21);
console.log('wartość szóstego argumentu jest równy ' + value6);

let value7 = calcValues(70);
console.log('wartość ósmego argumentu jest równy ' + value7);
