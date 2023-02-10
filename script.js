'use strict';

import { callData, storeData } from "./call_store-functions.js";

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
export let dates = [];

//Arrays 
export let user = {};

//Button selection
const button = document.getElementById('done');

//flatpickr
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
            getDaysArray(selectedDates[0], selectedDates[1]);
            sumOfDays();
        }
        return dates = selectedDates
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
    return daysArr;
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

    const resultOne = Number(expenses).toFixed(2) - Number(sumOfAllDeductions).toFixed(2);
    resultAfterDeductions = Number(resultOne).toFixed(2);
    document.querySelector('#resultAfter').innerHTML = `${resultAfterDeductions} €`;
    document.querySelector('#resultBreakfast').innerHTML = `-${sumOfBreakfast} €`;
    document.querySelector('#resultLunch').innerHTML = `-${sumOfLunch} €`;
    document.querySelector('#resultDinner').innerHTML = `-${sumOfDinner} €`;
    document.querySelector('#resultDeductions').innerHTML = `-${sumOfAllDeductions} €`;
    writeDataInArr(sumOfBreakfast, sumOfLunch, sumOfDinner);

    return console.log(result, resultAfterDeductions), sumOfBreakfast, sumOfLunch, sumOfDinner;
};


//Sum the Dates with the daylie expenses 
export const sumOfDays = function () {
    let expensesDays = (daysArr.length - 1) * 28;
    expenses = expensesDays;
    expensesDays = 0;
    document.querySelector('#expenses').innerHTML = `${expenses} €`;
    return
};

const writeDataInArr = (sumOfBreakfast, sumOfLunch, sumOfDinner) => {
    user = {
        username: username.value,
        email: email.value,
        production: production.value,
        city: city.value,
        expenses: expenses,
        breakfast: sumOfBreakfast,
        lunch: sumOfLunch,
        dinner: sumOfDinner,
    };
};


const logData = () => {
    return console.log(user);
};


//Absenden startet berechnung der abzüge 
const result = button.addEventListener('click', () => {
    // noReload;
    callData();
    deductions();

    storeData();


    // writeDataInArr();
    logData();
    console.log(dates[0]);
    console.log(dates[1]);
});

