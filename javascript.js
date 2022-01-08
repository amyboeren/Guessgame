let person = prompt("Welcome! What is your name?");
if (person != null) {
  console.log("Hey " + person + ", Let's play!");
}
function guessNumber() {
    // generating a random integer from 1 to 25
    const random = Math.floor(Math.random() * 25) + 1;
    // take input from the user
    let number = parseInt(prompt("Enter a number between 0 and 25 to start guessing..."));
    // take the input until the guess is correct
    while(number !== random) {
        number = parseInt(prompt("Unfortunately, that is not correct! Let's try again!"));
    }
    // check if the guess is correct
    if(number == random) {
        console.log("Congratulations, you have won the game!" + " Bye, see you!");
    }

  }
// call the function
guessNumber();
