function setRandomImage(imgElement, randomNumber){
  let imageSource = "RPS" + randomNumber + ".jpg";
  imgElement.setAttribute("src", imageSource);
}

var randomNumber1 = Math.floor(Math.random()*3)+1;
var randomNumber2 = Math.floor(Math.random()*3)+1;


setTimeout(()=>{
  var image1 = document.querySelectorAll("img")[0];
  setRandomImage(image1, randomNumber1);
}, 1000



);


setTimeout(()=>{
  var image2 = document.querySelectorAll("img")[1];
  setRandomImage(image2, randomNumber2);
}, 2000



);



setTimeout(() => {
  if (randomNumber1 === 1 && randomNumber2 === 3 ){
    document.querySelector("h1").innerHTML = "🏆 Player 1 wins 🥇 ";
  }
  else if (randomNumber2 ===1 && randomNumber1 === 3){
    document.querySelector("h1").innerHTML = "🏆 Player 2 wins 🥇 ";

  }
  else if (randomNumber1 ===3 && randomNumber2 === 2){
    document.querySelector("h1").innerHTML = "🏆 Player 1 wins 🥇 ";
  }
  else if (randomNumber2 === 3 && randomNumber1 === 2){
    document.querySelector("h1").innerHTML = "🏆 Player 2 wins 🥇 ";
  }
  else if (randomNumber1 ===2 && randomNumber2 === 1){
    document.querySelector("h1").innerHTML = "🏆 Player 1 wins 🥇 ";
  }
  else if (randomNumber2 ===2 && randomNumber1 === 1){
    document.querySelector("h1").innerHTML = "🏆 Player 1 wins 🥇 ";
  }
  else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = " 🚩 It is a tie 💪😍";
  }




}, 3000

);