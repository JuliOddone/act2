
let usuario = "administrador";
let password = 1234;


let ingreso1 = prompt("Ingrese su nombre de usuario: ");
console.log(ingreso1);

let ingreso2 = prompt("Ingrese su contraseña: ");
console.log(ingreso2);

if(ingreso1 != usuario || ingreso2 != password){
    alert("Ingreso incorrecto. Revise sus datos!");
} else {
    alert("Bienvenido al sitio");
}


function comparar() {
    let num1 = prompt("Ingrese el primer número: ");
    console.log(num1);

    let num2 = prompt("Ingrese el segundo número");
    console.log(num2);

    let num3 = prompt("Ingrese el tercer número");
    console.log(num3);

    if(num1 > num2 && num1 > num3){
        alert("El mayor número es: " + num1);
        console.log(num1);
    } else if(num2 > num1 && num2 > num3){
        alert("El mayor número es: " + num2);
        console.log(num2);
    } else if(num3 > num2 && num3 > num1){
        alert("El mayor número es: " + num3);
        console.log(num3);
    }

    if(num1 < num2 && num1 < num3){
        alert("El menor número es: " + num1);
        console.log(num1);
    } else if(num2 < num1 && num2 < num3){
        alert("El menor número es: " + num2);
        console.log(num2);
    }else if(num3 < num2 && num3 < num1){
        alert("El menor número es: " + num3);
        console.log(num3);
    }
}

let cadena = "Hola Mundo";

function saludar() {
    alert(cadena);
    console.log(cadena);
}