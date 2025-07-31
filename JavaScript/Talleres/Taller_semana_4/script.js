document.getElementById("saveButton").addEventListener("click", () =>{
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");

    if (!nameInput || !ageInput) {
        console.error("Los campos de nombre y edad no están disponibles.");
        return;
    }
    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);

    if (name && !isNaN(age)) {
        localStorage.setItem('userName', name);
        localStorage.setItem('userAge', age);
        diplayData();
    } else {
        alert("Por favor, ingresa un nombre válido y una edad.");
    }
});
function diplayData() {
    const name = localStorage.getItem('userName');
    const age = localStorage.getItem('userAge');
    const outputDiv = document.getElementById("outpot");

    if (name && age) {
        outputDiv.textContent = `Hola ${name} y tienes ${age} años`;
    } else {
        outputDiv.textContent = "No hay datos guardados.";
    }
}
window.onload = diplayData;

if (!sessionStorage.getItem('interactionCount')) {
    sessionStorage.setItem('interactionCount', 0);
}

function updateInteractionCount() {
    let count = parseInt(sessionStorage.getItem('interactionCount'));
    count++;
    sessionStorage.setItem('interactionCount', count);
    console.log(`Número de interacciones: ${count}`);
}
document.getElementById('saveButton').addEventListener('click', updateInteractionCount);
document.getElementById("clearButton").addEventListener("click", updateInteractionCount);
document.getElementById("clearButton").addEventListener("click", () => {
    localStorage.clear();
    diplayData();
});