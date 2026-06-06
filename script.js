function login(){

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if(username == "rushda" && password == "1234"){
        window.location.href = "admin.html"
    }
        else{
        window.location.href = "home.html"
    }
}

