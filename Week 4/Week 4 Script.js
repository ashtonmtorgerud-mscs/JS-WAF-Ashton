"use strict";

//Go to previous page
function GoBack(){
    history.back()
}


///Event Listeners and Setup Initializers
window.addEventListener('resize', UpdateDeviceAssumption);
UpdateDeviceAssumption();
LogElement();
UpdateTime();
setInterval(UpdateTime, 1000);

//Update the Time Each second
function UpdateTime() {
    let d = new Date();
    document.getElementById("CurrentTime").innerHTML = d.toLocaleTimeString();
}

//Log The Element and it's children
function LogElement(){
    let element = document.getElementById("GamesList");
    console.log(element);
}


//Update whatever device is being used
function UpdateDeviceAssumption() {
    let ww = window.innerWidth;
    document.getElementById("DeviceChecker").innerHTML = "a";
    let newText = "";
    window.outer
    switch (true) {
        case (ww < 1): newText = "honestly I have no idea how you're doing this"; break;
        case (ww < 567): newText = "Is... is that a flipphone? ... Or a smartwatch?"; break;
        case (ww < 768): newText = "You're likely running a smartphone,"; break;
        case (ww < 992): newText = "You're likely using a tablet,"; break;
        case (ww < 1200): newText = "You're likely using a desktop,"; break;
        case (ww > 1200): newText = "You're likely using a large desktop,"; break;
        default: newText = "Your device is not recognized";
    }
    newText += " at " + ww + " pixels. Nice!";
    document.getElementById("DeviceChecker").innerHTML = newText;

};

//Add game input to the list
function AddItemToGameList(input) {
    let newItem = document.createElement("li");
    newItem.innerHTML = document.getElementById('GameInput').value;
    document.getElementById("GamesList").appendChild(newItem);
    document.getElementById("ConfirmationMessage").innerHTML = "Game Added Successfully";
    document.getElementById("ConfirmationMessage").style.color = "Green";
    ClearMEssage();
    console.clear();
    LogElement();
}

//Ensure the user wants to add the text, from the modal
function SubmitConfirmText(){
    let inputtedGame = document.getElementById('GameInput').value;
    let outputMessage =  "";
    if (inputtedGame == ""){
        outputMessage = "There was no input, please return and add a game title"
    } else{
    outputMessage = "Are you sure you want to add \"" + inputtedGame + "\" to the list?"
    }
     
    document.getElementById('SubmitConfirmText').innerHTML = outputMessage;
}

///Message Updating

function ErrorMessage(){
    document.getElementById("ConfirmationMessage").style.color = "red";
    document.getElementById("ConfirmationMessage").innerHTML = "Game Addition Cancelled";
    ClearMEssage();
}

function ClearMEssage(){
    setTimeout(() => {
        document.getElementById("ConfirmationMessage").innerHTML = "";
    }, 2000);
}