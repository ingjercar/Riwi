let person1 = {
    name: "Pepe",
    age: 3,
    alias: "guerrilloHP"
}

console.log(person1.name)

console.log(person1["name"])

person1.name = "rodrigo"

person1.age = "8"

console.log(typeof person1.age)
delete person1.age

person1.bodycount = "9000000000"
person1["age"] = 23

let person2 = {
    name: "Pepa",
    age: 360,
    alias: "eduarCHUPACULOS"
    
}
let persona3 = {
    name: "Refrigerio",
    age: 360,
    alias: "eduarCHUPACULOS",
    walk: function(){
        console.log("lA PERSONA camonas")
    },
    jod: {
        name: "development",
        exp: 34,
        Work: function (){
            console.log("La persona trabaja")
        }
    }
}
console.log(persona3)

console.log(persona3.jod.name)

let persona4 = {
    name: "Camello",
    age: 736,
    alias: "mariguano",
    walk: function(){
        console.log("La persona camina")
    },
    job: {
        name: "development",
        exp: 3,
        Work: function (){
            console.log(`${this.name}La persona trabaja`)
        }
    }
}
persona4.job.Work()

console.log(persona3)

console.log(persona3 == persona4)
console.log(persona3 === persona4)
console.log(persona3.name === persona4.name)

for(let key in persona4){
    console.log(`${key}: ${persona4[key]}`)
}

function Person() {
    (name,age),
    this.name = name,
    this.age = age
}

// function esa () {
//     let count = 0;

//     return function esa() {
//         count++;
//         console.log(count);
//     };
// }
// const lapro = esa();
// lapro();

// Ejercicio 1: API de Libros
// Crea una colección `libros` con `id`, `titulo`, `autor`, `anio`.
// - GET: obtener todos los libros.
// - POST: agregar un nuevo libro.
// - PUT: actualizar el título o autor de un libro existente.
// - DELETE: eliminar un libro por su `id`

let libros = {
    
    id: 1, title: "ñema", autor: "eduarCHUPACULOS", age: 2000
}
get libros() {

}
let id  {
    
}