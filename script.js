var totalEggs = 4160;
var board = document.querySelector("#game-board")
var scoreEl= document.querySelector("#score")
var score = 0;


for (var i = 0; i < totalEggs; i++) {
 var image = document.createElement('img');

 image.classList.add("egg");
 image.setAttribute("src", "./EasterEgg5.svg");
 image.setAttribute("alt", "egg-image");
 image.setAttribute(
    "style",
    `
    top: ${Math.floor(Math.random() * 750)}px;
    left: ${Math.floor(Math.random() * 750)}px;
    `
  );

 board.append(image);

 image.addEventListener('click' , (event) => {
var egg = event.target;

score++;
scoreEl. textContent = score;

egg.remove();

 })
}
