'use strict';

import { dates, user } from './script.js'

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabase = createClient('https://xjlcatzrsrkkxvxmuzmj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqbGNhdHpyc3Jra3h2eG11em1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMwNTI2MzUsImV4cCI6MTk4ODYyODYzNX0.WabHsVbBlsy11FsfBwEAmR4D1KccSF7WFUQEnypOoFQ');


//Elements
let username = document.querySelector('#username');
let email = document.querySelector('#mail');
let production = document.querySelector('#production');
let city = document.querySelector('#city');


export const callData = async () => {
    let { data: spesen, error } = await supabase
        .from('spesen')
        .select();
    // console.log(spesen)
};


export const storeData = async (sumOfBreakfast, sumOfLunch, sumOfDinner) => {
    console.log('user', user);

    let { data: spesen, error } = await supabase
        .from('spesen')
        .insert({
            id: () => {
            },
            name: username.value,
            mail: email.value,
            production: production.value,
            city: city.value,
            startdate: dates[0],
            enddate: dates[1],
            expenses: user.expenses,
            breakfast: user.breakfast,
            lunch: user.lunch,
            dinner: user.dinner,
        })

};
// store();
callData();