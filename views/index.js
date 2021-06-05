function validateform() {
    var p1 = document.myform.firstuser_name.value;
    var p2 = document.myform.seconduser_name.value;
    if(p1 == "" || p2 == "") {
        return false;
    } else return true;
}
// eslint-disable-next-line no-unused-vars
function show() {
    if(validateform()) {
        document.getElementById("form2").style.display = "block";
    } else {
        alert("please enter name");
    }
    var p1 = document.myform.firstuser_name.value;
    var p2 = document.myform.seconduser_name.value;
    document.getElementById("p1").innerHTML = p1;
    document.getElementById("p2").innerHTML = p2;
}
var btn1clicks = 0;
var btn2clicks = 0;

// eslint-disable-next-line no-unused-vars
function btn1() {
    btn1clicks += 1;
    var player1= document.getElementById("p1").innerText;
    document.getElementById("btn1").innerHTML = btn1clicks;
    var dif = btn1clicks > btn2clicks ? btn1clicks - btn2clicks : btn2clicks - btn1clicks;
    document.getElementById("dif").innerHTML = dif;
    var winner = btn1clicks > btn2clicks ? document.getElementById("p1").innerText : player1;
    if(dif==0){
	
        document.getElementById("winner").innerHTML="nowinner";
    }else
        document.getElementById("winner").innerHTML = winner;
}

// eslint-disable-next-line no-unused-vars
function btn2() {
    btn2clicks += 1;
    var player2= document.getElementById("p2").innerText;
    document.getElementById("btn2").innerHTML = btn2clicks;
    var dif = btn1clicks > btn2clicks ? btn1clicks - btn2clicks : btn2clicks - btn1clicks;
    document.getElementById("dif").innerHTML = dif;
    var winner = btn1clicks > btn2clicks ? document.getElementById("p1").innerText : player2;
    if(dif==0){
	
        document.getElementById("winner").innerHTML="nowinner";
    }else
        document.getElementById("winner").innerHTML = winner;
}

// eslint-disable-next-line no-unused-vars
function sendData() {
    var player1 = document.getElementById("p1").innerText;
    var player2 = document.getElementById("p2").innerText;
    var p1win = document.getElementById("btn1").innerText;
    var p2win = document.getElementById("btn2").innerText;
    var xhr = new XMLHttpRequest();
    var data = {
        param1: player1,
        param2: player2,
        param3: p1win,
        param4: p2win 
    };
    xhr.open("POST", "/data");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
}