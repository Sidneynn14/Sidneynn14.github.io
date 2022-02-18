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
//Return polygon name based on number of sides
function getShape() {
    let sides = document.getElementById("sides").value;
    sides = Math.round(sides);
    sides = Math.abs(sides);
    switch(sides) {
        case 0:
            alert("Your polygon does not exist :(");
            break;
        case 1:
            alert("Your polygon is a henagon");
            break;
        case 2:
            alert("Your polygon is a digon");
            break;
        case 3:
            alert("Your polygon is a trigon");
            break;
        case 4:
            alert("Your polygon is a tetragon");
            break;
        case 5:
            alert("Your polygon is a pentagon");
            break;
        case 6:
            alert("Your polygon is a hexagon");
            break;
        case 7:
            alert("Your polygon is a heptagon");
            break; 
        case 8:
            alert("Your polygon is a octagon");
            break;
        case 9:
            alert("Your polygon is a enneagon");
            break;
        case 10:
            alert("Your polygon is a decagon");
            break;
    }
}
//validates that the number of sides is indeed a number from zero to ten then runs the getShape() function if it is
function validateEntry(){
    let sides = document.getElementById("sides").value;
    sides = Math.round(sides);
    sides = Math.abs(sides);
    if(sides < 0 || sides > 10){
        alert("Sorry, please enter a number from 1 to 10");
    }else{
        getShape();
    }
}