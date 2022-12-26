const vacas = 8;

const producirLeche = new Promise(function (resolve, reject) {
    if (vacas > 10){
        resolve("Se puede producir leches, ya q hay vacas suficientes")
    }
    else{
        reject("No se puede producir leche porque NO hay vacas suficientes")
    }
});


producirLeche.then((resultado) => {
    console.log(resultado);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("Se termino de ejecutar"));

