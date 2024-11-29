// Sample fitness plan for 30 days (kept as is)
const fitnessPlan = [
    "Day 1: x5 Push-ups, x5 Squats, x10 jumping jacks, x3 crunches, 00:30 mount climber, 00:30 plank, 00:30 cobra stretch",
    "Day 2: x5 Push-ups, x5 Squats, x10 jumping jacks, x3 crunches, 00:30 mount climber, 00:30 plank, 00:30 cobra stretch",
    "Day 3: x5 Push-ups, x5 Squats, x10 jumping jacks, x3 crunches, 00:30 mount climber, 00:30 plank, 00:30 cobra stretch",
    "Day 4: Rest Day",
    "Day 5: x5 Push-ups, x5 Squats, x10 jumping jacks, x3 crunches, 00:30 mount climber, 00:30 plank, 00:30 cobra stretch",
    "Day 6: x5 Push-ups, x5 Squats, x10 jumping jacks, x3 crunches, 00:30 mount climber, 00:30 plank, 00:30 cobra stretch",
    "Day 7: x5 Push-ups, x5 Squats, x10 jumping jacks, x3 crunches, 00:30 mount climber, 00:30 plank, 00:30 cobra stretch",
    "Day 8: Rest Day",
    "Day 9: x5 Push-ups, x5 Squats, x10 jumping jacks, x3 crunches, 00:30 mount climber, 00:30 plank, 00:30 cobra stretch",
    "Day 10: x5 Push-ups, x5 Squats, x10 jumping jacks, x3 crunches, 00:30 mount climber, 00:30 plank, 00:30 cobra stretch",
    "Day 11: x5 Push-ups, x5 Squats, x10 jumping jacks, x3 crunches, 00:30 mount climber, 00:30 plank, 00:30 cobra stretch",
    "Day 12: x5 Push-ups, x5 Squats, x10 jumping jacks, x3 crunches, 00:30 mount climber, 00:30 plank, 00:30 cobra stretch",
    "Day 13: x5 Push-ups, x5 Squats, x10 jumping jacks, x3 crunches, 00:30 mount climber, 00:30 plank, 00:30 cobra stretch",
    "Day 14: x5 Push-ups, x5 Squats, x10 jumping jacks, x3 crunches, 00:30 mount climber, 00:30 plank, 00:30 cobra stretch",
    "Day 15: x5 Push-ups, x5 Squats, x10 jumping jacks, x3 crunches, 00:30 mount climber, 00:30 plank, 00:30 cobra stretch",
    "Day 16: x5 Push-ups, x5 Squats, x10 jumping jacks, x3 crunches, 00:30 mount climber, 00:30 plank, 00:30 cobra stretch",
    "Day 17: x5 Push-ups, x5 Squats, x10 jumping jacks, x3 crunches, 00:30 mount climber, 00:30 plank, 00:30 cobra stretch",
    "Day 18: x5 Push-ups, x5 Squats, x10 jumping jacks, x3 crunches, 00:30 mount climber, 00:30 plank, 00:30 cobra stretch",
    "Day 19: x5 Push-ups, x5 Squats, x10 jumping jacks, x3 crunches, 00:30 mount climber, 00:30 plank, 00:30 cobra stretch",
    "Day 20: x5 Push-ups, x5 Squats, x10 jumping jacks, x3 crunches, 00:30 mount climber, 00:30 plank, 00:30 cobra stretch",
    "Day 21: x5 Push-ups, x5 Squats, x10 jumping jacks, x3 crunches, 00:30 mount climber, 00:30 plank, 00:30 cobra stretch",
    "Day 22: x5 Push-ups, x5 Squats, x10 jumping jacks, x3 crunches, 00:30 mount climber, 00:30 plank, 00:30 cobra stretch",
    "Day 23: x5 Push-ups, x5 Squats, x10 jumping jacks, x3 crunches, 00:30 mount climber, 00:30 plank, 00:30 cobra stretch",
    "Day 24: x5 Push-ups, x5 Squats, x10 jumping jacks, x3 crunches, 00:30 mount climber, 00:30 plank, 00:30 cobra stretch",
    "Day 25: x5 Push-ups, x5 Squats, x10 jumping jacks, x3 crunches, 00:30 mount climber, 00:30 plank, 00:30 cobra stretch",
    "Day 26: x5 Push-ups, x5 Squats, x10 jumping jacks, x3 crunches, 00:30 mount climber, 00:30 plank, 00:30 cobra stretch",
    "Day 27: x5 Push-ups, x5 Squats, x10 jumping jacks, x3 crunches, 00:30 mount climber, 00:30 plank, 00:30 cobra stretch",
    "Day 28: Rest Day",
    "Day 29: x15 Push-ups, x15 Squats, x20 jumping jacks, x10 crunches, 00:40 mount climber, 00:40 plank, 00:30 cobra stretch",
    "Day 30: x15 Push-ups, x15 Squats, x20 jumping jacks, x10 crunches, 00:40 mount climber, 00:40 plank, 00:30 cobra stretch"
];

