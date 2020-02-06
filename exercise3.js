let k = 20;

let textResult = "";
for (let i = 0; i < k ; i++) {
    for (let j = 0; j < k ; j++) {
        if ((i+j) % 2 == 0) {
            textResult += " ";
        }else{
            textResult += "*";
        }
    }
    textResult += "\n";
}

console.log(textResult);