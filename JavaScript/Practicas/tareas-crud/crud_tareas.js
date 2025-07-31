const API_URL = "http://localhost:3001/tareas";

function checkResponse(res){
    if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
    return res.json();
}

async function listar() {
    try {
        const res = await fetch(API_URL);
        const data = await checkResponse(res);
        console.log("Tareas", data);
    }   catch (e) {
        console.error("Error al listar:", e.message);
    }
    
}
//crear
async function crear() {
    const Tarea = prompt("Nombre de la tarea: ");
    const Descripcion = prompt("Haz la descripción de la tarea: ");
    const Estado = false;
    try {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "applicacion/json" },
            body: JSON.stringify({ Tarea, Descripcion, Estado })
        });
        const data = await checkResponse(res);
        console.log(" Tarea creada:", data);
    }   catch (e) {
    console.error("Error al crear:", e.message);
    }
}

//put
async function actualizar() {
    const id = prompt("Id de la tarea: ");
    const Tarea = prompt("Nombre de la tarea: ");
    const Descripcion = prompt("Haz la descripción de la tarea: ");
    const Estado = false;

    try {
        const res = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify({ Tarea, Descripcion, Estado })
        });
        const data = await checkResponse(res);
        console.log(" tarea actualizado:", data);
    } catch (e) {
        console.error("Error al actualizar:", e.message)
    }
}e
async function hecho() {
    const id = prompt("Id de la tarea: ");
    const Estado = true;
        try {
        const res = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify({ Estado })
        });
        const data = await checkResponse(res);
        console.log(" tarea actualizado:", data);
    } catch (e) {
        console.error("Error al actualizar:", e.message)
    }
}

//eliminar
async function eliminar() {
    const id = prompt("ID de la tarea que deseas eliminar: ")
    try {
        const res = await fetch(`${API_URL}/${id}`, {method: "DELETE" });
        if (res.ok) {
            console.log(" Tarea elmiminada.");
        }   else{
            throw new Error(`Error ${res.status}`);
        }
    }   catch (e) {
        console.error("Error al eliminar: ", e.message);
    }   
}
//menú
async function menu() {
    let opcion;
    do {
        opcion= prompt(
            `Menú crud\\n`+
            ` 1. Listar\\n`+
            ` 2. Crear\\n`+
            ` 3. Actualizar\\n`+
            ` 4. Eliminar\\n` +
            ` 5. Cambiar a hecho\\n`+
            ` 0. Salir\\n`+
            ` Elige una opción:`
        );
        switch (opcion) {
            case "1": await listar(); break;
            case "2": await crear(); break;
            case "3": await actualizar(); break;
            case "4": await eliminar(); break;
            case "5": await hecho(); break;
            case "0": console.log("Adios. "); break;
            default: console.warn("Opciona no válida.");
        }
    }   while (opcion !== "0");
}
menu()