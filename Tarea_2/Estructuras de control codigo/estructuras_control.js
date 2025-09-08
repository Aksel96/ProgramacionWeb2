// Seleccion (Condicionales) IF

//Codigo 1
let edad = 20;
if(edad >= 18){
    console.log("Eres mayor de edad");
}
console.log("Fin.");
// Codigo 2
edad = 20;

if(edad >= 18){
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad");
}
console.log("Fin.");
// Codigo 3
edad = 20;
let traeIne = true;

if (edad >= 18){
    if(traeIne){
    console.log("Bienvenido al Shine");
    }else{
    console.log("No puedes entrar");
    }
}else{
    console.log("Eres menor de edad");
}
console.log("Fin.");

// Seleccion (Condicionales) SWITCH

// Codigo 4
let dia = 'jueves';
if(dia == 'lunes'){
    console.log("Inicio de semana");
}else if(dia == "martes"){
    console.log("Segundo lunes!!");
}else if(dia == "miercoles"){
    console.log("Ombligo de la semana");
}else if(dia == "jueves"){
    console.log("Precopeo");
}else if(dia == "viernes"){
    console.log("Hoy toca");
}else{
    console.log("A descansar!!!");
}

// Codigo 5
dia = 'viernes';
switch(dia){
    case 'lunes':
    console.log("Inicio de semana");
    break;
    case 'martes':
    console.log("Segundo lunes");
    break;
    case 'miercoles':
    console.log("Ombligo de la semana");
    break;
    case 'jueves':
    console.log("Pre viernes");
    break;
    case 'viernes':
    console.log("Hoy toca y el cuerpo lo sabe!!!");
    break;
    default:
    console.log("A descansar!");
}

// Repeticion (ciclos)

// Codigo 6
for(let i = 1; i<=5;i++){
    console.log("Hola: " + i);
}
// Codigo 7
const miArray = ["a","b","c"];
for(let indice in miArray){
    console.log(indice);
}
// Codigo 8
let contador = 1;
while(contador <= 5){
    console.log("contador: " + contador);
    contador++;
}
// Codigo 9
const calificaciones = [9,7,10,5,8];
for(let i = 0; i < calificaciones.length; i++){
    console.log(calificaciones[i]);
}
// Codigo 10
let numero = 0;
do{
    console.log("Numero: " + numero);
    numero++;
}while(numero < 3);
// Codigo 11
for(let i = 1; i<= 10; i++){
    if(i === 3) continue;
    if(i === 5) break;
    console.log("i = " + i);
}
// Codigo 12
function recorrerArray(array, callback){
    for(let i = 0; i < array.length; i++){
    callback(array[i]);
    }
}
recorrerArray([1,2,3], function(num){
    console.log("Numero: " , num);
})

