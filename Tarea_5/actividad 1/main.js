let campo = document.getElementById("nombre");
let mensaje = document.getElementById("salida");

campo.addEventListener("copy", (e)=>{
  console.log("copiado");
  e.clipboardData.setData("text", window.getSelection().toString())
  e.preventDefault();
  mensaje.innerText = "Copiado ..." + window.getSelection().toString();
})

campo.addEventListener("paste", (e)=>{
  console.log("Pegado")
  const pegado = e.clipboardData.getData("text");
  
  mensaje.innerText = "Pegado: " + pegado;
})

window.addEventListener("beforeprint", (e) => {
  console.log("Antes de imprimir");
  campo.style.display = "none";
  alert("Ejemplo ...");
})

window.addEventListener("afterprint", (e) => {
  console.log("Antes de imprimir");
  campo.style.display = "block";
  alert("Ejemplo  despues de terminar la impresion...");
})
