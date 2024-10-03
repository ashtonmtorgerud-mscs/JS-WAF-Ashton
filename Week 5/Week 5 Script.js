"use strict";

window.addEventListener("load", focusName)
// let gForm = document.forms["GoslingForm"];
let oiMateItsABitBlurryOutTadayInnit = false;
let literallyRyanGosling = true;
let test = [1, 2, 3];


function focusName(){
    let name = gForm.elements[0].value;
    gForm.elements[0].focus();
    gForm.querySelector("#goslingsSelect").selectedIndex = "1";
}


// gForm.addEventListener("click", blurGForm)

// function blurGForm(){        I have an unblur method but I'm commenting it because it's useless as Browsers automatically deselect fields when you click away,
//     for (let i = 0; i < gForm.elements.length; i++){
//         gForm.elements[i].blur();
//         console.log(i);
//     }
// }

let gForm = document.forms["GoslingForm"];
function GetTheModal() {
    gForm = document.forms["GoslingForm"];

    Array.from(gForm.elements).forEach ( gElement => {
        gElement.setCustomValidity("");
    })


    if (!gForm.checkValidity()) {
        for (let i = 0; i < gForm.elements.length; i++) {
            const gElement = gForm.elements[i];
            console.log("gField value:", gForm.elements[i].value);

            if (!gElement.validity.valid) {
                if (gElement.validity.valueMissing) {
                    gElement.setCustomValidity("You must fill this field to see if you're literally Ryan Goslin");
                }
                if (gElement.validity.patternMismatch) {
                    gElement.setCustomValidity("Please reformat your input to prove you're literally Ryan Goslin");
                }
                gElement.reportValidity();
                return;
            } else{
                gElement.setCustomValidity("");
            }
        };
    }

    let radioText = document.querySelector('input[name="frequencyRadio"]:checked');
    document.getElementById('CelebrationTitle').innerHTML = "Congratulations " + gForm.elements[0].value + ", you are literally Ryan Gosling!";
    document.getElementById('CelebrationMessage').innerHTML = "Because your favorite movie is " + gForm.elements[8].value + " and you feel like Ryan Gosling " + (radioText.value).toLowerCase() + ", you are literally Ryan Gosling.";
    let gModal = new bootstrap.Modal(document.getElementById('ConfirmModal'));
    gModal.show();
}

Array.from(gForm.elements).forEach((gElement) => {
    if (gElement.type == "Textbox"){
        addEventListener
    }
});




function clearForm(){
    document.getElementById("GoslingForm").reset();
}

// const textFields = document.querySelectorAll('input[type="text"]');

// textFields.forEach(textField => {
//     textField.addEventListener('input', function(){
//         this.value = textField.value;
//     })
// })

// document.getElementById('')
