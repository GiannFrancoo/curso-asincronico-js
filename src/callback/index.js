function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, fnCallback){
    return fnCallback(num1, num2);
}

console.log(calc(3, 4, sum));

// Otra forma

setTimeout(function () {
    console.log('Hola Javascript');
}, 2000);

// Otra forma

function saludar(name){
    console.log(`Hola ${name}`);
}

setTimeout(saludar, 2000, 'Gian');