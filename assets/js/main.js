// Ingreso de datos
let nombre = prompt("Ingresa tu nombre completo:");
let email = prompt("Ingresa tu correo electrónico:");
let contraseña = prompt("Ingresa tu contraseña:");

// Validar que los campos no esten vacios
if (!nombre || nombre.trim() === "") {
    alert("Error: El campo 'nombre' no puede estar vacío.");
} else if (!email || email.trim() === "") {
    alert("Error: El campo 'email' no puede estar vacío.");
} else if (!contraseña || contraseña.trim() === "") {
    alert("Error: El campo 'contraseña' no puede estar vacío.");
} 
// Maximo 8 caracteres
else if (contraseña.length < 8) {
    alert("Error: La contraseña debe tener al menos 8 caracteres.");
} 
// Si todo esta bien:
else {
    alert(`✅ Registro exitoso. ¡Bienvenido, ${nombre}!`);
}
