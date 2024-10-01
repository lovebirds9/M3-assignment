//Usage: Use simple conditional statements
//Create an application that accepts two integers within two separate prompts. 
//Then, display only the larger of the two within the browser window. 
//Don’t forget to handle the fact that the two could be equal.




const num1 = prompt ('Please enter first number: ');
const num2 = prompt ('Please enter second number: ');

if(num1 > num2) {
    document.write(`${num1} is greater than ${num2}`)
} else if (num1 === num2) {
    document.write(`${num1} is equal to ${num2}`)
} else {
    document.write(`${num2} is greater than ${num1}`)
}


