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

        /* Calculate each 500 milliseconds new */
        setInterval(function() {
            if (document.getElementById("birth_date").value != "") {
                let date = document.getElementById("birth_date").value;

                document.querySelector("h1").innerHTML =
                    "You are " + Math.trunc((new Date() - new Date(date)) / (1000 * 60 * 60 * 24) / 365) + " years old<br>" +
                    "You are " + Math.trunc((new Date() - new Date(date)) / (1000 * 60 * 60 * 24) / 7) + " weeks old<br>" +
                    "You are " + Math.trunc((new Date() - new Date(date)) / (1000 * 60 * 60 * 24)) + " days old<br>" +
                    "You are " + Math.trunc((new Date() - new Date(date)) / (1000 * 60 * 60 * 24) * 24) + " hours old<br>" +
                    "You are " + Math.trunc((new Date() - new Date(date)) / (1000 * 60 * 60 * 24) * 1440) + " minutes old<br>" +
                    "You are " + Math.trunc((new Date() - new Date(date)) / (1000 * 60 * 60 * 24) * 86400) + " seconds old<br>";
            } else {
                document.querySelector("img").style.display = "none";
                document.querySelector("h1").innerHTML = "Please enter a date!";
            }
        }, 500);

        // https://stackoverflow.com/questions/13535570/javascript-calculating-age-in-days
        // https://www.youtube.com/watch?v=sJkadt-TJqc
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