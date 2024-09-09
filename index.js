
// create two div that sit over each other -- done
//make one of them display the wish
// the other one will cover the wish up 
//make sure the second cover is divided into square divs so she can click and make them disappear
//make the top cover disappear 
//create a refresh button that chenges what's one the wish box
//hang the refresh button on the corner of the entire div



const myWishForYou = [
    "I know there are lots of stars. Tem, you're a star. I don't know so much about you, but I know you're made from the finest star materials",
  "We met at the time the universe designed so we could appreciate what it means when beautiful things, curious things, and amazing things come in contact ", 
  "I sincecerly think the world will be a beatiful place if its full of Tems.",
  "May the Lord bless you so I can secretly tell myself, 'oh, wow, glad she did that. She shared that dream with me a while ago.",
  "Hello, Tem. Make a wish. I make one on your behalf though, your feet shall find the path that favours, your journey shall lead you to find grace, and your dreams shall meet fulfillment."
]

var wishText = document.getElementById("wishtext");

var randomNumber = Math.floor(Math.random() * myWishForYou.length);

console.log(randomNumber);

    wishText.innerHTML = myWishForYou [randomNumber]; 

    // var squareCover = document.getElementById("cover");
    
    



var htmlElements = "";
for (var i = 0; i < 50; i++) {
   htmlElements += '<div class="squareCover"></div>';
}
var cover = document.getElementById("cover");
cover.innerHTML = htmlElements;

//  var allCover = cover.innerHTML
// //  var allCover = allCover.length

var wishBox = document.getElementById("wish-box");

cover.addEventListener("click", function() {
    cover.style.display ="none"
    wishBox.setAttribute("style","width:400px");
    wishBox.setAttribute("style","height:400px");
});



// function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }






   

 
 



