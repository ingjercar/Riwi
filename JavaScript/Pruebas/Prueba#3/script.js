const routes = {
    "/":"./main.html",
    "/login": "./login.html",
    "/events": "./events.html",
    "/register": "./register.html",
    "/logout": "./login.html",
    "/adminEvents": "./adminEvent.html",
    "/create": "./create.html",

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
    // document.getElementById("content").innerHTML =html
    const valor = document.getElementById("content")
    valor.innerHTML =html
    history.pushState({}, "", pathname);

    if (pathname === "/register") newItem();
    if (pathname === "/about") setupCounter();
    if (pathname === "/login") login();
    if (pathname === "/events") listUsers();
    if (pathname === "/adminEvents") listUsers();
    if (pathname === "/create") createEvent();
}
// +++++++++++++++++++++++++++++++++++++++++++++here is the log in +++++++++++++++++++++
async function login() {
    const form = document.getElementById("login-spa");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const gmail = document.getElementById("user").value;
        const pass = document.getElementById("password").value;
        let data;

        let loginCounter = false;
        let validateUser;
        let typeRole = document.getElementById("role").value;
        if (typeRole === "1") {
            typeRole = "visitor";
            const res = await fetch("http://localhost:3001/visitors");
            data = await res.json();
        } else if (typeRole === "2") {
            typeRole = "admin";
            const res = await fetch("http://localhost:3001/admin");
            data = await res.json();
        }

        data.forEach(visitors => {

            if (gmail === visitors.email && pass === visitors.password) {
                loginCounter = true;
                validateUser = visitors;
                alert("Bienvenido " + visitors.name);
            
            } else {
                loginCounter = false;
                alert("Usuario o contraseña incorrectos");
            }

            if (loginCounter === true) {
                document.getElementById('close-sesion').classList.remove('off')
                document.getElementById('close-sesion').classList.add('on')
                document.getElementById('oppen-sesion').classList.remove('on')
                document.getElementById('oppen-sesion').classList.add('off')
                if (typeRole === "visitor") {
                    document.getElementById("UserRole").innerHTML = "Visitor";
                    document.getElementById('admin-list').classList.remove('on')
                    document.getElementById('admin-list').classList.add('off')
                    document.getElementById('userStuff').classList.remove('off')
                    document.getElementById('userStuff').classList.add('on')
                    document.getElementById('userStuf').classList.remove('off')
                    document.getElementById('userStuf').classList.add('on')
                } else if (typeRole === "admin") {
                    document.getElementById("UserRole").innerHTML = "Admin";
                    document.getElementById('admin-list').classList.remove('off')
                    document.getElementById('admin-list').classList.add('on')
                    document.getElementById('userStuff').classList.remove('on')
                    document.getElementById('userStuff').classList.add('off')
                    document.getElementById('userStuf').classList.remove('on')
                    document.getElementById('userStuf').classList.add('off')
                }
            }

        }); 
    });
}
// ++++++++++++++++++++++++++log out++++++++++++++++++++++++++++++++++++++++
const buttonCloselog = document.getElementById("close-sesion");
buttonCloselog.addEventListener("click", () => {
    let roleState = ("visitor");
    document.getElementById('oppen-sesion').classList.remove('off')
    document.getElementById('oppen-sesion').classList.add('on')
    document.getElementById('close-sesion').classList.remove('on')
    document.getElementById('close-sesion').classList.add('off')
    

});

// ++++++++++++++++++++++++++++++++add a new user++++++++++++++++++++++++++++++++++

async function newItem() {
    const form = document.getElementById("create-user");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();


        try {
            const newUsername = document.getElementById("newUsername").value;
            const newUserEmail = document.getElementById("newUseremail").value; 
            const newUserPassword = document.getElementById("newUserpassword").value;
            const newUser = { "name": `${newUsername}`, "password": `${newUserPassword}`, "email": `${newUserEmail}` };

            let typeRole = document.getElementById("newUserRole").value;
            if (typeRole === "1") {
                typeRole = "visitors";
            } else if (typeRole === "2") {
                typeRole = "admin";
            }
            

            const res = await fetch (`http://localhost:3001/${typeRole}`,{
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
            });
            const data = await res.json();

            alert("Usuario creado correctamente");
        }   catch (e) {
            alert("Error al crear el usuario: ");

        }
        
    });
}

