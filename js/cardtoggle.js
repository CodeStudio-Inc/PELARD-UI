
var card1 = document.querySelector(".card-one");
var card2 = document.querySelector(".card-two");
var card3 = document.querySelector(".card-three");
var card4 = document.querySelector(".card-four");
function moveToCard2() {
 card1.style.display = "none"
 card2.style.display = "block"
 card3.style.display = "none"
 card4.style.display = "none"
}

function moveToCard3() {
  card1.style.display = "none"
  card2.style.display = "none"
  card3.style.display = "block"
  card4.style.display = "none"
}
function moveToCard4() {
  card1.style.display = "none"
  card2.style.display = "none"
  card3.style.display = "none"
  card4.style.display = "block"
 }


 function moveBackToCard3() {
  card1.style.display = "none"
  card2.style.display = "none"
  card3.style.display = "block"
  card4.style.display = "none"
 }

 function moveBackToCard2() {
   card1.style.display = "none"
   card2.style.display = "block"
   card3.style.display = "none"
   card4.style.display = "none"
 }
 function moveBackToCard1() {
   card1.style.display = "block"
   card2.style.display = "none"
   card3.style.display = "none"
   card4.style.display = "none"
  }
 
  
  var loginCard= document.querySelector(".four");
  var welcomeCard1 = document.querySelector(".one");
  var welcomeCard2 = document.querySelector(".two");
  var welcomeCard3= document.querySelector(".three");

  function moveTologinCard() {
    welcomeCard1.style.display = "none"
    welcomeCard2.style.display = "none"
    welcomeCard3.style.display = "none"
    loginCard.style.display = "block"
   }

   function moveToWelcomeCard2(){
    welcomeCard1.style.display = "none"
    welcomeCard2.style.display = "block"
    welcomeCard3.style.display = "none"
    loginCard.style.display = "none"
   }

   function moveToWelcomeCard3(){
    welcomeCard1.style.display = "none"
    welcomeCard2.style.display = "none"
    welcomeCard3.style.display = "block"
    loginCard.style.display = "none"
   }