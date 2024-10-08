"use strict";



// Create an object literal with
//  - an array as a property
//  - a nested object
//  - a method that returns a property
// Output the results of the method to the web browser

let player = {
    name: "Yu Narukami",
    courage: 1,
    diligence: 1,
    academics: 1,
    understanding: 1,
    expression: 1,
    socialLink: {
        Yosuke: 10,
        Chie: 10,
        Yukiki: 8,
        Kanji: 6,
        Teddie: 4,
        Naoto: 5,
        Rise: 9,
        Nanako: 7,
        Adachi: 3,
        Dojima: 4
    }
};

function Persona(inputName, inputArcana, inputUser){
    this.name = inputName,
    this.arcana = inputArcana,
    this.user = inputUser,
    this.strength = 3;
    this.magic = 2;
    this.endurance = 2;
    this.agility = 3;
    this.luck = 2;

    //Private Method
    var GetName = () => {
        return this.user + " is the persona user of " + this.name;
    }

    //Public Method
    this.GetUser = function(){
        return this.user;
    }

    //Priv Method
    this.GetNamePrivileged = function(){
        return GetName();
    } 

}

Persona.prototype.GetetArcana = function(){return this.arcana;}



let izanagi = new Persona("Izanagi", "The Fool", player.name);
let jiraiya = new Persona("Jiraiya", "The Magician", "Yosuke Hanamura");
let tomoe = new Persona("Tomoe", "The Chariot", "Chie Satonaka");
try {console.log(izanagi.GetName());} catch {console.error("Could not access " + izanagi.name + "'s name retrieval function, as it is a private")}
console.log(jiraiya.GetUser());
console.log(tomoe.GetNamePrivileged());


function StoreItem(){
    this.name = null;
    this.year = null;
    this.price = null;
}

function Furniture(){
    this.type = null;
    this.getType = function(){
        return this.type;
    }
    this.printInfo = function(){
        this.name = "Patrick Couch";
        this.year = "1003 BC";
        this.price = "907.12 Pesos"; //Not tax deductible. Considered contraband west of ᛏᚺᛖ ᛋᚺᚨᛗᛖ ᛒᛟᛪ
        return "Product: " + this.year + ", " + this.name + ". For only " + this.price + ", you can take it home today!";
    }
}

function Sofa(inputMaterial){
    this.material = inputMaterial;
    this.getMaterial = () => {
        return material;
    }

}

Sofa.prototype = new Furniture();
Furniture.prototype = new StoreItem();

let newSofa = new Sofa("Aluminium–scandium alloy");
newSofa.type = "Couch";
console.log("Type: " + newSofa.printInfo());




let outputPlayer = JSON.stringify(player);
console.log("JSON version of player: " + "\n" + outputPlayer);
let playerBackIntoObject = JSON.parse(outputPlayer);
console.log("Object version of the player: ");
console.log(playerBackIntoObject);


document.getElementById("outputOne").innerHTML = izanagi.name + ", " + jiraiya.name + ", " + tomoe.name + " | " + tomoe.GetNamePrivileged;

document.getElementById("outputTwo").innerHTML = newSofa.printInfo();

document.getElementById("outputThree").innerHTML = playerBackIntoObject.name;




// Apply a method to an object class using a prototype
// create 3 instances of the object and a method to the browser

// Create a class constructor with public, private, and privileged methods
// console.log output of public method
// console.log attempt to access private method (should show error)
// Create a prototype chain to combine objects
// call method of chained object and show output in browser.

// stringify an object above and output the JSON to the browser.



// import your JSON back into a new object and display a property to the browser.

