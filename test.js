 window.addEventListener("load", function(event) {
    console.log("All resources finished loading!");
   var t= document.getElementById('test');
var i = 0
while(i < 100){
 
 setTimeout(()=>{
   t.innerHTML = t + ((i++) %10);
   if(i=10){
   i=0
   }
 },10)

}
  });
