const usuarioInput = document.getElementById('email').value;
const contrasenaInput = document.getElementById('password').value;
const mensajeDiv = document.getElementById('mensaje');

    // Con el fetch llamamos nuestro objeto cuentas
    const response = await fetch('http://localhost:3001/cuentas');
    const data = await response.json();

    let loginExitoso = false;
    let usuarioGuardado;

    data.forEach(element => {
        // console.log(element.User);
        // console.log(element.Password);esta es la manera de imprimir el usuario y la contraseña

        if (usuarioInput === element.email && contrasenaInput === element.password) {
            loginExitoso = true;
            usuarioGuardado = element;
        }
    }); 

    // Mostramos el mensaje según el resultado
    if (loginExitoso ) {
        mensajeDiv.textContent = '¡Inicio de sesión exitoso!';

        if(usuarioGuardado.isAdmin === true){
            cargarVistaAdmin();
        } else{
            cargarVistaUsuario();
        }

    } else {
        mensajeDiv.textContent = 'Usuario o contraseña incorrectos.';
    }
}

document.addEventListener('DOMContentLoaded', () => {
  const iniciarSesion = document.getElementById('submit1');
  if (iniciarSesion) {
      iniciarSesion.addEventListener('click', verificarLogin);
  }
});