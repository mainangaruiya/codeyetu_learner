// Sample fitness plan for 30 days
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

// Timer variables
let timerInterval;
let remainingTime = 0; // in seconds

// Function to show the fitness plan for a specific day
function showDay(dayNumber) {
    const contentDiv = document.getElementById("day-content");
    if (dayNumber >= 1 && dayNumber <= 30) {
        contentDiv.innerHTML = `<h2>${fitnessPlan[dayNumber - 1]}</h2>`;
        setTimers(fitnessPlan[dayNumber - 1]); // Set timers based on the day's plan
    } else {
        contentDiv.innerHTML = "<h2>Choose a day from 1 to 30!</h2>";
    }
}

// Show the plan for day 1 when the page loads
window.onload = () => showDay(1);

// Function to change day dynamically based on button clicks
function changeDay(dayNumber) {
    showDay(dayNumber);
}

// Function to start the timer
function startTimer() {
    const timerDisplay = document.getElementById("timer-display");
    if (remainingTime > 0) {
        timerInterval = setInterval(() => {
            remainingTime--;
            updateTimerDisplay(timerDisplay);
            if (remainingTime <= 0) {
                clearInterval(timerInterval);
                alert("Time's up!");
                document.getElementById("start-timer").disabled = false;
                document.getElementById("pause-timer").disabled = true;
                document.getElementById("stop-timer").disabled = true;
            }
        }, 1000);
        document.getElementById("start-timer").disabled = true;
        document.getElementById("pause-timer").disabled = false;
        document.getElementById("stop-timer").disabled = false;
    }
}

// Function to pause the timer
function pauseTimer() {
    clearInterval(timerInterval);
    document.getElementById("start-timer").disabled = false;
    document.getElementById("pause-timer").disabled = true;
}

// Function to stop the timer
function stopTimer() {
    clearInterval(timerInterval);
    remainingTime = 0; // Reset the timer
    updateTimerDisplay(document.getElementById("timer-display"));
    document.getElementById("start-timer").disabled = false;
    document.getElementById("pause-timer").disabled = true;
    document.getElementById("stop-timer").disabled = true;
}

// Function to update the timer display
function updateTimerDisplay(display) {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    display.textContent = `Remaining Time: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Function to set timers for exercises that require them
function setTimers(exercisePlan) {
    const exercises = exercisePlan.split(',').map(ex => ex.trim());
    const timers = exercises.filter(ex => ex.includes(':')).map(ex => ex.split(' ')[0]); // Extract timing parts

    // Clear previous timer display
    const timerDisplay = document.getElementById("timer-display");
    timerDisplay.innerHTML = ''; // Clear previous timer display

    // Initialize remainingTime
    remainingTime = 0; // Reset for the new day's exercises

    // Display timers and set remaining time
    timers.forEach(timer => {
        const timeParts = timer.split(':');
        remainingTime += parseInt(timeParts[0]) * 60 + parseInt(timeParts[1]); // Convert to seconds
    });

    // Update timer display initially
    updateTimerDisplay(timerDisplay);
}
