const login = () => {
    const username = usernameInput.value
    const password = passwordInput.value
    if(username && password){
        console.log(typeof username, typeof password)
        localStorage.setItem("user",username)
        window.location = "dashboard.html"
    } else {
        alert("Please fill the form completely!!!")
    }
} 