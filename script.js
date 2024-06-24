// Select the element that contains the text to be displayed after delay
const hiddenText = document.getElementById('hiddenText');

// Function to display the hidden text after 10 seconds
function displayTextAfterDelay() {
    setTimeout(function() {
        hiddenText.classList.remove('hidden'); // Remove the 'hidden' class to display the text
    }, 10000); // 10000 milliseconds = 10 seconds
}

// Call the function to start the countdown
displayTextAfterDelay();
