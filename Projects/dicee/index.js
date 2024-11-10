//player 1
var rNO = Math.floor(Math.random()*6) + 1;

if(rNO === 1){
    document.querySelector(".dice-one .first").classList.add("hidden");
    document.querySelector(".dice-one .third").classList.add("hidden");
    document.querySelector(".dice-one .fourth").classList.add("hidden");
    document.querySelector(".dice-one .sixth").classList.add("hidden");
    document.querySelector(".dice-one .seventh").classList.add("hidden");
    document.querySelector(".dice-one .ninth").classList.add("hidden");
} else if(rNO === 2){
    document.querySelector(".dice-one .first").classList.add("hidden");
    document.querySelector(".dice-one .fourth").classList.add("hidden");
    document.querySelector(".dice-one .fifth").classList.add("hidden");
    document.querySelector(".dice-one .sixth").classList.add("hidden");
    document.querySelector(".dice-one .ninth").classList.add("hidden");
} else if(rNO === 3){
    document.querySelector(".dice-one .first").classList.add("hidden");
    document.querySelector(".dice-one .fourth").classList.add("hidden");
    document.querySelector(".dice-one .sixth").classList.add("hidden");
    document.querySelector(".dice-one .ninth").classList.add("hidden");
} else if(rNO === 4){
    document.querySelector(".dice-one .fourth").classList.add("hidden");
    document.querySelector(".dice-one .fifth").classList.add("hidden");
    document.querySelector(".dice-one .sixth").classList.add("hidden");
} else if(rNO === 5){
    document.querySelector(".dice-one .fourth").classList.add("hidden");
    document.querySelector(".dice-one .sixth").classList.add("hidden");
} else if(rNO === 6){
    document.querySelector(".dice-one .fifth").classList.add("hidden");
}



//player2
var rNt = Math.floor(Math.random()*6) + 1;



if(rNt === 1){
    document.querySelector(".dice-two .first1").classList.add("hidden");
    document.querySelector(".dice-two .third1").classList.add("hidden");
    document.querySelector(".dice-two .fourth1").classList.add("hidden");
    document.querySelector(".dice-two .sixth1").classList.add("hidden");
    document.querySelector(".dice-two .seventh1").classList.add("hidden");
    document.querySelector(".dice-two .ninth1").classList.add("hidden");
} else if(rNt === 2){
    document.querySelector(".dice-two .first1").classList.add("hidden");
    document.querySelector(".dice-two .fourth1").classList.add("hidden");
    document.querySelector(".dice-two .fifth1").classList.add("hidden");
    document.querySelector(".dice-two .sixth1").classList.add("hidden");
    document.querySelector(".dice-two .ninth1").classList.add("hidden");
} else if(rNt === 3){
    document.querySelector(".dice-two .first1").classList.add("hidden");
    document.querySelector(".dice-two .fourth1").classList.add("hidden");
    document.querySelector(".dice-two .sixth1").classList.add("hidden");
    document.querySelector(".dice-two .ninth1").classList.add("hidden");
} else if(rNt === 4){
    document.querySelector(".dice-two .fourth1").classList.add("hidden");
    document.querySelector(".dice-two .fifth1").classList.add("hidden");
    document.querySelector(".dice-two .sixth1").classList.add("hidden");
} else if(rNt === 5){
    document.querySelector(".dice-two .fourth1").classList.add("hidden");
    document.querySelector(".dice-two .sixth1").classList.add("hidden");
} else if(rNt === 6){
    document.querySelector(".dice-two .fifth1").classList.add("hidden");
}


//heading change
if(rNO > rNt){
    document.querySelector(".heading").textContent = "Player 1 WIN";
} else if(rNO < rNt){
    document.querySelector(".heading").textContent = "Player 2 WIN";
} else if(rNO === rNt) {
    document.querySelector(".heading").textContent = "Draw";
}
