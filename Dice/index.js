
var  randomNumber1 = Math.floor((Math.random()*6)+1);
var  randomNumber2 = Math.floor((Math.random()*6)+1);
document.getElementsByClassName("img1")[0].setAttribute("src", "/images/dice"+randomNumber1+".png")
document.getElementsByClassName("img2")[0].setAttribute("src", "/images/dice"+randomNumber2+".png")

function whoWon(player1, player2){
    if(player1 === player2){
        return "Draw";
    }
    if(player1>player2){
        return "Player 1 Wins!"
    } else{
        return "Player 2 Wins!"
    }
}


document.querySelector("h1").innerHTML = whoWon(randomNumber1, randomNumber2);

function refresh(){
    window.location.reload("Refresh")
  }