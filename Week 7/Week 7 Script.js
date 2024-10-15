"use strict";


let output = document.getElementById("output");
let formNode = document.getElementById("DisplayForm");

let queryString = location.search.slice(1);
queryString = queryString.replace(/\+/g," ");
queryString= decodeURIComponent(queryString);
console.log(queryString);

let formData = queryString.split("&");



function SetFormData(){
    for (let items of formData){
        let pair = items.split("=");
        let fieldLabel = document.createElement("li");
        fieldLabel.innerHTML = pair[0] + " = " + pair[1];
        document.getElementById("formNode").innerHTML = 
        "Your favorite color is " + formData[0].split("=")[1] + 
        ", your favorite media is " + formData[1].split("=")[1] + 
        ", and your favorite hobby is " + formData[2].split("=")[1];
        // formNode.appendChild(fieldLabel); 
        let inputField = document.createElement("input");
        inputField.id = pair[0];
        inputField.name = pair[0];
        inputField.value = pair[1];
        inputField.hidden = true;
        formNode.appendChild(inputField);
        document.getElementById("changerButton").onclick = "";
        document.getElementById("changerButton").innerHTML = "<a href='Week7AssignmentPage3.html'>Next Page</a>";
        localStorage.setItem("favColor", formData[0].split("=")[1]);
        sessionStorage.setItem("favMedia", formData[1].split("=")[1]);
        document.cookie = items + "; path=/"
    }
}

function displayInfo(){
    try{
        let localStorageItem = localStorage.getItem("favColor");
        let sessionStorageItem = sessionStorage.getItem("favMedia");
        let storedCookie = document.cookie.split("FavoriteHobby=")[1];
        document.getElementById("displayInfo").innerHTML = "LocalStorage: " + localStorageItem;
        document.getElementById("displayInfoTwo").innerHTML = "SessionStorage: " + sessionStorageItem;
        document.getElementById("displayInfoThree").innerHTML = "Cookie: " + storedCookie;
        console.log("Rna");
    } catch {}
}
displayInfo();




// let writeString = "Failure";
// let firstClick = false;


// function SetFormData(){
//     try{
//         let qString = location.search.slice(1);
//         qString = qString.replace("%20", " ");
//         let entriesArray = qString.split("&");
//         writeString = 
//         "Your favorite color is " + entriesArray[0].split("=")[1] + 
//         ", your favorite media is " + entriesArray[1].split("=")[1] + 
//         ", your favorite hobby is " + entriesArray[2].split("=")[1];
//     } catch {
//         writeString = "Error";
//     }
//     document.getElementById("DisplayForm").innerHTML = writeString;
//     console.log("Went Through");
//     document.getElementById("changerButton").innerHTML = "<a href='Week 7 Page 3'>Next Page</a>";
// }


// function saveEverything(){
//     localStorage.setItem("Color", entriesArray[0].split("=")[1]);
//     sessionStorage.setItem("Media", entriesArray[1].split("=")[1]);
//     document.cookie = "Hobby=" + entriesArray[2].split("=")[1] + "; SameSite=Strict; Secure"
// }