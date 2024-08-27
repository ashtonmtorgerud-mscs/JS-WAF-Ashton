// alert("Hello! I am an alert box!!");

function changeImage(picture){
    let domImage = document.getElementById('replaceMe');
    switch (picture){
        // case "Chie": domImage.src="https://static.wikia.nocookie.net/megamitensei/images/c/c6/Chie_Satonaka.png";
        case "vsCode": domImage.src="Images/VSCode.JPG"; break;
        case "github": domImage.src="Images/Github.JPG"; break;
        case "jerma": domImage.src="Images/Jerma.png"; break;

    }

}

function changeText(newText){
    let targetText = document.getElementById('changableText');
    targetText.innerHTML = newText;

}

function deleteTheWorld(newWorld){
    document.write(newWorld);
}