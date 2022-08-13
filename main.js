/* 
day 1
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




// day 2
/* Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50 */
function def(int1, int2) {
    if (int1 + int2 == 50 || int1 == 50 || int2 == 50) {
        return true
    } else {
        return false
    }
}

/* Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string. */
function AddPy(string) {
    let add = string
    if (add[0] == "P" && add[1] == "y") {
        return add
    } else {
        return `Py${add}`
    }
}

/* Write a JavaScript program to remove a character at the specified position of a given string and return the new string */
function removeChr(str, index) {
    let string = str.split("")
    for (var i = 0; i < string.length; i++) {
        if (i == index) {
            string.splice(i, 1);
        }
    }
    return string.join("")
}

console.log(removeChr("hello", 2))