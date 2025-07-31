// const links = document.querySelectorAll("nav a');

// links.forEach(link =>{
//     link.addEventListener('click', (e) => {
//         e.preventDefault();

//         const ruta = e.target.dataset.
//         route;

//         document.querySelectorAll('.view').forEach(v => v.classList.remove('activate'));

//         if (ruta === 'inicio') {
//             document.getElementById('vista-inicio').classList.add('active');
//         } else if(ruta === 'acerca') {
//             document.getElementById('vista-acerca').classList.add('active');
//         }

//     });
// });


const routes = {
    "/":"./inicio.html",
    "/inicio": "./inicio.html",
    "/acerca": "./acerca.html"
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