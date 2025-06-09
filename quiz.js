// Step 1: Define the function named checkAnswer
function checkAnswer() {
    // Step 2: Declare the correct answer
    const correctAnswer = "4";

    // Step 3: Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Step 4: Check if an option is selected
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Step 5: Compare the user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            document.getElementById("feedback").textContent = "Correct! Well done.";
        } else {
            document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        }
    } else {
        // Step 6: Handle case where no answer is selected
        document.getElementById("feedback").textContent = "Please select an answer.";
    }
}

// Step 7: Add an event listener to the Submit Answer button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
