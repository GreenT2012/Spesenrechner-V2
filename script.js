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


//Butten selection
const button = document.getElementById('done');

//flatpickr + config
let fp = flatpickr('#dateInput', {
    dateFormat: "d-m-Y",
    mode: 'range',
    onChange: function (selectedDates, dateStr, instance) {
        //setting back the variables
        if (expenses != 0) {
            expenses = 0;
            daysArr = [];
        }
        //if selected dates is 2 long
        if (selectedDates.length == 2) {
            let dates = getDaysArray(selectedDates[0], selectedDates[1]);
        }
    }


});

//Get Dates in an Array
let getDaysArray = function (start, end) {
    for (
        let dt = new Date(start);
        dt <= new Date(end);
        dt.setDate(dt.getDate() + 1)
    ) {
        daysArr.push(new Date(dt));
    }
    return daysArr, sumOfDays();
};

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

    const resultOne = expenses - sumOfAllDeductions;
    resultAfterDeductions = resultOne;

    document.querySelector('#resultAfter').innerHTML = `${resultAfterDeductions} €`;
    document.querySelector('#resultBreakfast').innerHTML = `-${sumOfBreakfast} €`;
    document.querySelector('#resultLunch').innerHTML = `-${sumOfLunch} €`;
    document.querySelector('#resultDinner').innerHTML = `-${sumOfDinner} €`;
    document.querySelector('#expenses').innerHTML = `${expenses} €`;
    document.querySelector('#resultDeductions').innerHTML = `-${sumOfAllDeductions} €`;

    return console.log(result, resultAfterDeductions);

}

//Sum the Dates with the daylie expenses 
const sumOfDays = function () {
    let expensesDays = (daysArr.length - 1) * 28;
    expenses = expensesDays;
    expensesDays = 0;
    return
};
//subtraction of deductions from expenses

// const mathAfterDeductions = function () {
//     const resultOne = ((expenses) - (sumOfAllDeductions));
//     resultAfterDeductions = resultOne;
//     return console.log(resultAfterDeductions);
// };





//Absenden startet berechnung der abzüge 
const result = button.addEventListener('click', deductions);