var randomNumber1 = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber2);

// img1

if (randomNumber1 == 1) {
  document.querySelector(".img1").setAttribute("src", "images/dice1.png");
}
else if (randomNumber1 == 2) {
  document.querySelector(".img1").setAttribute("src", "images/dice2.png");
}
else if (randomNumber1 == 3) {
  document.querySelector(".img1").setAttribute("src", "images/dice3.png");
}
else if (randomNumber1 == 4) {
  document.querySelector(".img1").setAttribute("src", "images/dice4.png");
}
else if (randomNumber1 == 5) {
  document.querySelector(".img1").setAttribute("src", "images/dice5.png");
}
else {
  document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}


// img2

if (randomNumber2 == 1) {
  document.querySelector(".img2").setAttribute("src", "images/dice1.png");
}
else if (randomNumber2 == 2) {
  document.querySelector(".img2").setAttribute("src", "images/dice2.png");
}
else if (randomNumber2 == 3) {
  document.querySelector(".img2").setAttribute("src", "images/dice3.png");
}
else if (randomNumber2 == 4) {
  document.querySelector(".img2").setAttribute("src", "images/dice4.png");
}
else if (randomNumber2 == 5) {
  document.querySelector(".img2").setAttribute("src", "images/dice5.png");
}
else {
  document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}

// h1 text changer

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText="Player1 Wins";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerText="Player2 Wins";
}
else {
  document.querySelector("h1").innerText="It's a Draw!";
}

//
// switch (randomNumber1) {
//   case 1:
//   document.querySelector(".img1").setAttribute("src", "images/dice1.png");
//   break;
//   case 2:
//   document.querySelector(".img1").setAttribute("src", "images/dice2.png");
//   break;
//   case 3:
//   document.querySelector(".img1").setAttribute("src", "images/dice3.png");
//   break;
//   case 4:
//   document.querySelector(".img1").setAttribute("src", "images/dice4.png");
//   break;
//   case 5:
//   document.querySelector(".img1").setAttribute("src", "images/dice5.png");
//   break;
//   case 6:
//   document.querySelector(".img1").setAttribute("src", "images/dice6.png");
//   break;
// }
//
