let count = 1;
function clickGrid(element) {
 console.log("clicked",element.id);  
 if(count%2==0){
    element.innerHTML="0"
 }else{
    element.innerHTML="X"
 } 
 count++;
}