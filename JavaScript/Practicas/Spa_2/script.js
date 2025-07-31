const links = document.querySelectorAll('nav a');
function startPage (){
    document.getElementById('vista-inicio').classList.remove('view');
    document.getElementById('vista-acerca').classList.remove('active');
    document.getElementById('vista-acerca').classList.add('view');
    document.getElementById('contactos').classList.remove('active');
    document.getElementById('contactos').classList.add('view');
}
function aboutPage(){
    document.getElementById('vista-acerca').classList.remove('view');
    document.getElementById('vista-inicio').classList.remove('active');
    document.getElementById('vista-inicio').classList.add('view');
    document.getElementById('contactos').classList.remove('active');
    document.getElementById('contactos').classList.add('view');    
}
function contactPage(){
    document.getElementById('contactos').classList.remove('view');
    document.getElementById('vista-inicio').classList.remove('active');
    document.getElementById('vista-inicio').classList.add('view');
    document.getElementById('vista-acerca').classList.remove('active');
    document.getElementById('vista-acerca').classList.add('view');
}

links.forEach(link =>{
    link.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e.target.getAttribute("href"));
        
        // const ruta = e.target.dataset.route;
        const ruta = e.target.getAttribute("href")
        
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));

        if (ruta === '/inicio') {
            startPage()
        } else if(ruta === '/acerca') {
            aboutPage()
        } else if(ruta === '/contacto'){
            contactPage()
        }
    });
});
            // document.getElementById('vista-inicio').classList.add('active');
            // document.querySelectorAll('.view').forEach(v => v.classList.remove('active'))
            // document.getElementById('vista-acerca').classList.add('view')

            // document.getElementById('vista-acerca').classList.remove('view')
            // document.getElementById('vista-acerca').classList.add('active');
            // document.getElementById('vista-inicio').classList.remove('active');
            // document.getElementById('vista-inicio').classList.add('view');

            // document.getElementById('contactos').classList.remove('view');
            // document.getElementById('contactos').classList.add('active')