//      Well, my name is Skyler White yo. My husband is Walter White, yo. Yeah, uhuh... He told me everything
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⢿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡑⢂⠭⣿⡿⣿⣿⢿⣿⢿⡿⣿⣿⣏
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡿⣿⣿⣟⣿⣽⣿⣯⣿⣯⣿⣽⣿⣽⣷⣿⣻⣾⣟⣾⣟⣾⡷⣿⣻⣷⢿⣻⣷⢿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡷⣉⠆⡹⣷⣟⣿⢾⣟⣯⣿⣻⣷⢿⣎
// ⢭⠻⣝⢫⢟⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⡿⣿⡿⣯⣿⣿⣿⣳⣿⣯⣿⣯⣿⣾⢿⣳⣿⣟⣷⣿⢯⣿⢯⣿⢿⣽⣾⢿⣯⣿⣻⡷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⠴⡈⢵⣻⢾⣻⣟⣯⣿⣞⣿⢾⣿⣞
// ⣮⠳⣭⢺⡱⢎⣳⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⣷⣿⣿⣿⣽⡻⣵⢻⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢯⣿⡿⣾⣿⣻⡿⣯⣿⣟⣾⣿⣳⡿⣽⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⠒⡅⠾⣽⣻⣯⢿⣽⡾⣽⢾⣻⣷⣎
// ⢴⡛⣴⢣⠯⣝⢮⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣻⣯⣿⣿⣿⣳⡿⣼⣣⣟⣾⣿⣿⣿⣿⣿⣿⣿⣿⣻⣽⣾⡿⣿⣽⣿⣳⡿⣟⣿⡷⣿⣻⣞⣿⣽⢿⣾⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡷⣉⠲⣹⢯⣷⣻⣟⣾⡽⣯⣟⡿⣾⣝
// ⣧⡝⡲⣝⠺⣬⢳⣿⣿⣾⣿⡿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣽⣾⡿⣽⡳⣿⣽⣾⣷⣿⣿⣿⣯⣿⢿⣽⣯⣿⢾⣟⣷⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿⣿⡷⣡⠣⣝⡿⣞⣷⣻⢾⣽⢷⣯⢿⣽⣎
// ⡶⣩⠳⣜⢫⠖⣯⣿⣿⣟⣿⣿⣿⣿⣾⣿⣿⣿⣿⢿⣷⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⢿⣷⣿⣷⣿⣷⣯⠿⣽⢿⡿⣿⣿⣿⣿⣿⣷⣿⡿⣯⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢷⣡⢓⡮⣿⡽⣞⣯⡿⣞⣿⣞⣯⡿⣎
// ⡵⢣⣛⢬⣓⢻⡼⣿⣿⢿⣿⣿⣿⣽⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣻⣿⣿⣿⣿⣿⡿⣿⡻⣗⣻⣼⡿⣽⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡿⣿⣿⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⠶⣩⢞⣷⣻⢯⣷⣟⣯⡷⣟⣾⣽⡳
// ⢾⡱⢎⡳⢎⡳⢞⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⡿⣿⣿⡿⣿⣻⢿⣟⣿⡽⣟⣿⣟⣾⣳⢯⡟⣵⣻⣞⣿⣿⣽⣷⡿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⡞⣥⢻⢾⣽⣻⢾⡽⣾⣽⣻⣞⡷⣏
// ⢧⡝⢮⡱⢏⡝⣯⢿⣿⣯⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣯⢿⣽⣳⢿⣾⣿⣻⣞⣿⣻⢷⣟⡿⣽⢯⡿⣾⣻⢟⣾⡽⣶⣻⢧⣻⣼⢷⣿⢿⣳⡿⢯⣻⢷⡿⣟⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣾⣿⣿⣿⣿⣿⣿⣿⣗⠺⡄⢯⣻⢾⡽⣯⣟⡷⣯⢷⣯⣟⣧
// ⣮⢜⣣⡝⢮⡝⣺⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣽⣻⢮⡵⣫⣾⢿⣽⣛⠾⣭⣟⡾⣹⢯⡿⣽⣳⢯⡟⣾⢿⣿⡿⣯⢷⣻⢯⣟⡿⣯⢽⡻⣽⢯⣻⣽⡿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣯⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣏⡳⢌⣣⣟⣯⣟⡷⣯⢿⣽⣻⢾⣽⣎
// ⢴⣋⠶⣙⢦⣻⡵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣽⢾⣳⢯⣟⣯⢟⣧⠿⣵⣻⣿⣽⣯⣿⡼⣝⠾⣽⣻⡽⣖⠿⣮⣝⣯⣿⣿⣻⢵⣫⣾⣿⢯⡽⣼⣳⢽⣭⡳⣽⣿⣻⣿⡿⣯⣿⣿⣿⣟⣿⣿⣿⣿⣿⣽⡿⣿⣿⣿⣿⣿⣿⣿⣿⣏⠶⡡⢞⣾⣳⣯⢿⣯⢿⡾⣽⣻⢾⣝
// ⡳⢼⡩⢏⡾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣻⣟⣯⢿⣽⣛⣮⡽⣞⡭⣟⢷⣯⣿⣟⣾⣿⣿⣯⣿⣯⢷⡙⢮⣛⣶⣻⢾⣿⣿⣽⣾⣿⢿⣽⣾⢿⣽⣳⣿⢧⣻⣷⣿⣿⣳⣿⣳⣿⣿⣿⣿⣿⣿⣿⣿⣾⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⠞⣥⢫⣷⣿⢾⣟⡾⣯⢿⡽⣯⣟⡮
// ⠻⡥⢏⡳⡵⣛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣷⡻⣞⡿⣾⣽⣺⠵⣏⡶⣩⢾⡵⣯⣿⣿⣻⡿⣟⣿⣞⣧⢏⣳⢮⡷⢯⡿⣽⣿⣿⣻⣽⣿⣿⣻⣯⣿⣻⡝⣾⣿⣿⣿⣿⣿⣷⣻⣟⡿⣿⡽⣯⢟⣿⣿⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣞⡻⢶⣿⣿⣯⢿⡾⣽⢯⡿⣽⣳⢯⡷
// ⢫⢳⣍⡳⣵⣫⣾⣿⣿⣿⣿⣿⣿⡿⣟⣿⢾⣽⣳⢟⣭⢻⠵⣫⢟⡻⣾⣵⢫⣟⣿⣿⣾⡽⣷⡻⣽⢳⣻⢮⣟⣾⢻⡼⣯⡽⢯⢷⣯⢿⣽⣻⣞⡷⣟⠾⣱⣟⣿⣿⣿⣿⣿⡿⣞⣷⣻⣽⣯⢿⣿⣟⣾⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⡗⣯⣿⣿⣯⢿⡽⣯⢿⣽⣳⢯⣟⡾
// ⣏⣳⡾⣽⣿⣿⣿⣿⣿⣿⣿⡿⣟⣿⢻⣽⢻⣞⡵⣛⢮⣏⠿⣹⢯⣷⣳⣯⣟⡾⣷⢯⡷⣏⡳⣝⠲⣫⢝⠯⡞⡼⣣⢟⡲⡝⢯⡞⡼⢫⡞⡵⢫⢞⡭⢺⡝⣯⢿⡿⣿⣿⣿⢿⡽⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣜⣳⣿⣿⣯⢿⡽⣯⢟⡾⣭⣟⣾⡓
// ⣽⣾⣿⣿⣿⣿⣿⡿⣟⡿⣽⢻⣜⢮⡳⢎⡷⣎⠷⡽⣮⣼⢯⣗⣻⣞⣷⣛⡾⣽⣎⢯⡳⣝⠲⣌⠓⡌⢎⢣⡙⢲⠡⠎⠴⡙⠦⡙⣌⠳⣘⠱⣋⠎⣜⢣⢞⡱⣏⢾⣻⢿⣯⣟⡳⣽⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⢫⢗⣻⢿⡽⣯⣟⡷⢯⣟⡷⡽⣾⣙
// ⣿⣿⣿⣿⣿⣟⡷⣟⣯⣟⢾⡹⣎⢯⣝⡹⣞⡽⣛⠷⣧⣏⡿⣻⢟⡾⣱⣏⠷⣣⢎⢣⠱⢌⠣⢄⠋⡔⠩⡐⢌⠢⡑⢌⠢⡑⢢⠑⡌⢱⡈⢓⠬⡘⢤⢋⠬⡓⡜⢦⣛⢿⡾⣽⢣⢷⣻⡽⣻⢽⡻⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⡏⢎⡵⣯⣟⡷⣯⣟⣻⢾⡽⣳⢿⡬
// ⣿⣿⣿⣿⣿⣿⣿⣽⡳⣏⠾⣱⢫⠞⣭⣳⢽⣺⣽⢻⡶⣝⡳⣏⠿⣜⡳⣌⠳⡐⢎⠂⢇⠌⣂⠣⡘⢄⠣⠘⡄⢃⠌⢢⠑⢌⠢⡑⢌⠢⢌⠡⢒⡉⢆⠩⡒⢩⠜⡣⢞⡹⢞⡽⣻⣞⣯⣷⣯⣿⣽⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿⡜⢢⡝⣷⢯⣟⣷⣫⡽⡾⣝⡷⣻⡜
// ⣿⣿⣿⣿⣿⣟⣿⢾⡽⣞⣳⣥⣛⣮⢧⡽⣎⠷⣭⢳⡝⢮⡱⢎⠳⢬⡑⢢⠡⢍⠢⡉⢆⡘⢠⢁⠒⠌⡰⠡⢘⠠⠊⠔⡈⢆⠢⠑⡌⠒⡌⡘⠤⡘⢌⠱⢨⡁⢎⠔⣡⠊⡥⢫⠵⣻⣯⣟⡿⣿⣻⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡜⡡⢾⣽⣻⣞⣧⡟⣽⣽⢫⣞⣷⡹
// ⣿⣿⣿⡿⣽⢾⣻⢯⡿⣭⡷⣎⠷⣎⠟⡼⣩⢓⡎⢣⠞⡱⡘⣌⠓⢢⠘⡄⠣⠌⢂⠅⡂⢌⠰⠈⡌⢂⡁⠆⡡⠂⠍⠤⠑⡠⢃⠱⢈⠡⢂⡑⢢⠑⡌⣊⠥⡘⢢⠩⣄⠳⢌⢣⡙⣷⢻⣾⢿⣽⣻⢿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡜⢥⣛⣾⣳⣟⣮⣽⡳⣞⠿⣜⣾⡱
// ⣟⣯⢿⡽⢯⣿⣽⣏⢿⣳⠿⣭⢛⡬⣛⠴⡃⢧⡘⠥⢊⠱⡈⠤⡉⠆⡑⡈⢅⠊⡔⠨⢐⡈⠄⣃⠰⢁⠰⢈⠤⠑⡈⠆⡑⠰⡈⠔⡡⢊⠔⡈⢆⡑⢢⠁⠦⡑⡡⢒⠤⠓⡌⢦⠙⡔⢫⢞⡻⣟⡿⣿⣿⣿⣾⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⢤⡻⣷⣻⢮⣷⢳⡟⣽⡻⣝⣶⡙
// ⡿⣼⣻⣽⣿⣿⣿⣾⣯⢯⣛⢬⠳⣘⠤⢃⠍⢢⠘⡄⢃⠆⡑⠢⢑⠨⡐⠡⠌⢂⠔⢡⠂⡄⢃⠄⡒⠌⡰⠈⡄⢃⠜⡠⢁⠃⡜⢠⠑⡨⠐⡡⢂⠜⡠⡉⢆⠱⡐⡉⢆⡙⡌⠦⡙⣌⠣⢎⡱⢍⣚⢱⡚⣿⣽⡾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⢿⣽⣯⣟⣮⢟⡽⣳⢯⣳⠾⣍
// ⣿⣾⢿⣽⣿⣿⣿⣿⣯⠷⣩⢎⡱⠌⡜⢨⠘⡄⢣⠘⢄⠊⡔⠡⠊⠔⡈⢅⠊⡔⡈⢆⠡⡘⢠⠊⢄⠣⡐⢡⠘⢄⠢⡑⠌⢒⠨⠄⡃⠔⡡⢂⠅⡊⠔⡡⢊⠴⣁⠣⢊⠔⣩⢒⡱⢢⡙⢢⠱⢎⡜⡢⢝⡢⣝⡻⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⢯⣷⣟⣾⣱⢯⣻⡵⢯⣳⢻⣌
// ⣿⣿⣿⣿⣿⣿⣿⡿⣞⢧⢃⠖⣌⠚⣄⠣⡘⠤⡁⢎⠠⢃⠔⡡⢉⠢⢑⡈⠒⠤⢑⡈⠆⡑⢂⠅⡊⠔⡨⠐⡌⠢⢑⠨⡘⠄⢣⠘⡄⢣⠐⡡⢊⠴⡉⠔⡉⠆⣄⠣⣡⠚⡄⢦⡑⢣⠜⣡⢋⠖⣬⠱⢣⠳⣌⢷⡹⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⡽⣿⢾⣭⡻⣵⣛⣯⢳⣛⠦
// ⣿⣿⣿⣿⣿⣿⣿⡽⣚⢮⢣⠚⣄⠣⢂⡱⢈⠆⡡⢂⠱⡈⠒⡄⢣⠘⠤⣈⠱⡈⢆⠰⠡⡘⢄⠊⡔⠡⢂⠱⢀⠣⠌⢂⠅⡊⢄⢃⡐⢢⠡⢃⢅⠲⢌⢎⠱⣊⠔⢣⠔⣡⠚⡤⡙⢦⡙⡤⢋⡜⡰⣋⠵⣋⡜⢦⣻⡽⣯⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢯⣿⢾⡝⣧⣻⢼⣫⡽⣣
// ⣿⣿⣿⣿⣿⣿⢯⡳⣍⢎⢧⡙⠤⣃⠣⠰⡁⢎⠰⡁⢆⠡⢃⠜⡠⢉⠒⡄⢣⠐⡌⠢⡑⠰⣈⠒⡈⢆⠡⢂⠡⠂⠜⡀⠢⢁⠂⢆⡘⢄⢃⠎⡘⡌⢆⢎⡱⢤⣋⢦⢫⣔⢫⠖⡝⡶⣹⢶⣩⠲⣅⢣⠳⡜⣬⠳⣽⣻⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣯⢿⣱⢯⢾⣱⢯⡕
// ⣿⣿⣿⣿⣿⣯⣿⡵⡺⡜⢮⡑⢣⠔⣩⠑⡌⢆⠱⡈⢆⠱⡈⠆⡑⠌⢒⡈⠔⣈⠰⢁⠌⡡⠐⡌⢐⠂⡡⢂⠂⠡⠒⠠⢁⢂⠩⡐⢌⠢⠌⣌⠱⡜⢬⢲⡱⣣⠞⠭⡓⢎⡍⢫⡙⢶⡹⢶⣩⢳⡌⡇⢏⠶⣡⢛⡴⢻⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣻⣯⣟⣞⢯⣞⡽⣎
// ⣿⣿⣿⣿⣿⣿⡳⣍⢳⡩⢆⡙⠆⣍⢂⡓⢌⠢⡑⢌⠢⡁⠆⡑⢨⠘⠄⡒⡈⠄⢂⠌⣂⠡⠡⢐⠈⡐⢀⠂⠌⠁⠌⣁⠢⠌⢂⠱⡈⢦⣉⠦⣓⡼⢣⢃⠓⠄⠊⠔⡁⢆⡘⠤⡘⢄⢣⢣⡙⢶⡹⣜⣡⢛⡬⡳⣜⢣⠿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣷⣿⣞⣯⢾⡽⣆
// ⣶⣻⣟⣿⣯⣷⠿⣜⡣⡜⡜⣌⠳⡄⢣⠘⡄⢣⠘⡠⠑⡄⠃⢌⠰⠈⠆⠡⢀⡉⠄⢒⠠⣁⠂⡁⢂⠐⠠⠈⠄⡁⠢⠄⢂⠜⡠⢣⠜⡦⣝⢾⣱⠫⡑⡈⠐⣈⠒⢨⠐⡂⢄⠣⠘⡄⢃⠦⡙⢆⠳⡜⣆⠏⡶⡱⢮⣙⠾⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣻⣞⣯⢿⡌
// ⢯⣿⣿⣿⣿⣿⡿⣜⡱⡑⢎⡔⠣⠜⡡⢎⠰⡁⠎⡐⠡⢄⠉⡄⠢⢉⡐⢁⠂⡐⠈⠄⡡⢐⠠⠐⠠⠈⠄⣁⠂⠌⡐⢌⠢⡘⣔⣣⢟⣵⣫⢎⡕⠂⡅⢢⠑⠤⣉⠆⡱⣈⠆⡥⢃⠜⣈⠆⡙⡌⢳⡘⡔⢫⢖⡹⢆⢯⡻⣼⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢷⣟⣯⡿⣽⣻⡜
// ⢿⣿⣿⣿⣿⣿⣟⢦⢣⡙⢦⡘⠥⢚⠰⣈⠱⡈⢆⠡⢃⠌⡰⠠⢑⠠⠐⡀⠂⠤⢁⠂⡐⠌⡠⢁⠂⢡⠊⢄⡘⠤⡑⢮⣱⢻⡜⣧⡻⢎⠳⢌⠰⠡⡘⠤⡙⢦⠱⣊⠵⣈⠞⡠⢍⠒⡰⢨⠑⡌⠒⡌⠜⡱⢪⡱⢋⠶⣙⢮⡿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣯⣟⡾⣯⣟⠷⣯⢖
// ⣯⢿⣿⣿⣿⣿⡽⣎⡧⣝⢦⡙⣌⢣⢒⡡⢂⡱⢈⠆⡡⢊⠔⡡⢊⠤⠁⡄⠑⡌⢢⠐⠠⠘⢠⠡⠈⡔⡈⠆⣔⢣⣟⣳⢯⡗⣯⠳⣉⠎⡱⢈⠆⡱⣈⠖⡩⢆⡹⢄⡳⢌⢎⡱⡌⢎⡑⢢⡑⢌⠱⡈⢌⡑⢣⡱⣋⠞⣥⢻⡼⣿⣿⣿⣯⣷⣯⣿⣳⣟⣿⣯⣷⢯⣟⡷⣫⢿⣱⢎
// ⡷⢯⣟⡿⣟⣿⣽⣣⣟⣼⣷⣻⢮⣳⣣⡜⣡⢒⡍⡲⢡⢎⡰⢁⠦⡘⠰⣀⠃⢌⠢⡑⢂⠅⢢⢁⢃⠰⢡⢫⡜⣳⢞⣭⢳⡙⠤⢃⠆⡜⢤⢃⠎⡱⢀⣎⣔⣢⡵⣮⡵⣎⣮⡵⣎⢧⡘⡡⠘⡄⢃⠜⠠⢌⡑⢦⡙⡺⣌⢧⣛⢷⣿⣿⣿⣿⣟⣷⢧⡿⣾⣿⣽⣟⡾⣝⣳⢯⡽⡆
// ⣟⠷⣎⢿⣽⣞⣷⡿⣞⠻⡜⢫⠟⣿⣳⣟⣧⢿⣜⡳⣏⢶⡱⣏⢶⣡⠓⣄⠊⢤⠓⡌⠢⠘⡐⢊⠤⢋⢆⡳⣜⡱⢞⢢⢃⡜⣡⢋⡜⡘⢦⣉⠾⣴⢿⣎⡿⣷⣛⢷⡙⢜⡡⢛⡜⢢⠡⣁⠣⠘⡄⢊⠅⢢⠘⠤⡓⢵⢊⡞⣜⡻⣞⣿⣟⢿⣺⣛⢮⢹⣿⣽⣾⡽⣝⢾⣱⢯⢾⡱
// ⣟⡻⣜⢧⡻⣽⣟⡳⡍⢓⡌⠢⠜⡠⠱⢨⡙⢫⠞⡳⣝⢧⢿⡹⣾⡱⣏⠴⣉⠦⡙⠤⢃⠡⠐⡀⠒⡌⢢⡱⢊⡕⢊⠆⡃⢖⡡⢎⡴⡹⢖⠩⠘⡹⢎⡿⣹⢇⡟⠎⡔⡊⠔⢣⠘⡄⢣⠐⡌⢡⠘⡄⢊⠤⡉⢆⡹⢌⡳⡜⣥⠻⣽⣞⡿⡞⢶⡩⢎⡇⢞⣿⡷⣿⡽⣎⣟⢮⣻⠖
// ⣿⡝⣮⢳⡝⣶⣻⢧⡙⢦⡘⢥⢋⠴⣉⢆⡱⢊⢌⡱⢈⠆⣊⠱⢢⠝⣌⠳⡱⢎⡵⣩⢆⠡⠃⠄⡑⢨⠱⣸⠡⢎⢢⠘⡄⢣⡜⣢⠳⡍⢦⡑⢢⡑⢊⠵⡁⢎⡘⠰⢠⠑⡊⢄⠣⡘⠄⡒⠨⢄⠃⡜⠠⢆⡑⠢⢜⢢⢓⡜⣲⢛⣼⣻⠼⣙⠦⡑⢂⠮⡑⢾⡿⣿⣽⣳⢞⡯⣞⢇
// ⣷⢻⡜⣧⣛⠶⣽⣧⡝⢢⡙⠦⣍⠶⡱⢎⡴⣉⠖⡰⢃⠚⡄⢋⠦⡙⢤⠣⡑⢎⡔⢣⠎⡅⢃⡐⠈⢆⠱⢂⢏⡒⢢⠑⡨⢐⡘⢄⠣⡘⠤⠨⢅⡘⢄⠒⠨⠄⢌⠡⢂⠱⡈⠆⡑⢠⠃⡰⢁⠊⡔⠨⡑⠢⢌⠱⢊⠦⣉⠞⣥⢛⡶⣯⠳⣍⠖⡡⢊⠼⣡⠣⣿⣟⣯⣟⣾⡱⣟⠎
// ⣯⢷⡹⣖⢯⡻⣼⣳⣭⢃⠞⡱⢎⡳⡹⣜⡰⣡⢚⡤⣣⣜⣴⣭⡖⣭⢂⢧⣉⠖⣌⢣⢋⡔⠡⢀⠍⡄⢃⠎⢢⡙⢦⠑⢢⢁⠒⡌⢢⠑⡌⡑⢂⠌⠢⠌⡑⡈⠆⡘⠠⢁⠢⢡⠘⡠⢘⠠⠌⢒⠠⢃⠌⡱⡈⢥⢋⠲⣉⠞⡴⢫⡞⡷⡭⢸⡙⠴⣈⠲⣡⠓⡼⣿⣿⡿⣾⢵⣫⠏
// ⡿⣎⢷⡹⣎⢷⣹⢿⣟⢮⡱⣡⢏⡶⣱⣮⡵⢯⢿⡽⣻⣟⣞⣧⢻⠔⡈⢤⣈⠛⡤⢃⠧⡘⠄⣁⠢⠘⡄⢪⢁⠞⠤⣋⠖⣨⠑⡌⢢⠘⡄⠱⣈⠰⢁⠢⠐⡀⠆⡐⠡⠌⡐⢂⠔⡁⢆⡘⠄⡃⠜⡠⠚⠤⡑⢢⢍⠲⣉⢞⡱⢫⣞⡽⡥⠣⡝⠲⣄⠣⠔⡩⢜⣿⣿⣿⣻⢮⡽⢣
// ⣿⡜⣧⢻⡝⣮⢽⣿⣿⢮⡱⢎⢾⣹⡟⢮⡑⠣⢎⠿⣱⢫⠞⣬⠓⡜⢌⠒⠤⣉⠲⡩⢖⡡⠊⢄⠢⡑⢌⢂⠧⡘⢢⠡⢚⠤⣃⠜⡠⢃⠰⠡⡐⢂⠡⢂⠱⠐⢂⠡⡘⢠⢁⠊⡰⢈⠄⡒⢌⠰⡁⠆⡍⢢⠱⢡⢊⠵⣉⠶⣩⢗⡾⣽⣃⠳⡌⠓⠤⢋⠴⡑⢮⣿⣿⣿⢯⣗⣻⣃
// ⣷⡝⣮⢳⣝⢮⣻⢾⣿⣧⠓⣮⡛⢧⡛⢦⣉⠳⣌⢒⡩⢣⡙⢄⠣⡘⠤⣉⠒⡤⢣⢝⡪⠴⡉⢄⠢⡑⢌⠒⡬⢱⢡⠊⣅⠚⡤⢣⠑⡌⢢⠑⡄⢃⠌⢂⠌⡑⢨⠐⠄⡃⢄⠃⡔⢨⠐⡌⢄⠣⡘⠰⣈⠥⢊⡕⣊⠖⣩⠖⡭⣞⣵⣻⡌⠳⡌⣍⠢⢅⢢⣙⣾⣿⣿⣿⣟⣮⢷⣃
// ⢷⡹⣎⠷⣮⢻⡼⣿⣿⣮⡙⢤⡙⢦⡙⢦⢍⠲⠌⣆⠑⢆⡘⢄⠣⡘⠰⣀⠣⢜⡡⠞⣌⢳⠱⡈⢆⠱⡈⢞⡰⢃⢎⡱⢂⠵⡘⢢⡑⢌⠢⡘⡐⠌⢌⠢⢘⠠⡁⠎⡰⢁⠌⢒⡈⢄⠃⡌⢂⠆⡡⢃⠴⡈⢥⠒⣌⠮⣑⢎⡳⣝⢶⣻⡌⢣⠘⠤⡙⢌⠲⣼⣿⣿⣿⡿⣞⣧⣟⢦
// ⣷⡹⣞⡽⣎⢷⣹⣿⣿⣧⡙⠦⡑⢦⡙⡌⢎⡱⠩⢄⠋⡔⡈⢆⡑⢨⠑⡄⢓⠬⣘⡝⡌⢧⡓⠥⢊⠰⣁⠎⡴⢋⢦⠣⡍⢦⢙⠢⡜⢠⠃⡔⢡⠊⡄⢊⠤⢁⠆⡑⠰⡈⢌⠂⡔⣈⠒⠌⢢⠘⡄⢣⢂⡍⢦⡙⣤⢛⡜⢮⣱⢫⡞⣧⣏⡄⢃⠆⡱⣈⢷⣿⣿⣿⣿⢿⡽⣞⣾⣃
// ⡶⣝⢮⡳⣝⡞⣧⣿⣿⣧⡙⢦⡙⢤⠒⣉⠆⣒⠉⢆⠩⡐⢡⠂⡜⢠⠃⡜⢨⢒⡡⢞⡸⢣⡝⣘⠢⡑⠤⢋⠴⣋⠶⣙⡜⢦⢍⠲⣁⢣⠘⡄⢃⠒⡌⢢⠘⡄⢊⠔⡡⠒⡠⢁⠆⡐⢌⡘⢄⠣⡘⡄⢣⡘⢦⡑⣎⠞⣜⢣⢎⢧⣝⣳⣿⣾⣿⣾⣷⣿⣿⣿⣿⡿⣽⢯⡿⣽⢶⡍
// ⣟⣾⣳⣽⣮⣽⣞⣿⣿⣷⡙⢦⡉⢦⢉⢆⠚⠤⡉⢆⠱⣈⠥⠚⡌⣡⠚⡄⢣⠢⡑⢎⡵⢫⡜⢢⠱⠌⡜⣡⠚⣤⠛⡴⣙⢎⢮⡱⡘⢆⢣⠘⡄⢣⠘⡄⢣⠘⡄⢊⠔⢡⠂⣁⠢⠌⡐⠰⡈⢆⠱⢨⢅⡚⣤⠹⣌⡻⢌⡓⣎⠞⣼⣹⣿⣿⣿⣿⣿⣿⣿⣿⢯⡿⣽⢾⣽⣻⢾⡱
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡏⢦⡙⢤⠋⡤⢋⠆⡍⢢⢑⡰⢊⠱⡰⢁⢎⡘⡄⠣⠜⢢⡙⢧⠜⣡⢋⠜⡰⢁⠏⡔⣋⠖⣩⠞⣢⢓⡭⣚⠤⡋⢔⠣⡘⢄⠣⡘⢄⠣⡈⠆⡘⢀⠂⠜⢠⠃⡜⠠⢍⡒⣌⠲⣌⡳⣍⠞⣡⠞⣬⢛⠶⣹⣿⣿⡿⣿⣿⣿⣿⢯⣿⡽⣯⣟⣾⡽⣯⣓
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡽⢦⡉⢦⠙⡤⢃⡜⠰⡁⢆⠢⢅⠓⡌⠥⢒⠰⣈⢑⠊⡥⣙⠎⡜⡰⢈⠜⢠⠉⡜⠰⡡⢎⡑⢎⡑⢎⡔⢣⢳⣉⢆⠣⠜⡠⢃⠜⡠⢂⠱⠠⢁⠊⢌⡘⢄⠊⡔⡉⢦⡘⢤⡛⣴⢫⡜⣩⢆⡹⡰⣋⢾⣱⣿⣿⣟⣿⣿⣿⣿⣻⣾⣟⣷⣻⣯⣟⣷⢣
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢧⡚⢤⢋⠴⠡⣌⠱⡘⢄⠃⢎⡘⠤⠓⡌⠒⡌⢢⠉⡴⢡⡋⠴⣁⠂⢌⠀⢂⠌⡡⠱⢌⠒⡌⠰⢊⠔⡃⢦⡙⡎⢆⠣⡑⠌⡰⠠⢁⠢⢁⠂⡡⢂⠌⢢⠑⡤⢙⠤⣙⠦⣝⡲⢣⢎⡱⢊⡴⢣⡙⢦⢏⣿⣿⣿⣿⣿⣿⣿⣷⣻⣾⣳⡿⣯⣟⣾⢣
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡕⡎⣌⠲⡑⠤⢃⡜⠨⠜⢢⠘⡰⠡⢌⠱⡈⢄⠣⡜⡱⢌⢣⡐⢌⠢⡘⡀⢆⠡⣃⠎⡜⣰⣉⠖⡬⡘⢤⠓⡽⢨⡑⢌⠢⡑⢌⢂⠡⢂⠡⡐⢡⠊⡄⢣⠜⣌⡚⣬⢻⣌⠳⣡⠎⡔⢣⠜⣡⠞⣱⢺⣿⣿⣿⣿⣿⣿⣿⣿⣷⣯⣷⣿⢿⣽⢾⣣
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡲⢌⡱⡘⡰⢃⢌⡑⡊⢅⠊⡔⢡⠊⡔⠡⢌⠢⡱⢍⡺⠰⡌⢆⠣⡔⡱⢌⡲⣡⠞⡱⠣⢌⡹⢰⣉⢦⡛⣌⠣⡘⠤⠑⡨⢐⠨⡐⢂⠥⠘⡄⢣⠘⣆⠚⣤⢹⢎⡳⢌⠳⣄⠫⡜⣡⠚⡥⢚⡥⢯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⢿⣾⣿⣯⢿⡖
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣎⠴⣡⠱⢌⡂⠖⡉⢆⠱⡈⢆⠱⣈⠱⡈⢆⠹⡌⣕⠫⡜⡭⣓⡹⢌⢇⠳⡡⢎⢡⢃⠦⡱⢃⠞⡤⠓⡄⠣⢘⡀⠃⡔⠈⠤⠑⡌⢢⠑⡸⢄⢫⠰⣩⢲⡹⢎⡵⣉⠖⡬⢱⡘⢤⢋⠴⣋⡜⣳⣿⣿⣟⣿⣿⣿⣿⣿⢿⣽⣿⣻⣯⡿⣟⡞
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡖⡥⢚⠤⣃⠝⡌⢆⡱⢈⠆⡱⢠⢃⠜⡠⠣⢜⢢⡛⡼⣱⠣⡜⢌⡊⢥⡑⢌⠢⢍⠲⣁⠋⠴⣀⠣⢘⠠⡁⠄⢃⠤⢉⢂⠱⣀⠣⢌⠱⡌⢆⡳⣑⢮⡱⣋⢖⡡⢚⠴⢡⠚⡤⢋⠖⣡⠞⣽⣟⣿⣻⣿⣿⣿⣿⢿⣿⣻⣾⣿⢿⣽⡿⣭
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣍⢖⣡⠚⣌⠲⢄⡃⢆⡑⢂⠎⡰⢁⢃⠎⡔⣡⠓⠤⠓⡌⢢⠘⡄⢎⠢⡉⠆⡱⠠⢉⠆⡐⠄⡃⠔⡈⠌⢂⠔⠡⡈⠔⡠⢃⡌⣒⠩⢆⠵⣊⠶⣱⡍⢦⠱⣉⢆⠣⢍⠴⣉⠚⡴⢫⣟⢮⣿⣻⣿⣿⣿⣿⣿⣻⣽⣷⣿⡿⣯⢿⡖
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣛⡴⣩⠖⣌⢆⡘⢌⡒⡡⢎⡐⣊⠔⢢⠉⢆⠱⠐⡂⢡⠘⡄⢣⠐⠡⠠⠑⣀⠢⠌⡐⠈⡔⠡⠈⡄⠌⢂⡁⠎⡐⢡⠒⡤⢋⠼⣌⢣⣛⡴⡙⢆⡓⠤⡊⢜⢂⠎⡴⣉⢞⡽⣏⠮⣷⣿⣿⣿⣿⣿⣟⣿⣿⢾⣿⣟⣿⣻⡭
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣞⡵⣻⢜⠢⠜⡠⢎⡑⠦⣑⠰⢊⠅⡊⠔⡈⠆⡑⠠⢃⠜⡠⢈⢁⠂⠥⢀⠂⠔⡈⠡⠐⠠⡁⠰⢈⠔⣈⠦⣙⠦⡙⡰⣉⠶⣈⠷⣘⠶⣉⠦⣉⠖⡉⢆⠎⡸⢰⠱⣮⢟⡬⢳⠽⣷⣛⢿⣿⣿⣿⣿⣿⣻⣿⣿⣽⡿⡵
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣳⢫⡜⣡⠑⡢⡙⢦⠡⠓⡌⢢⠑⣈⠰⠠⣁⠣⢌⠢⡁⢆⠢⠜⡰⣈⠒⣌⠰⡁⢎⢡⠰⢡⢎⠲⣌⠞⡡⢆⠱⡰⢡⠞⡌⡞⣥⠛⡤⢓⡰⡘⢌⡂⢎⡱⢃⡿⣜⡣⣜⢣⣛⡿⣞⡬⠹⣿⣿⣿⣿⣿⣿⣿⣾⣿⡳
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⢻⢥⡫⣔⠩⢆⡍⢣⠜⡤⢃⡔⢢⢡⡐⢢⠜⡰⡑⢎⡱⣉⠖⡡⢍⢢⠱⣘⢢⡑⢎⡱⢎⠳⡘⢬⠑⡌⢢⡑⢣⢎⡱⢚⡔⡫⢔⢣⢢⠑⠦⡘⢢⡱⢫⣞⠧⣑⠮⡱⢎⣽⣧⢯⡑⢆⠻⣿⣿⣿⣿⣷⡿⣿⡳
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡮⡵⢎⡝⢦⡸⣱⢚⡴⢋⡼⢡⢖⡹⢆⢯⡱⣙⢮⡱⢎⡞⣱⢋⢮⠱⣊⠤⡙⣌⠲⣉⠖⡩⢆⠱⣈⠥⣊⠕⣪⠔⡫⠴⡙⡌⢆⡃⢎⠱⡌⢥⣓⢯⢏⡚⢤⠓⣭⢚⡼⣻⣟⡿⣄⠣⢌⢻⣿⣿⣿⣿⣿⡳
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣫⢞⣥⠳⡥⢯⣜⡳⣜⠳⣎⠵⣋⠶⡹⠜⢦⡙⢦⡙⢤⢋⠆⡓⢌⠢⠱⣌⠱⡌⢎⡱⢌⠒⣌⠲⡡⢎⡱⢊⡕⢣⡙⡜⢢⠱⣈⠖⣩⠲⣭⠟⡬⡑⢎⡱⢢⢍⠶⣻⢿⣽⢯⡖⣤⢢⡙⣿⣿⣿⣿⡷
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡾⣜⢧⡝⡺⢴⠳⣌⠳⣌⠳⣌⠲⣅⢋⠦⣙⠢⣉⠒⡌⢢⠑⡌⡜⡱⣈⠳⣘⠢⢒⡌⢣⡌⢣⠕⡪⢔⠣⡜⣡⠚⣌⠱⢢⡑⢎⡴⣻⢭⡋⢴⡉⢦⡑⢣⢎⠳⡭⣟⡾⣿⡽⣆⠣⣝⢺⣽⣿⣿⡳
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣎⡷⣭⢳⢫⡜⡱⣌⠣⢆⠳⡌⢎⠴⡡⢓⠤⣃⠜⡤⢣⠜⡰⡑⡌⡱⢄⡋⠖⣌⠣⡜⡡⢎⡑⢪⠱⡘⢤⢋⠴⣉⠦⡙⢦⣽⢳⠣⢜⢢⠙⡤⡙⢆⢎⡱⢣⡻⣽⢯⣿⣜⠳⡌⢣⢟⣾⣳⢣
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣭⢳⣏⡼⡱⢎⡳⡩⢖⡩⢎⢲⢡⢋⠖⣡⠚⡔⢣⢎⡱⡘⠴⡑⢎⡜⡩⢆⠳⢌⡑⢢⢉⠆⡱⣉⠲⢌⡲⢡⢎⡝⣾⡙⢦⢙⣂⠣⣍⠒⡍⢎⠦⡑⢧⡹⣭⢛⡷⣎⡟⣬⠃⢾⣹⢯⡧
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢯⡷⣎⢷⡹⣎⠵⣣⢏⠶⣩⢖⡣⢎⡚⡥⢛⡜⢥⠚⡴⣉⠖⣩⠒⡬⢑⡌⠎⡔⢨⠁⢎⡘⠤⢡⠓⡌⢶⡩⢞⣼⠧⣙⠰⣊⠤⠓⡬⢱⡘⣌⠲⣉⠖⡱⣇⢏⡼⢯⡜⢦⡋⠖⣯⣻⠵
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢯⡟⣵⢯⣳⠧⣭⢓⢧⢺⡱⢣⢎⡱⢣⡙⡔⢣⡘⢢⢉⠔⠤⠩⢄⠣⡐⢣⠘⡰⢈⠆⡉⢆⡘⠔⣣⠙⡜⢦⣝⡿⢎⡱⢌⠣⡔⢣⡙⡔⢣⡘⢤⠓⣌⠚⡵⣊⠮⣜⡷⣌⠣⡙⡜⠲⣯⢛
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣽⢋⣾⡝⢧⣏⠿⣔⢫⢎⢣⡍⢳⢌⠲⣁⠒⡌⢢⠘⡄⢊⠜⡠⠍⢢⠑⡌⢢⠑⡄⢣⠘⡐⢢⠘⡜⡤⢛⣜⣳⡾⡙⢦⠑⡬⠑⡌⠦⡱⢌⠣⡜⢢⡙⢤⢋⠖⣭⠓⡮⣝⢾⡠⠑⡄⠡⢘⠣
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣝⢮⡽⢮⣙⠶⣊⠿⣭⡚⣬⠒⣌⠣⢎⡑⢆⡱⢈⠆⡱⢈⡒⢌⠰⡁⠆⡡⠘⡄⢣⠈⢆⠱⡈⠆⣍⠲⣩⢳⣞⡷⢭⡑⣊⠱⡂⣍⠒⡥⢑⠪⡱⢌⡱⠘⢦⡉⢞⠴⣋⠶⣹⢮⡱⢃⡔⢁⠈⡱
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣋⠷⣩⣾⡙⢧⢎⡽⣩⢟⣳⡽⢦⡹⢌⠳⡌⡜⢢⠆⢣⠜⡰⢡⡘⢄⠣⡐⢡⢂⠱⡈⢆⡉⢆⠱⣨⠱⣌⢳⣭⡿⣞⠱⢢⠱⡈⡕⠒⡤⠩⡔⡉⠦⣑⠢⢅⡋⢦⡙⢬⢚⡴⣹⣬⢳⡝⢦⠘⡄⢂⠱
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⡱⢠⢘⡽⢦⡙⣎⠞⣴⢋⡾⣽⡏⢷⡹⣌⠳⡌⡜⡡⢎⠥⣊⠱⠢⢜⡈⢆⡑⠢⢌⠢⡑⢢⠘⡤⢓⢤⠳⣜⣳⣯⠳⣌⠣⣃⠅⡣⢌⠓⡰⢃⡒⣉⠖⣠⠋⡴⢉⠲⡘⢦⢩⢞⡷⣯⢿⡾⣧⠎⡔⡂⠰
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⡥⢣⠑⡆⠧⡘⢦⡙⣬⠛⡴⣋⣾⣿⡙⢮⡱⢏⠶⡱⢌⡱⢌⡒⢡⢃⡍⡒⣌⠒⠬⡑⣊⠱⢨⡑⢎⠴⣩⢎⡿⣽⢋⢆⠳⡄⢳⠠⢣⠑⡌⢎⠱⢌⠢⢅⠪⢄⡓⡰⣉⠖⡩⢆⡹⢎⣿⡽⣯⢿⣽⢣⡙⢦⡡
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⢣⠞⡐⠤⡹⣌⠱⡐⠤⠙⡤⢛⡴⣫⣿⢾⡑⢢⠝⣭⠳⡝⣦⢱⠢⡍⢆⢣⠰⣡⠢⡙⢦⠱⡌⡱⢣⡜⣎⣳⡵⣏⠛⡤⢋⡜⢢⡙⠤⢋⠴⣉⠲⢌⢊⠦⣉⠦⣉⠒⣌⠱⡄⢫⠔⡣⢜⡻⢾⡽⣯⣟⣾⢧⡘⣣⠕
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⡟⢧⡞⢣⠐⡰⢸⡑⠠⣃⠜⡠⢁⠘⣱⣞⣿⡽⣯⠜⠠⢛⡴⣋⡜⢲⢋⢷⣘⡎⢦⡓⣤⢣⡝⣢⢳⣜⣱⡳⢾⡙⢧⡙⢤⠋⡔⢣⡘⠆⡥⢋⡜⠰⡂⡕⣊⢌⠲⡐⡒⢌⡑⢢⠱⢌⡃⢎⡱⢪⡽⢯⣟⣷⣻⢾⡧⠱⣌⢏
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢟⠋⢆⡱⣝⢧⡛⢆⡳⣌⠣⡐⢁⠦⡉⠔⠀⢦⣹⢾⣻⣽⢲⡉⢢⠁⡞⣥⠚⣥⠚⣆⠳⡘⢧⡙⣎⠷⣙⠧⣋⠜⣢⠙⡆⡍⢦⢘⢢⡙⢌⠦⢡⢋⡔⠣⣌⠣⣑⠒⣌⢢⠃⡵⠘⡤⢉⠦⣉⠦⡙⢢⠱⣣⢟⡿⣞⡷⣯⢿⣹⠱⡘⣎
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢏⡵⢊⡘⡴⣫⠟⢦⡙⣬⡳⢏⡔⡈⢆⠢⡙⢌⡞⣥⢏⡾⣻⣌⣇⠒⠠⢑⡘⢦⡛⡤⣋⡔⢣⡙⢦⠱⣌⢚⡱⣚⢤⢋⠴⣉⠖⣉⠆⣎⠒⡜⣌⠲⡡⢎⠔⣣⠢⡱⠌⢎⡰⠢⢍⠔⢣⢘⠢⢱⡐⠦⡙⢦⡙⡼⢯⡽⣯⢿⡽⣯⠷⣁⠳⣌
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢹⡜⢣⠞⣴⣸⢳⣏⡙⢦⡹⣶⡙⢣⢞⡡⢂⠱⣈⢾⣱⢮⣙⣶⣿⢾⡞⠠⢁⠢⠌⢣⢳⡑⡖⣌⠣⡜⢢⠓⣌⠲⣡⠓⣎⠭⣒⠥⣚⠤⣋⠴⣉⠖⣌⢣⡑⢎⡜⢤⠣⡑⢎⠆⠥⠓⣌⠚⠤⢃⠍⡆⢜⢢⡙⢤⢣⡙⡬⡹⡝⣯⢿⣽⡓⠤⢃⠖