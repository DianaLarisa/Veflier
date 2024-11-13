let enterAge= document.getElementById("input-age")
let goButton= document.getElementById("btn")
let ageEligible =document.getElementById("if-eligible")

function checkAge(){
    let age= enterAge.value
    ageEligible.innerText="Eligible: "
    if (age>=18){
        ageEligible.innerText += " YES! You can vote."
    }else{
        ageEligible.innerText += " NO! Sorry, come back next year."
    }
    return ageEligible.innerText
    
}
goButton.addEventListener("click", function(){
    checkAge()
    enterAge.value=""
})