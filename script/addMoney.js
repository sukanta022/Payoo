
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

function handleToggle(id){
    const forms = document.getElementsByClassName("form");

    for(const form of forms){
        form.style.display = "none";
    }

    document.getElementById(id).style.display = "block";
}

function handleToggleButton(id){
    const formBtns = document.getElementsByClassName("form-btn");

    for(const btn of formBtns){
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
        btn.classList.add("border-gray-300");
    }

    document.getElementById(id).classList.remove("border-gray-300");
    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]");
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

//transfer money
document.getElementById("send-btn").addEventListener("click", function(e){
    e.preventDefault();
    transferAccount = getIntValue("send-number");
    transferAmount = getNumberValue("transfer-amount");
    tPin = getIntValue("send-pin");

    if(transferAccount.toString().length===11 && tPin === 1234){
        availableBalance = getInnerTextValue("total-amount");
        if(availableBalance>=transferAmount){
            availableBalance = availableBalance - transferAmount;
            setValue("total-amount", availableBalance);
            alert("Transfer Complete");
            setInputValue("send-number","");
            setInputValue("transfer-amount","");
            setInputValue("send-pin", "");
        }
        else{
            alert("insufficient balance");
            setInputValue("transfer-amount","");
        }
    }
    else{
        alert("invalid credential");
        setInputValue("send-number", "");
        setInputValue("send-pin","");
    }

});

//pay bill
document.getElementById("pay-bill-btn").addEventListener("click", function(e){
    e.preventDefault();
    defaultAccountNumber = 12345678910;
    defaultDigit = 1234;

    console.log("sjhdbf");
    billAccountNumber = getIntValue("bill-account-num");
    billAmount = getNumberValue("bill-amount");
    bAccountPin = getNumberValue("bpin");
    availableBalance = Number(document.getElementById("total-amount").innerText);
    availableBalance = getInnerTextValue("total-amount");
    billmethod = document.getElementById("bill-select-input").value;
  

    if(billAccountNumber === defaultAccountNumber && bAccountPin === defaultDigit && billmethod !== "Select Back"){
        availableBalance = availableBalance - billAmount;
        availableBalance = availableBalance.toFixed(2);
        setValue("total-amount",availableBalance);
        alert("Bill Paid");
        setInputValue("bpin", "");
        setInputValue("bill-account-num", "");
        setInputValue("bill-select-input", "Select Back");
        setInputValue("bill-amount","");
    }
    else{
        alert("invalid credential");
        setInputValue("bpin","");
        setInputValue("bill-account-num", "");
    }
});

//toggle features
document.getElementById("add-money").addEventListener("click", function(){
    handleToggle("add-money-parent");
    handleToggleButton("add-money");
});

document.getElementById("cash-out").addEventListener("click", function(){
    handleToggle("cash-out-parent");
    handleToggleButton("cash-out");
});

document.getElementById("send-money").addEventListener("click", function(){
    handleToggle("send-parent");
    handleToggleButton("send-money");
});

document.getElementById("bonus").addEventListener("click", function(){
    handleToggle("bonus-parent");
    handleToggleButton("bonus");
});

document.getElementById("pay-bill").addEventListener("click", function(){
    handleToggle("pay-bill-parent");
    handleToggleButton("pay-bill");
})

document.getElementById("transection").addEventListener("click", function(){
    handleToggle("transection-parent");
    handleToggleButton("transection");
})

