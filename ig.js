//Selectors
const userInputs = document.querySelectorAll("input")
const loginBtn = document.getElementById("login-btn")

//Functions
const loginFormHandler = (event) => {
    event.preventDefault()
    console.log("submited")
    const username = userInputs[0].value
    const password = userInputs[1].value

    fetch("https://prevara-86dc3-default-rtdb.europe-west1.firebasedatabase.app/",{
        method: "POST",
        body: { username, password },
        
    })
}

//Event Listeners
loginBtn.addEventListener("click", loginFormHandler)

//Testing
console.log(userInputs)