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

// Initialize state variables
let currentDay = 1;
let exercises = [];
let currentExerciseIndex = 0;
let timer = null;

// Function to parse exercises for the day and initialize the timer
function parseExercises(dayPlan) {
    exercises = dayPlan.split(',').map(ex => ex.trim());
    currentExerciseIndex = 0;
    showNextExercise();
}

// Function to show the current exercise
function showNextExercise() {
    const contentDiv = document.getElementById("day-content");
    if (currentExerciseIndex < exercises.length) {
        const exercise = exercises[currentExerciseIndex];
        contentDiv.innerHTML = `<h2>${exercise}</h2>`;
        
        // Start timer if the exercise includes a time
        const timeMatch = exercise.match(/(\d{2}:\d{2})/);
        if (timeMatch) {
            startTimer(timeMatch[1]);
        }
    } else {
        contentDiv.innerHTML = `<h2>You've completed all exercises for Day ${currentDay}!</h2>`;
        stopTimer();
    }
}

// Function to show the fitness plan for a specific day
function showDay(dayNumber) {
    if (dayNumber >= 1 && dayNumber <= 30) {
        currentDay = dayNumber;
        const dayPlan = fitnessPlan[dayNumber - 1];
        document.getElementById("day-content").innerHTML = `<h2>${dayPlan}</h2>`;
        parseExercises(dayPlan);
    } else {
        document.getElementById("day-content").innerHTML = "<h2>Choose a day from 1 to 30!</h2>";
    }
}

// Function to change day dynamically based on button clicks
function changeDay(dayNumber) {
    showDay(dayNumber);
}

// Timer functionality
function startTimer(duration) {
    const [minutes, seconds] = duration.split(':').map(Number);
    let totalTime = minutes * 60 + seconds;
    updateTimerDisplay(totalTime);
    clearInterval(timer);
    timer = setInterval(() => {
        totalTime--;
        updateTimerDisplay(totalTime);
        if (totalTime <= 0) {
            clearInterval(timer);
            currentExerciseIndex++;
            showNextExercise();
        }
    }, 1000);
}

function updateTimerDisplay(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    document.getElementById("timer-display").innerText = `Remaining Time: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function stopTimer() {
    clearInterval(timer);
    document.getElementById("timer-display").innerText = `Remaining Time: 0:00`;
}

// Function to go to the next exercise
function nextExercise() {
    currentExerciseIndex++;
    showNextExercise();
}

// Show the plan for day 1 when the page loads
window.onload = () => showDay(1);
