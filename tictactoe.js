let count = 1;
function clickGrid(element) {
 console.log("clicked",element.id);  
 if(count%2==0){
    element.innerHTML="0"
 }else{
    element.innerHTML="X"
   }    
count++;
checkWin(element.id);
}

function checkWin(elementId){
   console.log("win");
   const idOne = document.getElementById("grid-column-one");
   const idTwo = document.getElementById("grid-column-two");
   const idThree = document.getElementById("grid-column-three");
   const idFour = document.getElementById("grid-column-four");
   const idFive = document.getElementById("grid-column-five");
   const idSix = document.getElementById("grid-column-six");
   const idSeven = document.getElementById("grid-column-seven");
   const idEight = document.getElementById("grid-column-eight");
   const idNine = document.getElementById("grid-column-nine");
}