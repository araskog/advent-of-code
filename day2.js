const fs = require('fs');


/* 
1. Each line gives the password policy and then the password. 
The password policy indicates the lowest and highest number of times a given letter must appear for the password to be valid. 
1-3 a means that the password must contain a at least 1 time and at most 3 times.
How many passwords are valid according to their policies? 
*/

 function question1() {
    fs.readFile('./day2.txt', (err, data) => {
        const passwords = data.toString();
        const passwordsArray = passwords.split('\n');
        var count = 0;
       
        for (var i = 0; i < passwordsArray.length; i++) { 
            var policyString = passwordsArray[i].split(' ')
            var lowestNumber = policyString[0].split('-')[0]
            var highestNumber = policyString[0].split('-')[1]
            var letter = policyString[1].charAt(0);
            var password = policyString[2];

            if (Number(lowestNumber) <= Number(password.split(letter).length -1) 
                && Number(password.split(letter).length -1) <= Number(highestNumber) ) {
                count ++;
            }
            
        }
        return (console.log('The number of valid passwords are: ', count))
    })
}

question1(); 

/* 
2. Each line gives the password policy and then the password. 
Exactly one of the positions must contain the given letter. 
Other occurrences of the letter are irrelevant for the purposes of policy enforcement. 
*/

function question2() {
    fs.readFile('./day2.txt', (err, data) => {
        const passwords = data.toString();
        const passwordsArray = passwords.split('\n');
        var count = 0;
       
        for (var i = 0; i < passwordsArray.length; i++) { 
            var policyString = passwordsArray[i].split(' ')
            var position1 = policyString[0].split('-')[0]
            var position2 = policyString[0].split('-')[1]
            var letter = policyString[1].charAt(0);
            var password = policyString[2];

            console.log('pw1', password.charAt(position1-1))
            console.log(position1)
            console.log('pw2', password.charAt(position2-1))
            console.log(position2)
            console.log('letter', letter)
            console.log(password)

            if (password.charAt(position1-1) == letter && password.charAt(position2-1) !== letter || 
                password.charAt(position1-1) !== letter && password.charAt(position2-1) == letter) {
                count ++;
            }
        }
        return (console.log('The number of valid passwords are now: ', count))
    })
}

question2(); 

