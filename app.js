const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const Usuario = document.getElementById("Usuario").value;
    const Nombre = document.getElementById("Nombre").value;
    const Apellido = document.getElementById("Apellido").value;
    const Contraseña = document.getElementById("Contraseña").value;

    const data = {
        Usuario: Usuario,
        Nombre: Nombre,
        Apellido: Apellido,
        Contraseña: Contraseña,
    };
    console.log(data);
});