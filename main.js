/* 
1. Write a JavaScript program to display the current day and time in the following format */

function DayAndTime() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let date = new Date
    console.log(`today is ${days[date.getDay()]} and the time is ${date.getHours()}:${date.getMinutes()}`)
}

//Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front

function rev(text) {
    let string = text
    let newString = ""
    newString += string[0]
    for (let i = string.length - 1; i > 0; i--) {
        newString += string[i]
    }
    console.log(newString)
}

/*  Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched" */
function randomGuess(Guess) {
    let random = Math.random() * 10
    random = ~~random
    if (Guess == random) {
        return "Good Work"
    } else {
        return `Not matched the number is ${random}`
    }
}
/* Write a JavaScript program to calculate days left until next Christmas. */
function untilChristmas() {
    let date = new Date
    let sum = 0
    for (let i = date.getMonth(); i <= 12; i++) {
        sum += 1
    }
    console.log(sum * 30 - date.getDate())
}

untilChristmas()