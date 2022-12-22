# MyAgeCalculator
The code calculates the age of a person in different units (years, weeks, days, hours, minutes, seconds, and milliseconds) based on their birth date. It does this by subtracting the birth date from the current date, and then converting the result to the desired unit.

## How the program works
The calculateAge function is called when the user inputs a birth date in the input element with the ID "birth_date". If the input element has a value, the code displays a cancel image that allows the user to clear the input.

The code then checks the length of the input value. If the length is 4 or 8, it adds a comma to the end of the value to ensure it is in the correct format.

The code then uses a setInterval function to continuously calculate and update the age of the person. If the input element has a value, the age is calculated in different units and displayed in the result element with the tag name "h1". If the input element is empty, the cancel image is hidden and a message is displayed asking the user to enter a date.

The clearInput function is called when the user clicks on the cancel image. It simply clears the value of the input element.