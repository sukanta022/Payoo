document.getElementById("add-money-btn").addEventListener("click", function(e){
    e.preventDefault();
    defaultAccountNumber = 12345678910;
    defaultDigit = 1234;


    accountNumber = parseInt(document.getElementById("account-num").value);
    amount = Number(document.getElementById("input-amount").value);
    accountPin = parseInt(document.getElementById("pin").value);
    availableBalance = Number(document.getElementById("total-amount").innerText);
    bank = document.getElementById("bank-input").value;
    console.log(bank);



    if(accountNumber === defaultAccountNumber && accountPin === defaultDigit && bank !== "Select Bank"){
        availableBalance = availableBalance + amount;
        availableBalance = availableBalance.toFixed(2);
        document.getElementById("total-amount").innerText = availableBalance;
        alert("Balance added");
        document.getElementById("pin").value = "";
        document.getElementById("account-num").value = "";
        document.getElementById("bank-input").value = "Select Bank";
        document.getElementById("input-amount").value = "";
    }
    else{
        alert("invalid credential");
        document.getElementById("pin").value = "";
        document.getElementById("account-num").value = "";
    }
});