//Usage: Use simple conditional statements
//Create an application that prompts the user for a language code ("es", "de", "en", and "fr").
// If they enter one of the four codes, display the translated version of "Hello World" for the given language within the console window. 
//If the user enters anything but those four language codes, the application should default to English. 
//The result should be (for example):
//Hello World translated in French is: Bonjour le monde

const username = prompt('Please tell your name: ')
const language = prompt ('Please enter one of the following lanuage code: es, de, en, fr: ');
if (language === 'es') {
    document.write(`Dear ${username} Hola Mundo!`)
    }   
    else if (language === 'de') {
        document.write(`Dear ${username} Hallo Welt!`)
    }
    else if (language === 'en') {
        document.write(`Dear ${username} Hello World!`)
    }
    else if (language === 'fr') {
        document.write(`Hello ${username} Bonjour le Monde!`)
    }
    else { document.write(`Dear ${username} Hello World!`)

    }
