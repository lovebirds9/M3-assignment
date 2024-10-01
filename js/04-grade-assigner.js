/*
Collect the a number between 1 and 100 from the user.
Make sure that number is between 1 and 100, if it is not,
 let the user know that only numbers between 1 and 100 are accepted.
If the score is between 60 and 69, write out “You received a D” into the console.
If the score is between 70 and 79, write out “You received a C” into the console.
If the score is between 80 and 89, write out “You received a B” into the console.
If the score is between 90 and 100, write out “You received an A” into the console.
If the score is less than 60, write out “You received an F” into the console.
*/

const grade = prompt('Please enter a number between 1 and 100')

if(grade <= 100 & grade >= 1) {
    if(grade < 60) {
        document.write('You received an F')
    } else if(grade < 70) {
        document.write('You received an D')
    } else if(grade < 80) {
        document.write('You received an C')
    } else if(grade < 90) {
        document.write('You received an B')
    } else {
        document.write('You received an ') 
    }
} else {
    document.write('Only numbers between 1 and 100 are accepted')
}
