//Usage: Use nested conditional statements
//Begin your application by creating a variable called coinFlip and set it equal to a random number. 
//You will have to use a Math method to get this number:

//let randomNum = Math.round(Math.random())

//Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.
//Use a conditional to check the result of the coin flip. If it’s less than a certain number,
 //it will be heads. If it’s greater than a certain number, it will be tails.
//If the result is heads and the user selects heads, display the following message within an alert:
//The flip was heads and you chose heads...you win!
//If the result is heads and the user selects tails, display the following message within an alert:
//The flip was heads but you chose tails...you lose!
//If the result is tails and the user selects heads, display the following message within an alert:
//The flip was tails but you chose heads...you lose!
//If the result is tails and the user selects tails, display the following message within an alert:
//The flip was tails and you chose tails...you win!

const randomNum = Math.round(Math.random()*(100 - 1) + 1)
const choice = prompt('Please enter heads or tails: ')

if(randomNum > 50 & choice === 'heads') {
    document.write('you win!')
} else if (randomNum > 50 & choice === 'tails') {
    document.write('you lose!')
} else if (randomNum < 50 & choice === 'tails') {
    document.write('you win!')
} else {
    document.write('you lose!')
}