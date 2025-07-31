console.log("¡Gestión de Datos con Objetos, Sets y Maps!");
const items = {
    1: { id: 1, nombre: "Laptop", precio: 1500 },
    2: { id: 2, nombre: "Mouse", precio: 25 },
    3: { id: 3, nombre: "Teclado", precio: 50 }
};

console.log("Objeto productos", items);

const setItems= new Set(Object.values(items).map(item => item.nombre));
console.log("Set de productos únicos:", setItems);

const mapItems = new Map([
    ["Electrónica", "Laptop"],
    ["Accsesorios", "Mouse"],
    ["Accsesorios", "Teclado"]
]);

console.log("Map de items y categorías:", mapItems);

for ( const id in items) {
    console.log(`Producto ID: ${id}, Detalles:`, items[id]);
}
for ( const item of setItems) {
    console.log("producto único:", item);
}
mapItems.forEach((item, category) => {
    console.log(`Categoría: ${category}, Producto: ${item}`)
});

console.log("Pruebas completas de gestión de datos: ");
console.log("Listas de productos de (objetos): ", items);
console.log("Listas de productos únicos (set): ", setItems);
console.log("categorias y productos (map): ", mapItems);