// Store current exercise index and timer state
let currentExerciseIndex = 0;
let timerInterval;
let remainingTime = 0;
let currentExercise;

// Function to display the current exercise
function showCurrentExercise() {
    const contentDiv = document.getElementById("day-content");
    const timerDisplay = document.getElementById("timer-display");
    const nextExerciseButton = document.getElementById("next-exercise");

    const currentDay = fitnessPlan[currentExerciseIndex];
    const exercises = currentDay.split(", ");

    // Show the current exercise
    if (currentExerciseIndex < fitnessPlan.length) {
        currentExercise = exercises.shift(); // Get the current exercise and remove it from the array
        contentDiv.innerHTML = `<h2>${currentExercise}</h2>`;

        // Check if the current exercise has a timer
        if (currentExercise.includes("00:")) {
            const timerPart = currentExercise.split(" ")[1]; // Extract timer
            remainingTime = convertTimerToSeconds(timerPart);
            updateTimerDisplay(timerDisplay);
            startTimer(); // Start timer for the current exercise
            nextExerciseButton.style.display = "none"; // Hide next button while timer is running
        } else {
            timerDisplay.innerHTML = "No timer needed for this exercise.";
            nextExerciseButton.style.display = "block"; // Show next button for non-timer exercises
        }

        // Display next exercise button if it's not a timer exercise
        if (!currentExercise.includes("00:")) {
            nextExerciseButton.style.display = "block"; // Show next button for non-timer exercises
        } else {
            nextExerciseButton.style.display = "none"; // Hide next button while timer is running
        }
    } else {
        contentDiv.innerHTML = "<h2>Congratulations! You've completed the fitness plan!</h2>";
        timerDisplay.innerHTML = "";
        nextExerciseButton.style.display = "none"; // Hide the button when finished
    }
}

// Convert timer string to seconds
function convertTimerToSeconds(timer) {
    const parts = timer.split(':');
    return parseInt(parts[0]) * 60 + parseInt(parts[1]);
}

// Update timer display
function updateTimerDisplay(timerDisplay) {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    timerDisplay.innerHTML = `Remaining Time: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Start the timer
function startTimer() {
    if (remainingTime > 0 && !timerInterval) {
        timerInterval = setInterval(() => {
            if (remainingTime > 0) {
                remainingTime--;
                updateTimerDisplay(document.getElementById("timer-display"));
            } else {
                clearInterval(timerInterval);
                timerInterval = null;
                showCurrentExercise(); // Automatically go to the next exercise when timer finishes
            }
        }, 1000);
    }
}

// Show the next exercise
function nextExercise() {
    clearInterval(timerInterval);
    currentExerciseIndex++;
    showCurrentExercise();
}

// Initial function call
window.onload = () => showCurrentExercise();
