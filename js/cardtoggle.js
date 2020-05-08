
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
 
