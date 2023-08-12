// Create an array of animals. Convert the array to a single string with all animals separated by commas
let animals = ["Dog", "Goat", "Sheep", "Donkey", "Rat."];
let love = animals.toString();
document.getElementById("house").innerHTML = love;

// Declare a string of words separated by hyphens. Convert it to an array of words
let John = "Happy-Days-Are-Coming-soon-Keep-The-Faith.";
let Harp = John.split("-");
document.getElementById("School").innerHTML = Harp;

// Declare a variable with the value as your first name. Create a message using concatenation that greets you
let firstName = "Adexter-theDiv!!!"
let Joy = "My brother from another mother, "+firstName+" Happy seeing you.";
document.getElementById("Town").innerHTML = Joy;

// Combine your favorite hobby with a sentence using string concatenation.
let favorite_hobby = "I enjoy codding";
let sentence = favorite_hobby+" "+"Though it's braintasking and time consuming but if gotten right it gives me satisfaction.";
document.getElementById("Earth").innerHTML = sentence;

// Declare a variable isWeekend as either true or false. If it's the weekend, log "Time to relax!"
 // Function to check if a given day (0: Sunday, 1: Monday, ..., 6: Saturday) is the weekend
 function isWeekend(dayOfWeek) {
  return dayOfWeek === 0 || dayOfWeek === 6;
}

// Function to get the day name based on the day index
function getDayName(dayIndex) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[dayIndex];
}

// Function to check if the entered day is the weekend or a working day
function checkDayForWeekend(event) {
  event.preventDefault();

  // Get the entered day index
  const dayIndex = parseInt(document.getElementById('dayIndex').value);

  // Check if the input is valid
  if (isNaN(dayIndex) || dayIndex < 0 || dayIndex > 6) {
      document.getElementById('result').textContent = "Invalid input. Please enter a number between 0 and 6.";
  } else {
      if (isWeekend(dayIndex)) {
          document.getElementById('result').textContent = `It's the weekend! Time to relax on ${getDayName(dayIndex)}.`;
      } else {
          document.getElementById('result').textContent = `It's not the weekend. ${getDayName(dayIndex)} is a working day.`;
      }
  }
}

// Add an event listener to the form for the submit button
const forms = document.getElementById('weekendForm');
forms.addEventListener('submit', checkDayForWeekend);

// Check if a given number is even or odd. Log the result.
      // Function to check if a given number is even or odd
      function isEvenOrOdd(number) {
        return number % 2 === 0 ? "even" : "odd";
    }

    // Function to check the entered number and display the result
    function checkEvenOrOdd(event) {
        event.preventDefault();

        // Get the entered number
        const number = parseInt(document.getElementById('numberInput').value);

        // Check if the input is valid
        if (isNaN(number)) {
            document.getElementById('result').textContent = "Invalid input. Please enter a valid number.";
        } else {
            const result = isEvenOrOdd(number);
            document.getElementById('output').textContent = `The number ${number} is ${result}.`;
        }
    }

    // Add an event listener to the form for the submit button
    const atlas = document.getElementById('evenOddNumbers');
    atlas.addEventListener('submit', checkEvenOrOdd);

