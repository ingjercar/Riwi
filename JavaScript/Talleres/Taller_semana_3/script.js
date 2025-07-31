fetch('http://localhost:3001/productos')
    .then(response => response.json())
    .then(data => console.log("Productos disponibles:", data))
    .catch(error => console.error("Error al obtener productos:", error));



async function newItem() {
    try {
        const nuevoProducto = { id:" 150", nombre: "Monitor", precio: 200};
        const res = await fetch ('http://localhost:3001/productos',{
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoProducto)
        });
        const data = await res.json();
        console.log(" Tarea creada:", data);
    }   catch (e) {
    console.error("Error al crear:", e.message);
    }
}
newItem()


async function updateItem() {
    try {
        const productoActualizado = {nombre: "Terrenos", precio: 1465415165400 };
        const newId ="2"
        const res = await fetch(`http://localhost:3001/productos/${newId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(productoActualizado)
        });
        const data = await res.json();
        console.log(" tarea actualizado:", data);
    } catch (e) {
        console.error("Error al actualizar:", e.message)
    }       
}
updateItem()


async function deleteItem() {
    try{
        const response = await fetch(`http://localhost:3001/productos/15`,{ 
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
            
        })
        
        console.log("Stetus code: ", response.status);
        console.log("Producto eliminado!")

    }catch(e){
        console.error("Error");
    }

}

deleteItem()


function validateItem(producto) {
    if (!producto.nombre || typeof producto.precio !== "number") {
        console.error("Datos del producto no válidos.");
        return false;
    }
    return true;    
}



// function main(){
//     let option;
//     do{
//         option = console.log(prompt("1 agregar nuevo producto, 2 actualizar un producto, 3 eliminar un producto, 4 validar, 5 salir"));
//         switch (option){
//             case 1:
//                 newItem(nuevoProducto)
//                 break;
//             case 2:
//                 updateItem(productoActualizado)
//                 break;
//             case 3:
//                 deleteItem(eliminar)
//                 break;
//             case 4:
//                 validateItem(producto)
//                 ;
//             case 5:
//                 break;
//         }
//     } while (option !== "5");
// }
// main()
