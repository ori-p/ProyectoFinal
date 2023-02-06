/**document.getElementById("CafeMartinez").addEventListener('click', function(){
  if(document.getElementById('estilo').getAttribute('href')=="css/stilos.css" ){
      document.getElementById('estilo').setAttribute('href', "css/violeta.css");
      document.getElementById("CafeMartinez").innerHTML = "CafeMartinez" ;
      console.log("Se cambio al modo oscuro");
  }
  else{
      document.getElementById('estilo').setAttribute('href', "css/stilos.css");
      document.getElementById("CafeMartinez").innerHTML = 'Cambiar a violeta oscuro';
      console.log("Se cambio al modo claro.");
  }
}) ;
*/

document.getElementById("CafeMartinez").addEventListener('click' , function() {
   
  document.body.style.backgroundColor = 'rgb(101, 89, 110)'
}
)


document.getElementById("Donatozurlo").addEventListener('click' , function() {
   
  document.body.style.backgroundColor = 'rgb(219, 213, 224)'
}
)

document.getElementById("Natachanina").addEventListener('click' , function() {
   
  document.body.style.backgroundColor = 'rgb(210, 181, 236)'
}
)

