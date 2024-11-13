
let increaseNumber= document.getElementById("btn-increment")
let decreaseNumber= document.getElementById("btn-descrement")
let totalNumbers =document.getElementById("result")
let counter=0

increaseNumber.addEventListener("click", function(){
    counter++
    totalNumbers.textContent = "TOTAL: "+ counter
})
decreaseNumber.addEventListener("click", function(){
    counter--
    totalNumbers.textContent= "TOTAL: "+ counter
})


// function changeColor(){
// let newColor= enterColor.value
// coloredBox.style.background= newColor
// }
// goButton.addEventListener("click", function(){
//     changeColor()
// })

// function convert(){
// let celsius= enterDegrees.value
// let convertedResult= ( celsius * 9/5) + 32
// resultDegrees.innerText=`Temperature ${celsius} in Celsius degrees is  ${convertedResult} in Fehrenheit.` 
// }
// goButton.addEventListener("click", function(){
//     convert()
//     enterDegrees.value=""
// })


// let enterAge= document.getElementById("input-age")
// let goButton= document.getElementById("btn")
// let ageEligible =document.getElementById("if-eligible")

// function checkAge(){
//     let age= enterAge.value
//     ageEligible.innerText="Eligible: "
//     if (age>=18){
//         ageEligible.innerText += " YES! You can vote."
//     }else{
//         ageEligible.innerText += " NO! Sorry, come back next year."
//     }
//     return ageEligible.innerText
    
// }
// goButton.addEventListener("click", function(){
//     checkAge()
//     enterAge.value=""
// })

/*let results= document.getElementById("result")
function calculate(a, b, operator){
    let result
    if (operator==="+"){
        result= a + b
    }else if(operator==="-"){
        result= a -b 
    }else if (operator==="*"){
    result = a* b
    }else if (operator==="/"){
        result= a/b
    }
    return result

}
results.innerText=calculate(7, 8, "+")
console.log(results)



function checkNumberOddOrEven(i){
    if(i % 2 ===0){
        return "The number is even"
    }else{
        return "The number is not even"
    }
}
let results= document.getElementById("result")
results.innerText=checkNumberOddOrEven(7)
console.log(results)


let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    console.log("Button clicked from addEventListener")
})


let cards = [7, 3, 9]

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run
for (let i=0; i<cards.length; i+=1){
    console.log(cards[i])
}
console.log("hello")

let sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent


for (let i=0; i<sentence.length; i++){
    greetingEl.textContent+=sentence[i]
}
let player1Time = 102
let player2Time = 107

// cmd+d - ctrl+d
function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// Write a function that returns the total race time
function totalRaceTime(){
    let sum =player1Time+ player2Time
    return sum
}
// Call/invoke the function and store the returned value in a new variable
let total = totalRaceTime()
console.log(total)
// Finally, log the variable out

let randomNumber = Math.floor( Math.random() * 6 )

console.log(randomNumber)

//let randomNumber = Math.floor( Math.random() * 6 ) + 1

//console.log(randomNumber)

// Create a function, rollDice(), that returns a random number between 1 and 6
function rollDice(){
    let randomDiceNumber = Math.floor( Math.random()*6)+1
    return randomDiceNumber
}
console.log(rollDice())*/