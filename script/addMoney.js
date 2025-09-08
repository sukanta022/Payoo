
function getIntValue(id){
    const value = parseInt(document.getElementById(id).value);
    return value;
}

function getNumberValue(id){
    const value = Number(document.getElementById(id).value);
    return value;
}

function getInnerTextValue(id){
    const value = Number(document.getElementById(id).innerText);
    return value;
}

function setValue(id, text){
    document.getElementById(id).innerText = text;
}

function setInputValue(id, text){
    document.getElementById(id).value = text;
}


document.getElementById("add-money-btn").addEventListener("click", function(e){
    e.preventDefault();
    defaultAccountNumber = 12345678910;
    defaultDigit = 1234;


    accountNumber = getIntValue("account-num");
    amount = getNumberValue("input-amount");
    accountPin = getNumberValue("pin");
    availableBalance = Number(document.getElementById("total-amount").innerText);
    availableBalance = getInnerTextValue("total-amount");
    bank = document.getElementById("bank-input").value;
  

    if(accountNumber === defaultAccountNumber && accountPin === defaultDigit && bank !== "Select Bank"){
        availableBalance = availableBalance + amount;
        availableBalance = availableBalance.toFixed(2);
        setValue("total-amount",availableBalance);
        alert("Balance added");
        setInputValue("pin", "");
        setInputValue("account-num", "");
        setInputValue("bank-input", "Select Bank");
        setInputValue("input-amount","");
    }
    else{
        alert("invalid credential");
        setInputValue("pin","");
        setInputValue("account-num", "");
    }
});

//withdraw features
document.getElementById("withdraw-btn").addEventListener("click", function(e){
    e.preventDefault();
    defaultAgenttNumber = 12345678910;
    defaultDigit = 1234;

    inputNumber = getIntValue("agent-number");
    withdrawAmount = getNumberValue("withdraw-amount");
    accountPin = getIntValue("w-pin");


    if(inputNumber===defaultAgenttNumber && accountPin===defaultDigit){
        availableBalance = Number(document.getElementById("total-amount").innerText);
        if(availableBalance>=withdrawAmount){
            availableBalance = availableBalance - withdrawAmount;
            setValue("total-amount", availableBalance);
            alert("Withdraw Complete");
            setInputValue("agent-number","");
            setInputValue("withdraw-amount","");
            setInputValue("w-pin", "");
        }
        else{
            alert("insufficient balance");
            setInputValue("withdraw-amount","");
        }
    }
    else{
        alert("invalid credential");
        setInputValue("agent-number", "");
        setInputValue("w-pin","");
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