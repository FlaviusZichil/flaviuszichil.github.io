var requiredCredits = 40;
var myCredits;
var missingCredits;
var calculateButton = document.getElementById("calculate");
var resultBox = document.getElementById("result");
var generateButton = document.getElementById("generateBoxes");
var numberOfBoxes = 0;
var sumOfCredits = 0;

init();

function init() {
    generateButton.addEventListener("click", generate);
    calculateButton.addEventListener("click", calculateCredits);
}

function createBoxes(numberOfBoxes) {
    for (var i = 1; i <= numberOfBoxes; i++) {
        console.log("input" + i);
        createInputBox("input" + i);
    }
}

function generate() {
    numberOfBoxes = document.getElementById("numberOfBoxes").value;
    createBoxes(numberOfBoxes);
}

function createInputBox(elementID) {
    var inputContainerElement = document.getElementById("inputContainer");

    var inputElem = document.createElement("input");
    inputElem.id = elementID;

    var labelElement = document.createElement("label");
    var text = document.createTextNode("Credit");
    labelElement.appendChild(text);

    inputContainerElement.appendChild(labelElement);
    labelElement.appendChild(inputElem);
}

function calculateCredits() {
    for(var i = 1; i <= numberOfBoxes; i++){
        var inputElemValue = document.getElementById("input" + i).value;
        sumOfCredits += parseInt(inputElemValue);
    }
    console.log(sumOfCredits);
}




