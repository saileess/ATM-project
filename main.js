var pins = [1111, 2222, 3333, 4444, 5555];
var balance = 0;

function check() {
   var temp = parseInt(document.getElementById("pin").value);
   if (pins.includes(temp)) {
     document.getElementById("atmOptions").style.display = "block";       
   } else {
       alert("Wrong pin. Please try again!");
   }
}

function deposit() {
    document.getElementById("depositAmount").style.display = "block";  
}

function depositSuccess() {
    balance = balance + parseInt(document.getElementById("dAmount").value);
    document.getElementById("depositAmount").style.display = "none";
    alert("Amount has been deposited!"); 
}

function withdraw() {
    document.getElementById("withdrawAmount").style.display = "block";  
}

function withdrawSuccess() {
    var wAmount = parseInt(document.getElementById("wAmount").value);
    if (wAmount > balance) {
        alert("Amount entered cannot be withdrawn. Insufficient balance!");
        document.getElementById("withdrawAmount").style.display = "none";  
    } else {
        balance = balance - wAmount;
        document.getElementById("withdrawAmount").style.display = "none";
        alert("Amount has been withdrawn!");   
    } 
}

function showBalance() {
    alert("Balance: "+balance);
}

function logout() {
    document.getElementById("atmOptions").style.display = "none"; 
    document.getElementById("pin").value = '';
}

