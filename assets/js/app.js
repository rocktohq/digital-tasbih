/*
 *  Subhan Allah Section 
*/

const subhanAllahIncBtn = document.getElementById('subhanAllahIncBtn');
const subhanAllahDecBtn = document.getElementById('subhanAllahDecBtn');
const subhanAllahCounter = document.getElementById('subhanAllahCounter');

// Subhan Allah Increment
subhanAllahIncBtn.addEventListener('click', function () {
    if (subhanAllahCounter.innerText >= 33) {
        alert('Can\'t incerement the value');
    } else {
        subhanAllahCounter.innerText = parseInt(subhanAllahCounter.innerText) + 1;
    }
});

// Subhan Allah Decrement
subhanAllahDecBtn.addEventListener('click', function () {
    if (subhanAllahCounter.innerText <= 0) {
        alert('Can\'t dcerement the value');
    } else {
        subhanAllahCounter.innerText = parseInt(subhanAllahCounter.innerText) - 1;
    }
});


/*
 *  Alhamdulillah Section 
*/

const alhamdulillahIncBtn = document.getElementById('alhamdulillahIncBtn');
const alhamdulillahDecBtn = document.getElementById('alhamdulillahDecBtn');
const alhamdulillahCounter = document.getElementById('alhamdulillahCounter');

// Subhan Allah Increment
alhamdulillahIncBtn.addEventListener('click', function () {
    if (alhamdulillahCounter.innerText >= 33) {
        alert('Can\'t incerement the value');
    } else {
        alhamdulillahCounter.innerText = parseInt(alhamdulillahCounter.innerText) + 1;
    }
});

// Subhan Allah Decrement
alhamdulillahDecBtn.addEventListener('click', function () {
    if (alhamdulillahCounter.innerText <= 0) {
        alert('Can\'t dcerement the value');
    } else {
        alhamdulillahCounter.innerText = parseInt(alhamdulillahCounter.innerText) - 1;
    }
});


/*
 *  Allahu Akbar Section 
*/

const allahuAkbarIncBtn = document.getElementById('allahuAkbarIncBtn');
const allahuAkbarDecBtn = document.getElementById('allahuAkbarDecBtn');
const allahuAkbarCounter = document.getElementById('allahuAkbarCounter');

// Subhan Allah Increment
allahuAkbarIncBtn.addEventListener('click', function () {
    if (allahuAkbarCounter.innerText >= 33) {
        alert('Can\'t incerement the value');
    } else {
        allahuAkbarCounter.innerText = parseInt(allahuAkbarCounter.innerText) + 1;
    }
});

// Subhan Allah Decrement
allahuAkbarDecBtn.addEventListener('click', function () {
    if (allahuAkbarCounter.innerText <= 0) {
        alert('Can\'t dcerement the value');
    } else {
        allahuAkbarCounter.innerText = parseInt(allahuAkbarCounter.innerText) - 1;
    }
});


/*
 *  Reset All Counter 
*/

document.getElementById('resetCounter').addEventListener('click', function () {
    subhanAllahCounter.innerText = 0;
    alhamdulillahCounter.innerText = 0;
    allahuAkbarCounter.innerText = 0;
});