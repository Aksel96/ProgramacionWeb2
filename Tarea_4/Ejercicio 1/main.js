let liga = document.getElementById("liga");
let nombre = document.getElementById("nombre");
// Con esto se sobreescribe el funcionamiento del boton
liga.addEventListener("click",(evento)=>{
  console.log("Click sobre el link");
  evento.preventDefault();
})

nombre.addEventListener("keydown",(evento)=>{
  //evento.preventDefault();
  console.log("codigo: " + evento.type);
  console.log("Key: " + evento.key);
  console.log("repeat: " + evento.repeat);

  console.log(evento.ctrlKey ? "Presionaste control + " + evento.key : "solo " + evento.key);

  nombre.innerText = nombre.innerText + evento;

  // if(evento.key === 'a'){
  //   document.getElementById("edad").focus();
  // }
  if(evento.key === 'Enter'){
    evento.preventDefault();
    console.log("Enter capturado");
    document.getElementById("edad").focus();
  }

  console.log("Location teclado: " + evento.location);

})


document.getElementById("formulario").addEventListener("submit",(evento)=>{
  console.log("Validar campos.... ");
  console.log("Se envio el formulario");
  evento.preventDefault();
})

document.getElementById("autos").addEventListener("change",(evento)=>{
  console.log("Se cambio el valor");
  console.log(document.getElementById("autos").value)
})