async function updateVisitor() {
    const form = document.getElementById("update-user");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();


        try {
            const idupdate = document.getElementById("idUpdate").value;
            const updUsername = document.getElementById("updUsername").value;
            const updUserEmail = document.getElementById("updUseremail").value; 
            const updUserPassword = document.getElementById("updUserpassword").value;
            const updUser = { name: `${updUsername}`, password: `${updUserPassword}`, email: `${updUserEmail}` };

            let typeRole = document.getElementById("updUserRole").value;
            if (typeRole === "1") {
                typeRole = "visitors";
            } else if (typeRole === "2") {
                typeRole = "admin";
            }
            

            const res = await fetch (`http://localhost:3001/${typeRole}/${idupdate}`,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(updUser)
            });
            const data = await res.json();

            alert("Usuario creado correctamente");
        }   catch (e) {
            alert("Error al crear el usuario: " + e.message);

        }
        
    });
}
// +++++++++++++++++++++++++++++++list the events+++++++++++++++++++++++++++++++++++

async function listUsers() {
    const container = document.getElementById("user-list");
    container.innerHTML = "Cargando usuarios...";
    try {
        const res = await fetch("http://localhost:3001/events");
        const users = await res.json();
        if (users.length === 0) {
            container.innerHTML = "No hay usuarios.";
            return;
        }
        container.innerHTML = `
            <ul>
                ${users.map(u => `<li><img src="./img/img1,2.jpeg" class="events"> -- ${u.name} -- ${u.description} -- ${u.capacity} -- ${u.date}</li>`).join("")}
            </ul>
        `;
    } catch (e) {
        container.innerHTML = "Error al cargar usuarios.";
    }
}
// ++++++++++++++++++++++++++++++++++with this funtion i made some events++++++++++++++++++++++++++++++++
async function createEvent() {

    document.getElementById("create-event").addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = document.getElementById("eventName").value;
        const description = document.getElementById("eventDescription").value;
        const capacity = document.getElementById("eventCapacity").value;
        const date = document.getElementById("eventDate").value;

        try {
            const res = await fetch("http://localhost:3001/events", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, description, capacity, date })
            });
            const data = await res.json();

            alert("Usuario creado correctamente");
        }   catch (e) {
            alert("Error al crear el usuario: " + e.message);
        }
    });
}

// +++++++++++++++++++++++++++++++++list and edit events+++++++++++++++++++++++++++++++++
async function listEvents() {
    const container = document.getElementById("event-list");
    container.innerHTML = "Cargando eventos...";
    try {
        const res = await fetch("http://localhost:3001/events");
        const events = await res.json();
        if (events.length === 0) {
            container.innerHTML = "No hay eventos.";
            return;
        }
        container.innerHTML = `
            <ul>
                ${events.map(e => `
                    <li>
                        ${e.name} - ${e.description} - ${e.capacity} - ${e.date}
                        <button onclick="editEvent('${e.id}')">Editar</button>
                        <button onclick="deleteEvent('${e.id}')">Borrar</button>
                    </li>
                `).join("")}
            </ul>
        `;
    } catch (e) {
        container.innerHTML = "Error al cargar eventos.";
    }
}

async function setupEvent() {

    document.getElementById("update-event").addEventListener("submit", async (e) => {
        e.preventDefault();
        const id = document.getElementById("updateId").value;
        const name = document.getElementById("updateName").value;
        const description = document.getElementById("updateDescription").value;
        const capacity = document.getElementById("updateCapacity").value;
        const date = document.getElementById("updateDate").value;
        try {
            const res = await fetch(`http://localhost:3001/events/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, description, capacity, date })
            });
            if (!res.ok) throw new Error("No se pudo actualizar el evento");
            document.getElementById("event-action-result").innerText = "Evento actualizado correctamente";
            e.target.reset();
        } catch (err) {
            document.getElementById("event-action-result").innerText = err.message;
        }
    });

    document.getElementById("delete-event").addEventListener("submit", async (e) => {
        e.preventDefault();
        const id = document.getElementById("deleteId").value;
        try {
            const res = await fetch(`http://localhost:3001/events/${id}`, {
                method: "DELETE"
            });
            if (!res.ok) throw new Error("No se pudo borrar el evento");
            document.getElementById("event-action-result").innerText = "Evento borrado correctamente";
            e.target.reset();
        } catch (err) {
            document.getElementById("event-action-result").innerText = err.message;
        }
    });
}
