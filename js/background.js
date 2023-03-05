const bgDiv = document.querySelector("body");
const images = ["./img/blackforest.png", "./img/busan.png", 
"./img/hanamura.png", "./img/horizon.png", "./img/lijiang.png",
"./img/midtown.png", "./img/paris.png", "./img/route66.png",];

const chosenImg = images[Math.floor(Math.random() * images.length)];

bgDiv.style.backgroundImage=`URL(${chosenImg})`;