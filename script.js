// Get references to the HTML elements
const input = document.querySelector('input');
const buttons = document.querySelectorAll('button');

// Add click event listeners to the buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.innerText;

    if (buttonText === 'AC') {
      // Clear the input field
      input.value = '';
    } else if (buttonText === 'DEL') {
      // Delete the last character
      input.value = input.value.slice(0, -1);
    } else if (buttonText === '=') {
      try {
        // Calculate the result and display it
        input.value = eval(input.value);
      } catch (error) {
        input.value = 'Error';
      }
    } else {
      // Append the button text to the input field
      input.value += buttonText;
    }
  });
});