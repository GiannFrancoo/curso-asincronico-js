const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) 
        ? setTimeout(() => resolve("Async!!"), 2000)
        : reject(new Error("Error!!"));
    });
}

const anotherFn = async () => {
    const something = await fnAsync(); // Espera los 2 segundos para seguir (Bloquea) esta parte
    console.log(something);
    console.log("Hello");
}

console.log('Antes');
anotherFn(); // Al ser async, no lo traba, entonces sigue mientras de fondo se resuelve
console.log('Después');