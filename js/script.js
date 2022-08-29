function calculate_age(event) {
    if (document.getElementById("birth_date").value != "") {
        if (document.getElementById("birth_date").value.length == 4) {
            document.getElementById("birth_date").value += "-";
        } else if (event.which == 46 || event.which == 8) {
            document.getElementById("birth_date").value -= "-";
        } else if (document.getElementById("birth_date").value.length == 7) {
            document.getElementById("birth_date").value += "-";
        }
        var birth_date = new Date(document.getElementById("birth_date").value);
        var birth_date_day = birth_date.getDate();
        var birth_date_month = birth_date.getMonth()
        var birth_date_year = birth_date.getFullYear();

        var today_date = new Date();
        var today_day = today_date.getDate();
        var today_month = today_date.getMonth();
        var today_year = today_date.getFullYear();

        var calculated_age = 0;

        if (today_month > birth_date_month) {
            calculated_age = today_year - birth_date_year;
        } else if (today_month == birth_date_month) {
            if (today_day >= birth_date_day) {
                calculated_age = today_year - birth_date_year;
            } else {
                calculated_age = today_year - birth_date_year - 1;
            }
        } else {
            calculated_age = today_year - birth_date_year - 1;
        }
        document.querySelector("h1").innerHTML =
            "You are " + calculated_age + " years old<br>" +
            "You are " + Math.trunc((new Date() - new Date(2002, 10, 22)) / (1000 * 60 * 60 * 24) / 7) + " weeks old<br>" +
            "You are " + Math.trunc((new Date() - new Date(2002, 10, 22)) / (1000 * 60 * 60 * 24)) + " days old<br>" +
            "You are " + Math.trunc((new Date() - new Date(2002, 10, 22)) / (1000 * 60 * 60 * 24) / 7 * 24) + " hours old<br>" +
            "You are " + Math.trunc((new Date() - new Date(2002, 10, 22)) / (1000 * 60 * 60 * 24) / 7 * 84) + " minutes old<br>" +
            "You are " + Math.trunc((new Date() - new Date(2002, 10, 22)) / (1000 * 60 * 60 * 24) / 7 * 144) + " seconds old<br>";
        // https://stackoverflow.com/questions/13535570/javascript-calculating-age-in-days
        // https://www.youtube.com/watch?v=sJkadt-TJqc
    } else {
        document.querySelector("h1").innerHTML = "Please enter a date!";
    }
}



// var ageCount = document.querySelector('h1');

// setInterval(function() {
//     ageCount.innerHTML = new Date(2002, 10, 22);
// }, 500);