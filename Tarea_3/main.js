let op1 = document.getElementById("op1")
let op2 = document.getElementById("op2")

let botonsuma = document.getElementById("btnSuma")
let botonresta = document.getElementById("btnResta")
let botonmulti = document.getElementById("btnMulti")

let value1
let value2

let inputResult = document.getElementById("result")

function getvalues(){
  value1 = parseFloat(op1.value) 
  value2 = parseFloat(op2.value) 
}


let resultado = document.getElementById("result")
botonsuma.addEventListener("click",()=>{
  getvalues()
  let result = value1 + value2
  inputResult.value = result
})

botonresta.addEventListener("click",()=>{
  getvalues()
  let result = value1 - value2
  inputResult.value = result
})

botonmulti.addEventListener("click",()=>{
  getvalues()
  let result = value1 * value2
  inputResult.value = result
})

botonsuma.addEventListener("")