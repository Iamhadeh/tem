


const mainImg = document.getElementById("mainImg");


    var randomNum = (Math.floor(Math.random () * 5));
    var randomImg = ("./Img" + randomNum + ".png");

    mainImg.setAttribute ("src", randomImg);


console.log(randomNum)



const myWishForYou = [
    "Tem, you're a star. I don't know so much about you, but I know you're made from the finest star materials",
  "When I remember you, I will remember beautiful things, curious things, and amazing things", 
  "I sincecerly think the world will be a beatiful place if its filled with Tems.",
  "May your dreams come true so we call all say, 'oh, wow, glad she did that. Wow, she's amazing.",
  "Hello, Tem. Make a wish. I make one on your behalf though, your feet shall find the path that favours, your journey shall lead you to find grace, and your dreams shall meet fulfillment.",
  "Happy Birthday, Omo Mummy Temi.", "Hey, smile", "Stay true to yourself, and keep beleiving.", "Don't worry. Not everybody knows the value of gold. Just stay shinning.", "The world is filled with amazing people. You're one.", "The sun is beautiful, powerful. Most people ignore it, understimate it's importance, and think less of it. Because it's the sun. That won't stop the sun from being the sun. Amazing. Powerful. Mysterious. It's refelction on the stream, a beatiful sight. You have a few similarities with the Sun."
]

var wishText = document.getElementById("wishtext");

let  randomNumber = Math.floor(Math.random() * myWishForYou.length);
wishText.innerHTML = myWishForYou [randomNumber]; 
    
    
const btnNext = document.getElementById("btnnext"); 

console.log(btnNext)

function changeText () {
        let  randomNumber = Math.floor(Math.random() * myWishForYou.length);
        wishText.innerHTML = myWishForYou [randomNumber]; 
        console.log(randomNumber)
}

btnNext.addEventListener("click", changeText);




// function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }






   

 
 



