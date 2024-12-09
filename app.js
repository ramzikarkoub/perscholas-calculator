const calScreen = document.querySelector(".calScreen");
const numbers = document.querySelectorAll(".number");

let result = ""; // Keeps track of the current calculation
calScreen.textContent = 0; // Initial screen value

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    const clickedValue = e.target.textContent;

    if (clickedValue === "=") {
      // If "=" is clicked, evaluate the result
      try {
        result = eval(result); // Calculate the result
        calScreen.textContent = result; // Display the result
      } catch {
        calScreen.textContent = "Error"; // Handle invalid expressions
        result = ""; // Reset result
      }
    } else {
      // Append numbers and operators to the result
      result += clickedValue;
      calScreen.textContent = result; // Update the screen
    }
  });
});
