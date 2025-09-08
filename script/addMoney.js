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

//withdraw features
document.getElementById("withdraw-btn").addEventListener("click", function(e){
    e.preventDefault();
    defaultAgenttNumber = 12345678910;
    defaultDigit = 1234;

    inputNumber = parseInt(document.getElementById("agent-number").value);
    withdrawAmount = Number(document.getElementById("withdraw-amount").value);
    accountPin = parseInt(document.getElementById("w-pin").value);


    if(inputNumber===defaultAgenttNumber && accountPin===defaultDigit){
        availableBalance = Number(document.getElementById("total-amount").innerText);
        if(availableBalance>=withdrawAmount){
            availableBalance = availableBalance - withdrawAmount;
            document.getElementById("total-amount").innerText = availableBalance;
            alert("Withdraw Complete");

            document.getElementById("agent-number").value = "";
            document.getElementById("withdraw-amount").value = "";
            document.getElementById("w-pin").value = "";
        }
        else{
            alert("insufficient balance");
            document.getElementById("withdraw-amount").value = "";
        }
    }
    else{
        alert("invalid credential");
        document.getElementById("agent-number").value = "";
        document.getElementById("w-pin").value = "";
    }

    

});

//toggle features
document.getElementById("add-money").addEventListener("click", function(){
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("add-money-parent").style.display = "block";
});

document.getElementById("cash-out").addEventListener("click", function(){
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block";
});