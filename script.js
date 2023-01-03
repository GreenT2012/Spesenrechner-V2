'use strict';

// let table = document.createElement('table');
// let thead = document.createElement('thead');
// let tbody = document.createElement('tbody');

// table.appendChild(thead);
// table.appendChild(tbody);

// document.getElementById('food-checkers').appendChild(table);

//Variables
let sumOfAllDeductions = '';
let daysArr = [];
let resultAfterDeductions = '';
let expenses = '';
let buttonPressed = false;
let username = document.querySelector('#username');
let email = document.querySelector('#mail');
let production = document.querySelector('#production');
let city = document.querySelector('#city');

//Arrays 
const userArr = [];

//Butten selection
const button = document.getElementById('done');


//berechnet die verschiedenen abzüge
const deductions = function () {
    let timesOfBreakfast = document.querySelector('#breakfast').value;
    let timesOfLunch = document.querySelector('#lunch').value;
    let timesOfDinner = document.querySelector('#dinner').value;
    const priceOfBreakfast = 5.6;
    const priceOfLunchDinner = 11.20;

    const sumOfBreakfast = Number(priceOfBreakfast * timesOfBreakfast).toFixed(2);
    const sumOfLunch = Number(priceOfLunchDinner * timesOfLunch).toFixed(2);
    const sumOfDinner = Number(priceOfLunchDinner * timesOfDinner).toFixed(2);
    //parseInt (erste Zahl des Strings)/parseFloat(mit kommastellen) wandelt die Variablen(strings) wieder in Zahlen um damit weiter zu Rechnen, .toFixed rundet auf 2 stellen nach dem Komma
    const result = Number(parseFloat(sumOfBreakfast) + parseFloat(sumOfLunch) + parseFloat(sumOfDinner)).toFixed(2);


    sumOfAllDeductions = result;

    const resultOne = Number(expenses).toFixed(2) - Number(sumOfAllDeductions).toFixed(2);
    resultAfterDeductions = Number(resultOne).toFixed(2);

    document.querySelector('#resultAfter').innerHTML = `${resultAfterDeductions} €`;
    document.querySelector('#resultBreakfast').innerHTML = `-${sumOfBreakfast} €`;
    document.querySelector('#resultLunch').innerHTML = `-${sumOfLunch} €`;
    document.querySelector('#resultDinner').innerHTML = `-${sumOfDinner} €`;
    document.querySelector('#resultDeductions').innerHTML = `-${sumOfAllDeductions} €`;

    return console.log(result, resultAfterDeductions);

}

//Sum the Dates with the daylie expenses 
const sumOfDays = function () {
    let expensesDays = (daysArr.length - 1) * 28;
    expenses = expensesDays;
    expensesDays = 0;
    document.querySelector('#expenses').innerHTML = `${expenses} €`;
    return
};

const writeDataInArr = () => {
    const user = {
        username: username.value,
        email: email.value,
        production: production.value,
        city: city.value
    };
    userArr.push(user);
}

//subtraction of deductions from expenses

// const mathAfterDeductions = function () {
//     const resultOne = ((expenses) - (sumOfAllDeductions));
//     resultAfterDeductions = resultOne;
//     return console.log(resultAfterDeductions);
// };

const logData = () => {
    return console.log(userArr);
}

//Absenden startet berechnung der abzüge 
const result = button.addEventListener('click', () => {
    deductions();
    writeDataInArr();
    logData();
});

