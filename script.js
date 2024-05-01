// Get the timer display element
const display = document.getElementById("display");
const currentDateElement = document.getElementById("current-date");

// Function to update the timer display
function updateTimer() {
    // Get the current date and time
    const now = new Date();

    // Format the hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zeros if needed
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Update the timer display
    display.textContent = hours + ":" + minutes + ":" + seconds;

    // Format the date
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayOfWeek = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();

    // Update the current date display
    currentDateElement.textContent = dayOfWeek + " " + date + " " + month + " " + year;
}

// Update the timer display immediately
updateTimer();

// Activate the timer by updating it every second
setInterval(updateTimer, 1000);

let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

// Get total tasks, remaining tasks, and completed tasks elements
let totalTask = document.querySelector(".increment1");
let remainingTask = document.querySelector(".increment2");
let completedTask = document.querySelector(".increment3");

function Add() {
    if (inputs.value === "") {
        alert("Please Enter Task");
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value = "";
        newEle.querySelector("i").addEventListener("click", removeTask);

        // Update total tasks count
        totalTask.textContent = parseInt(totalTask.textContent) + 1;

        // Update remaining tasks count
        remainingTask.textContent = parseInt(remainingTask.textContent) + 1;
    }
}

function removeTask() {
    this.parentElement.remove();

    // Update completed tasks count
    completedTask.textContent = parseInt(completedTask.textContent) + 1;

    // Update remaining tasks count
    remainingTask.textContent = parseInt(remainingTask.textContent) - 1;

    // Update total tasks count
    totalTask.textContent = parseInt(totalTask.textContent) - 1;
}
