// Write a function named {minutesToHours} that receives a number of minutes as parameter and returns a number representing the same amount of time but in hours.


function minutesToHours() {
    let minutes = parseInt(prompt("Enter number of minutes to convert"));
    return (minutes / 60);
}

console.log(minutesToHours());
