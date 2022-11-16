'use strict';

// let table = document.createElement('table');
// let thead = document.createElement('thead');
// let tbody = document.createElement('tbody');

// table.appendChild(thead);
// table.appendChild(tbody);

// document.getElementById('food-checkers').appendChild(table);

// let startDate = document.getElementById('startdate');
// let endDate = document.getElementById('enddate');

//rechnet die Spesen nach den getroffenen Vorgaben aus
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


    document.querySelector('#resultBreakfast').innerHTML = `${sumOfBreakfast} €`;
    document.querySelector('#resultLunch').innerHTML = `${sumOfLunch} €`;
    document.querySelector('#resultDinner').innerHTML = `${sumOfDinner} €`;

    return sumOfBreakfast;
}

const result = button.addEventListener('click', deductions);
let resultOfBreakfast = deductions();

// const getDates = function () {
//     const dates = [];
//     let startDate = document.getElementById('startdate');
//     let endDate = document.getElementById('enddate');



//     return console.log(dates);
// }

// document.getElementById('done').addEventListener('click', console.log(startDate, endDate));


// Returns an array of dates between the two dates
// function getDates(startDate, endDate) {
//     const dates = []
//     let currentDate = startDate
//     const addDays = function (days) {
//         const date = new Date(this.valueOf())
//         date.setDate(date.getDate() + days)
//         return date
//     }
//     while (currentDate <= endDate) {
//         dates.push(currentDate)
//         currentDate = addDays.call(currentDate, 1)
//     }
//     return dates
// }

//Usage
// const dates = getDates(new Date(document.querySelector('#startdate')), new Date(2013, 11, 25))
// dates.forEach(function (date) {
//     console.log(date)
// })

const dateBtn = document.querySelector('#dateBtn');
let startDate = document.querySelector('#startdate').value;
let endDate = document.querySelector('#enddate').value;
let arr = [];

const getDaysArray = function (start, end) {
    let startDate = document.querySelector('#startdate').value;
    let endDate = document.querySelector('#enddate').value;
    let dateArr = [];
    for (let i = startDate; i <= endDate; i.setDate(i.getDate() + 1)) {
        dateArr.push(new Date());
    }
    return dateArr;
};





// const daylist = getDaysArray(new Date(document.querySelector('#startdate')), new Date(endDate));
// daylist.map((v) => v.toISOString().slice(0, 10)).join("")

dateBtn.addEventListener('click', getDaysArray);

document.querySelector('#texttest').innerHTML = startDate;