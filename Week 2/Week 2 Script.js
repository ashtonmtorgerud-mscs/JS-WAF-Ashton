//Data is declared at the top to make them accessible to the entire script
const usdToYen = 142.33;
const stableUsdToYen = 150;
let legacy = false;


const calculateButton = document.getElementById("calculateButton");
const legacyButton = document.getElementById("legacyCheckbox");

calculateButton.addEventListener("click", ConvertUSDToYen);

function ConvertUSDToYen(){
    let usd = parseFloat(document.getElementById('inputUSDBox').value);
    let success = true
    !isNaN(usd) ? success = true : success = false;
    legacyButton.checked ?  usd *= stableUsdToYen : usd *= usdToYen ;


    success ? document.getElementById('Total').innerText = "Total: ¥" + Math.floor(usd) : document.getElementById('Total').innerText = "Please input a number";
}