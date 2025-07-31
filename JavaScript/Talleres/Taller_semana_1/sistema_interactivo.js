
console.log("¡Bienvenido al sistema de chekeo de edad para oportunidades laborales en el mundo de la programación!");

let userName = prompt("Ahora, ingresa tu nombre:")//Aqui declaro y pregunto las variables como el nombre y la edad de el usuario
let userAge = prompt(" ingresa tu edad:")
userAge = parseInt(userAge);
if (isNaN(userAge)) {
    while (isNaN(userAge)) {
        console.error("Error: Por favor, ingresa una edad válida en números.");
        alert("Error: ingresa una edad válida, tiene que ser en números");//por acá ubiqué un while para que cada que responda en letras especifique y vuelva a preguntar
        let userAge = prompt(" ingresa tu edad:")
        if (userAge < 18) {
            alert(`${userName} , eres menor. ¡cumple 18 y hablamos, hasta entonces a estudiar!`);
            break
        }    
        else if (userAge > 18) {
            alert(`${userName} eres mayor. ¡Bienvenido al mundo laboral de la programación, lleno de oportunidades!`);//estas son las respuestas dentro del while
            break
        }
    }
} else if (userAge < 18) {
    alert(`${userName} , eres menor. ¡cumple 18 y hablamos, hasta entonces a estudiar!`);
} else {
    alert(`${userName} eres mayor. ¡Bienvenido al mundo laboral de la programación, lleno de oportunidades!`);//estas son las respuestas en las cuales se analiza la edad
}

console.log("Fin del sistema");