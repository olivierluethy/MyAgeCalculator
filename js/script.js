function calculateAge() {
  // Get reference to input element, cancel image, and result element
  const input = document.getElementById("birth_date");
  const cancelImage = document.querySelector("img");
  const resultElement = document.querySelector("h1");

  if (input.value) {
    // Show cancel image if input has a value
    cancelImage.style.display = "block";

    // Ensure the date is in the correct format
    if (input.value.length === 4) {
      input.value += ", ";
    } else if (input.value.length === 8) {
      input.value += ", ";
    }

    setInterval(function() {
      if (input.value) {
        // Calculate age in different units
        const date = input.value;
        const ageInMilliseconds = new Date() - new Date(date);
        resultElement.innerHTML = `You are ${Math.trunc(ageInMilliseconds / (86400000) / 365)} years old<br>
          You are ${Math.trunc(ageInMilliseconds / (86400000) / 7)} weeks old<br>
          You are ${Math.trunc(ageInMilliseconds / (86400000))} days old<br>
          You are ${Math.trunc(ageInMilliseconds / (86400000) * 24)} hours old<br>
          You are ${Math.trunc(ageInMilliseconds / (86400000) * 1440)} minutes old<br>
          You are ${Math.trunc(ageInMilliseconds / (86400000) * 86400)} seconds old<br>
          You are ${Math.trunc(ageInMilliseconds / (86400000) * 86400000)} milliseconds old<br>`;
      } else {
        // Hide cancel image and show message if input is empty
        cancelImage.style.display = "none";
        resultElement.innerHTML = "Please enter a date!";
      }
    }, 1);
  } else {
    // Hide cancel image and show message if input is empty
    cancelImage.style.display = "none";
    resultElement.innerHTML = "Please enter a date!";
  }
}

function clearInput() {
  // Clear the value of the input element
  document.getElementById("birth_date").value = "";
}
