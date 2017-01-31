// This is my JS for password exercise

var access = "manuel";

var i = 0;

var correctPassword = [];

document.getElementById("myButton").addEventListener("click", checkPassword, false);

function checkPassword() {
    
    var userPassword = document.getElementById("userP").value;
    
    while (i < 3) {
        
    
        if (userPassword === "") {
        
            alert("Write something please!");
        
        } else if (userPassword !== access) {
        
        alert("wrong password!");
        i++;

        } else {
        
        alert("congratulations!");
        }  
    }
    
}
