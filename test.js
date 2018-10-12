var t= document.getElementById('test');
var i = 0
while(true){
t.innerHtml = (i++) %10
if(i=10){
i=0
}
}
