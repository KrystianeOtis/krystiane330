"use strict";


function test1() {
    let content = document.querySelector("#input").value;
    document.getElementById("output").innerHTML = content;
    // console.log(content);
}

function test2() {
    let content = parseInt(document.querySelector("#input2").value);
    let sum = content * (content + 1) / 2;
    if (content !== NaN) {
        document.getElementById("output2").innerHTML = sum;
    }

}

function test3() {
    let content1 = parseInt(document.querySelector("#input3").value);
    let content2 = parseInt(document.querySelector("#input4").value);
    if ((content1 !== NaN) & (content2 !== NaN)) {
        let add = content1 + content2;
        document.getElementById("output3").innerHTML = add;

    }
}

//stretch challenges
function getNum(numId) {
    const number = document.getElementById(numId).value;
    const numberFloat = parseFloat(number);
    if (numberFloat !== NaN) {
        return numberFloat;
    } else return 0;
}

function updateTotal(value) {
    const outputElement = document.getElementById('output4');
    outputElement.innerHTML = 'Total: ' + value;
}
// function declaration example
function add2(num1, num2) {
    return num1 + num2;
}
// function expression example
const sub2 = function (num1, num2) {
    return num1 - num2;
};
// arrow function example
const mult2 = (num1, num2) => num1 * num2;

// example of using a callback to pull it all together
function performOperation(operation) {
    // the argument 'operation' is a function...so when we are ready we can call that function in our code below
    const total = operation(
        getNum('input5'),
        getNum('input6')
    );
    updateTotal(total);
}