// Declare a variable called username and assign your name to it. Log a message using the username.
  // Declare a variable for the username
  let username = "YourName";  // You can change this to your name

  // Log a message using the username
  console.log("Logging a message with username:", username);

  // Display the current username
  // document.getElementById('usernameDisplay').textContent = username;

  // Function to handle the form submission
  function handleSubmit(event) {
      event.preventDefault();

      // Get the entered name
      const enteredName = document.getElementById('nameInput').value;

      // Update the username
      username = enteredName;

      // Log a message using the updated username
      console.log("Updated username:", username);

      // Display a result message
      document.getElementById('position').textContent = `Your name is  ${username} and you are always welcome to my home.`;
  }

    // Add an event listener to the form for the submit button
    const proceed = document.getElementById('usernameForm');
    proceed.addEventListener('submit', handleSubmit);
    
    // Declare two variables, length and width, to represent dimensions of a rectangle. Calculate and log its area.
       // Function to calculate the area of a rectangle
       function calculateRectangleArea(length, width) {
        return length * width;
    }

    // Function to handle the form submission
    function handleFormSubmission(event) {
        event.preventDefault();

        // Get the entered length and width
        const length = parseFloat(document.getElementById('lengthInput').value);
        const width = parseFloat(document.getElementById('widthInput').value);

        // Check if the input is valid
        if (isNaN(length) || isNaN(width)) {
            document.getElementById('result').textContent = "Invalid input. Please enter valid numbers for both length and width.";
        } else {
            // Calculate the area of the rectangle
            const area = calculateRectangleArea(length, width);

            // Log the area
            console.log("Area of the rectangle:", area);

            // Display the result
            document.getElementById('ensure').textContent = `The area of the rectangle is: ${area}`;
        }
    }

    // Add an event listener to the form for the submit button
    const follow = document.getElementById('rectangleForm');
    follow.addEventListener('submit', handleFormSubmission);

    // Create an array of fruits. Use the .concat() method to add another array of vegetables to it.
      // Function to combine user input (fruits) with an array of vegetables
      function combineFruitsAndVegetables(event) {
        event.preventDefault();

        // Get the entered fruits and split them into an array
        const fruitsInput = document.getElementById('fruitsInput').value;
        const fruitsArray = fruitsInput.split(",");

        // Create an array of vegetables
        const vegetables = ["carrot", "broccoli", "spinach"];

        // Use the .concat() method to combine fruits and vegetables
        const combinedArray = fruitsArray.concat(vegetables);

        // Log the combined array
        console.log("Combined array:", combinedArray);

        // Display the result
        document.getElementById('develop').textContent = "Combined array: " + combinedArray.join(", ");
    }

    // Add an event listener to the form for the submit button
    const upshot = document.getElementById('fruitsForm');
    upshot.addEventListener('submit', combineFruitsAndVegetables);

    //  Declare an array of numbers. Use the .join() method to convert the array into a comma-separated string.

       // Function to convert user input (numbers) to a comma-separated string
       function convertArrayToString(event) {
        event.preventDefault();

        // Get the entered numbers and split them into an array
        const numbersInput = document.getElementById('numbersInput').value;
        const numbersArray = numbersInput.split(",");

        // Use the .join() method to convert the array to a comma-separated string
        const commaSeparatedString = numbersArray.join(", ");

        // Display the result
        document.getElementById('road').textContent = "Comma-separated string: " + commaSeparatedString;
    }

    // Add an event listener to the form for the submit button
    const stem = document.getElementById('numbersForm');
    stem.addEventListener('submit', convertArrayToString);

    // Given an array of fruits, use the .splice() method to remove the second and third fruits from the array.

     // Function to remove the second and third fruits from the array
     function removeFruits(event) {
        event.preventDefault();

        // Get the entered fruits and split them into an array
        const fruitsInputs = document.getElementById('fruitsInputs').value;
        const fruitsArray = fruitsInputs.split(",");

        // Check if there are at least 3 fruits in the array
        if (fruitsArray.length >= 3) {
            // Use the .splice() method to remove the second and third fruits
            fruitsArray.splice(1, 2); // Start at index 1, remove 2 elements

            // Display the original and updated arrays
            document.getElementById('originalFruits').textContent = "Original Fruits: " + fruitsInputs;
            document.getElementById('updatedFruits').textContent = "Updated Fruits: " + fruitsArray.join(", ");
        } else {
            // Display an error message if there are not enough fruits to remove
            document.getElementById('originalFruits').textContent = "Original Fruits: " + fruitsInputs;
            document.getElementById('updatedFruits').textContent = "Not enough fruits to remove.";
        }
    }

    // Add an event listener to the form for the submit button
    const form = document.getElementById('fruitsForms');
    form.addEventListener('submit', removeFruits);