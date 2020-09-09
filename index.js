var player1Name = prompt("Please enter the name of player 1");
var player2Name = prompt("Please enter the name of player 2");

var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomImage1Source = "images/dice" + randomNumber1 + ".png";
var randomImage2Source = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImage1Source);
image2.setAttribute("src", randomImage2Source);

document.querySelectorAll("p")[0].innerHTML = player1Name;
document.querySelectorAll("p")[1].innerHTML = player2Name;

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Yayyyy!!! " + player1Name + " Wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Yayyy!!! " + player2Name + " Wins";
} else {
  document.querySelector("h1").innerHTML = "Its a DRAW!";
}
