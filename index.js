function rollDice () {
    
    var leftDiceImage = document.querySelector(".img1");
    var rightDiceImage = document.querySelector(".img2");

    leftDiceImage.setAttribute("src", "./images/dice6.png");
    rightDiceImage.setAttribute("src", "./images/dice6.png");
    
    var player1 = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];
    
    var player2 = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];
    
    
    var randomNumber1 = Math.floor(Math.random() * 6)+1;
    var randomNumber2 = Math.floor(Math.random() * 6)+1;
    
    console.log(randomNumber1);
    console.log(randomNumber2);
    

    
    if (randomNumber1 === 1){
        leftDiceImage.setAttribute("src", "images/dice1.png");;
    } else if(randomNumber1 === 2){
        leftDiceImage.setAttribute("src","images/dice2.png");
    } else if (randomNumber1 === 3){
        leftDiceImage.setAttribute("src","images/dice3.png");
    } else if (randomNumber1 === 4){
        leftDiceImage.setAttribute("src","./images/dice4.png");
    } else if (randomNumber1 === 5){
        leftDiceImage.setAttribute("src","./images/dice5.png");
    } else if (randomNumber1 === 6){
        leftDiceImage.setAttribute("src","./images/dice6.png");
    }

    if (randomNumber2 === 1){
        rightDiceImage.setAttribute("src", "images/dice1.png");;
    } else if(randomNumber2 === 2){
        rightDiceImage.setAttribute("src","images/dice2.png");
    } else if (randomNumber2 === 3){
        rightDiceImage.setAttribute("src","images/dice3.png");
    } else if (randomNumber2 === 4){
        rightDiceImage.setAttribute("src","./images/dice4.png");
    } else if (randomNumber2 === 5){
        rightDiceImage.setAttribute("src","./images/dice5.png");
    } else if (randomNumber2 === 6){
        rightDiceImage.setAttribute("src","./images/dice6.png");
    }
    
    var textsus = document.querySelector("h1")

    if(randomNumber1 > randomNumber2) {
        textsus.innerHTML = "Player 1 wins"
    } else if (randomNumber1 < randomNumber2) {
        textsus.innerHTML = "Player 2 wins"
    } else {
        textsus.innerHTML = "DRAW"
    }
}

rollDice();


