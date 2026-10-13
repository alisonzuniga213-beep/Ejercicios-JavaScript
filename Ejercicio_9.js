let usuario ="admin"
let contraseña ="1234"

let usuario_ingresado = "admin";
let contraseña_ingresada = "1234";

if (usuario_ingresado === usuario){
    if (contraseña_ingresada === contraseña){
        console.log("Acceso concedido");
    }else{
        console.log("Contraseña incorrecta");
    }
}else{
    console.log("Usuario no encontrado");
}