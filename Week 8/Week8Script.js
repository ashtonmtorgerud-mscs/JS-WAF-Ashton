"use strict";



// a)
let timer = document.getElementById("counter");
let i = 1;
setInterval ( () => {
    console.log(i++);
    timer.innerHTML = i;
}, 5000);

// b)

let square = (x) => {
    return x^2;
}

// c)

let form = document.getElementById("myForm");
form.onmousemove = () => alert("hovering");


// 2.  In 3 lines, submit an AJAX request to file.php with a get variable of id=99.  Let the request object be named "xhr".
var xhr = new XMLHttpRequest();
xhr.open("get", "file.php?id"); 
xhr.send(null);

xhr.onreadystatechange = function() {
    if (xhr.status >= 200 && xhr.status < 300){
        console.log("Success! - " + xhr.statusText);
        document.getElementById("data").innerHTML = xhr.responseText;
    }
}

// 3.  What property of the xhr would contain the response text?
    //xhr.responseText

// 4.  Do the same request with Fetch! (just 1 line  ... no need for outputting the response)
let fetchedData = fetch("Week8AssignmentTTT.html");

// 5.  A promise object: promise.

let promise = new Promise((resolve, reject) => {
    if (true){
        resolve("Success");
    } else{
        reject("Failure");
    }
})


promise
.then(msg => "Promise kept")
.then(msg2 => msg2.substr(0,3))
.then(msg3 => console.log(msg3))
.catch(msg=>console.log(msg));

// If the promise resolves, what is the value displayed in the console?

    //That would be Pro, kinda like how I'm a Pro at uh... well one day I'll probably be good at something