var randomNumber1 = Math.floor(Math.random() * 6) + 1; ///1-6
var randomDiceImg = "dice" + randomNumber1 + ".png";   //dice1.png - dice6.png
var randomSourceImg = "images/" + randomDiceImg;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomSourceImg);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomSourceImg2 = "images/dice" + randomNumber2  + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomSourceImg2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}