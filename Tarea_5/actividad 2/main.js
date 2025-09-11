let video = document.getElementById("video");

video.addEventListener("play",(e)=>{
  console.log("Le diste play");
})

video.addEventListener("ended",(e)=>{
  console.log("Termino el video")
})

video.addEventListener("pause",(e)=>{
  console.log("medio pausado")
})