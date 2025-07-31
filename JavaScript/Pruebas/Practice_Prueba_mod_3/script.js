 const routes = {
    "/":"./main.html",
    "/main": "./main.html",
    "/acerca": "./about.html",
    "/libros": "./books.html",
    "/inicioVisitante": "./inicioVisitante.html",
    "/inicioBibliotecario": "./inicioBibliotecario.html"

}   
document.body.addEventListener("click", (e) =>{
    if( e.target.matches("[data-link]")) {
        e.preventDefault();
        navigate(e.target.getAttribute("href"))
    }
});
async function navigate(pathname){
    const route = routes[pathname]
    console.log(route)
    const html = await fetch(route).then(res => res.text())
    document.getElementById("content").innerHTML =html
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
async function newVisitor() {
    try {
        const vNewname = getElementById('visitorNewName')
        const vNewLname = getElementById('visitorNewLname')
        const newPerson = {  "nombre": `${vNewname}`, "apellido": `${vNewLname}`, "id":"3" };
        const awnser = await fetch ('http://localhost:3000/personas',{
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPerson)
        });
        const data = await awnser.json();
        console.log(" Tarea creada:", data);
    }   catch (e) {
    console.error("Error al crear:", e.message);
    }
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
async function updateVisitor() {
    try {
        const selectedId = getElementById("visitorUpdId")
        const vUpdname = getElementById("visitorUpdName")
        const vUpdLname = getElementById("visitorUpdLname")
        const updatedVisitor = {nombre: `${vUpdname}`, "apellido": `${vUpdLname}`, id:" 3" };
        const res = await fetch(`http://localhost:3000/personas/${selectedId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(updatedVisitor)
        });
        const data = await res.json();
        console.log(" tarea actualizado:", data);
    } catch (e) {
        console.error("Error al actualizar:", e.message)
    }       
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
async function deleteItem() {
    try{
        const deleteId = getElementById("visitorDelId")
        const response = await fetch(`http://localhost:3000/personas/${deleteId}`,{ 
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}  
        })
        console.log("Stetus code: ", response.status);
        console.log("Producto eliminado!")
    }catch(e){
        console.error("Error");
    }
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const links = document.getElementById('selector1');
function createPage (){
    document.getElementById('vista-crear').classList.remove('view');
    document.getElementById('vista-actualizar').classList.remove('active');
    document.getElementById('vista-actualizar').classList.add('view');
    document.getElementById('vista-eliminar').classList.remove('active');
    document.getElementById('vista-eliminar').classList.add('view');
}
function updatePage(){
    document.getElementById('vista-actualizar').classList.remove('view');
    document.getElementById('vista-crear').classList.remove('active');
    document.getElementById('vista-crear').classList.add('view');
    document.getElementById('vista-eliminar').classList.remove('active');
    document.getElementById('vista-eliminar').classList.add('view');    
}
function deletePage(){
    document.getElementById('vista-eliminar').classList.remove('view');
    document.getElementById('vista-crear').classList.remove('active');
    document.getElementById('vista-crear').classList.add('view');
    document.getElementById('vista-actualizar').classList.remove('active');
    document.getElementById('vista-actualizar').classList.add('view');
}


links.forEach(link =>{
    link.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e.target.getAttribute("href"));
        
        // const ruta = e.target.dataset.route;
        const ruta = e.target.getAttribute("href")
        
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));

        if (ruta === '/inicio') {
            console.log("entro inicio");
            createPage()
        } else if(ruta === '/acerca') {
            updatePage()
            
        } else if(ruta === '/contacto'){
            deletePage()
        }
    });
});

try {
    const vNewname = getElementById("visitorNewName")
    const vNewLname = getElementById("visitorNewLname")
    const newPerson = {  nombre: `${vNewname}`, "apellido": `${vNewLname}`, id:" 3" };
    const awnser = await fetch ('http://localhost:3000/personas',{
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPerson)
    });
    const data = await awnser.json();
    console.log(" Tarea creada:", data);
}   catch (e) {
console.error("Error al crear:", e.message);
}
