let cards=[];
let sum= 0;
let hasBlackjack= false;
let isAlive= false;
let message=""
let cardsEl= document.getElementById("card-el");
let sumEl= document.getElementById("sum-el");
let messageEl= document.getElementById("message")

function getRandomCard(){
    let randomNumer=Math.floor(Math.random()*14)+1;
    return randomNumer
}
function startGame(){
    isAlive=true;
    let firstCard= getRandomCard();
    let secondCard=getRandomCard();
    cards=[firstCard, secondCard];
    sum= firstCard+secondCard;
    renderGame();
}
function renderGame(){
    cardsEl.textContent= "Cards: ";
    for(i=0; i<cards.length; i++){
        cardsEl.textContent+= cards[i] + " ";
    }
    sumEl.textContent= "Sum: " + sum;
    if(sum<=21){
        message="Do you want to draw another card?";
    }else if (sum===21){
        message="You won the blackjack";
        hasBlackjack=true;
    }else{
        message="You are out of the game";
        isAlive=false;
    }
    messageEl.textContent=message
}
function newCard(){
    if(isAlive===true && hasBlackjack===false){
        let card= getRandomCard();
        sum+= card;
        cards.push(card);
        renderGame();

    }
}

