window.addEventListener('load',function(){
var click = document.getElementById('click');
var contador=0;

click.addEventListener('click',function(){
    var div=document.createElement("div");
    div.innerHTML="Click N° : " + contador;
    var enviar=document.getElementById("enviar").appendChild(div);
    contador++;
   })
});
