function showsidebar(){
const sidebar =document.querySelector('.sidebar')
sidebar. style.display='flex'
}
function hidesidebar(){
    const sidebar =document.querySelector('.sidebar')
    sidebar. style.display='none'
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    
    event.preventDefault();


    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (username === "" || email === "" || password === "") {
        alert("Veuillez remplir tous les champs !");
        return;
    }


    this.submit();
});