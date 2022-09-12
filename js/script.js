function calculate_age() {
    /* Check if input value is empty */
    if (document.getElementById("birth_date").value != "") {
        /* Show cancel image to give user possibility to delete all input */
        document.querySelector("img").style.display = "block";

        /* Do correct format automatically */
        if (document.getElementById("birth_date").value.length == 4) {
            document.getElementById("birth_date").value += ", ";
        } else if (document.getElementById("birth_date").value.length == 8) {
            document.getElementById("birth_date").value += ", ";
        }

        /* Calculate each milliseconds new */
        setInterval(function() {
            if (document.getElementById("birth_date").value != "") {
                let date = document.getElementById("birth_date").value;

                // https://stackoverflow.com/questions/13535570/javascript-calculating-age-in-days
                // https://www.youtube.com/watch?v=sJkadt-TJqc
                document.querySelector("h1").innerHTML =
                    "You are " + Math.trunc((new Date() - new Date(date)) / (86400000) / 365) + " years old<br>" +
                    "You are " + Math.trunc((new Date() - new Date(date)) / (86400000) / 7) + " weeks old<br>" +
                    "You are " + Math.trunc((new Date() - new Date(date)) / (86400000)) + " days old<br>" +
                    "You are " + Math.trunc((new Date() - new Date(date)) / (86400000) * 24) + " hours old<br>" +
                    "You are " + Math.trunc((new Date() - new Date(date)) / (86400000) * 1440) + " minutes old<br>" +
                    "You are " + Math.trunc((new Date() - new Date(date)) / (86400000) * 86400) + " seconds old<br>" +
                    "You are " + Math.trunc((new Date() - new Date(date)) / (86400000) * 86400000) + " milliseconds old<br>";
            } else {
                document.querySelector("img").style.display = "none";
                document.querySelector("h1").innerHTML = "Please enter a date!";
            }
        }, 1);
    } else {
        /* If input value is empty */
        document.querySelector("img").style.display = "none";
        document.querySelector("h1").innerHTML = "Please enter a date!";
    }
}

function clearInput() {
    /* Clear input value */
    document.getElementById("birth_date").value = "";
}