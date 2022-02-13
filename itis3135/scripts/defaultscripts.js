function scriptTest(){
    alert("Hey my script is running");
}
function nameForm() {
    let name = document.getElementById("name").value;
    let emotion = document.getElementById("emotion").value;
    document.getElementById("welcome").innerHTML = ("<p>The Saffron Nectarine welecomes you, " + name + "! We're glad you are doing " + emotion + "!")
}

function joke(){
    document.getElementById("joke").innerHTML = ("Because it was lacking Vitamin See.")
}
function joke2(){
    document.getElementById("joke2").innerHTML = ("Because he was the zest in class.")
}
function joke3(){
    document.getElementById("joke3").innerHTML = ("They peeled the deal.")
}
function joke4(){
    document.getElementById("joke4").innerHTML = ("Because she was against orange-d marriages.")
}
function jokeFeedback(){
    document.getElementById("jokefeedback").innerHTML = ("Thank you for the feedback :)")
}