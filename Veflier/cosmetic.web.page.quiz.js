const numberProgress= document.getElementById("questions-number")
const progress= document.getElementById("progress-bar")
const progressBar=document.getElementById("bar")
const radioInput= document.querySelector('input[type="radio"]')

document.addEventListener('DOMContentLoaded', function () {
    let currentQuestion = 0; // Start with zero answered questions
    const totalQuestions = 5; // Total number of questions, adjust if needed
    const radioGroups = document.querySelectorAll('input[type="radio"]');
  
    // Function to update the progress bar and question number
    function updateProgress() {
      // Update the question number text
      document.getElementById('questions-number').textContent = `${currentQuestion}/${totalQuestions} questions`;
  
      // Calculate the percentage of progress and update the width of the bar
      const progressPercentage = (currentQuestion / totalQuestions) * 100;
      document.getElementById('bar').style.width = `${progressPercentage}%`;
    }
  
    // Function to handle radio button selection
    function handleRadioSelect(event) {
      const groupName = event.target.name; // Get the name of the radio group (e.g., "my-skin-eod")
  
      // Check if this question group (radio button group) has already been answered
      const fieldset = event.target.closest('fieldset');
  
      // If this fieldset hasn't been marked as answered
      if (!fieldset.answered) {
        currentQuestion++; // Increment the question count
        fieldset.answered = true; // Mark this fieldset as answered
        updateProgress(); // Update progress bar and question count
      }
    }
  
    // Add event listeners to each radio button
    radioGroups.forEach((radio) => {
      radio.addEventListener('change', handleRadioSelect); // Trigger progress update when radio button is selected
    });
  
    // Initialize the progress
    updateProgress();
  });
  