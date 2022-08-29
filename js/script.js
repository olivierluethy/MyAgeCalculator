var birth_date = new Date('10/22/2002');

var years, months, days, hours, minutes, seconds;
var ageCount = document.querySelector('h1');

setInterval(function() {
    ageCount.innerHTML = calculate_age(new Date(2002, 10, 22));
}, 500);

function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}