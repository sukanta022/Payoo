
document.getElementById("LogIn").addEventListener("click", function(e){
    e.preventDefault();//remove the default beahivour of form button
    defaultPhoneNumber = 12345678910;
    defaultDigit = 1234;

    inputMobileNumber = parseInt(document.getElementById("mobile-number").value);
    inputDigit = parseInt(document.getElementById("4-digit").value);
    
    if(defaultPhoneNumber === inputMobileNumber && defaultDigit === inputDigit){
        window.location.href = "/HomePage1.html";
    }
    else{
        alert("Invalid login credential");
        document.getElementById("mobile-number").value = "";
        document.getElementById("4-digit").value = "";
    }
});