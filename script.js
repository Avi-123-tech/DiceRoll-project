

let h1 = document.querySelector("h1");
let image1 = document.querySelector(".img1");
let image2 = document.querySelector(".img2");

let randomNumber1 = Math.floor(Math.random() * 6 + 1) 

image1.setAttribute("src", "images/dice"+[randomNumber1]+".png")

let randomNumber2 = Math.floor(Math.random() * 6 + 1) 
image2.setAttribute("src", "images/dice"+[randomNumber2]+".png")


if( randomNumber1 > randomNumber2) {
    h1.textContent = "player1 won"
}
else if (randomNumber2 > randomNumber1) {
   h1.textContent = "player2 won"
}
else {
    h1.textContent = "its draw"
}