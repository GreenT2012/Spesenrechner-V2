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
            getDaysArray(selectedDates[0], selectedDates[1]);
            sumOfDays();
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
    return daysArr;
};