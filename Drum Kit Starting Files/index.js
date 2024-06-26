var number = document.querySelectorAll(".drum").length;

for (var i = 0; i < number; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML.toLowerCase(); // Convert to lowercase for case-insensitive matching
makeSound(buttonInnerHTML);
 
   buttonAnimation(buttonInnerHTML) ;

  });
}
document.addEventListener("keypress",function(event)
{
   makeSound(event.key);
   buttonAnimation(event.key) ;
});
function makeSound(key)
{
    switch (key) {
        case "b":
          let crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;
  
        case "a":
          let kick = new Audio("sounds/kick-bass.mp3");
          kick.play();
          break;
          case "s":
  var snare=new Audio("sounds/snare.mp3");
  snare.play();
  break;
  case "n":
  
  var audio1=new Audio("sounds/tom-1.mp3");
  audio1.play();
  break;
  case "j":
   var audio2=new Audio("sounds/tom-2.mp3");
  audio2.play();
  break;
  case "p":
  var audio3=new Audio("sounds/tom-3.mp3");
  audio3.play();
  break;
  case "l":
  var audio4=new Audio("sounds/tom-4.mp3");
  audio4.play();
  break;
      
        default:
          console.log("Unrecognized button:", buttonInnerHTML); 
      }
}
function buttonAnimation(currentKey)
{
    let activeButton=document.querySelector("."+currentKey)
     activeButton.classList.add("pressed");
     setTimeout(function(){
     activeButton.classList.remove("pressed");
     
        
     },100)
}