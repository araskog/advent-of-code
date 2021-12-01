const fs = require('fs');

// 1. Find the two entries that make up the sum 2020 and multiply them together

 function question1() {
    fs.readFile('./day1.txt', (err, data) => {
        const numbers = data.toString();
        const numbersArray = numbers.split('\n');

         for (var i = 0; i < numbersArray.length; i++) {
            for (var j = 0; j < numbersArray.length; j++) {
                if (i > j) { 
                    if (Number(numbersArray[i]) + Number(numbersArray[j])  == 2020) { 
                        return (console.log('The multiplied two values that makes a sum of 2020:', Number(numbersArray[i]) * Number(numbersArray[j])))
                    }
                }
            }
        }
    })
}

question1(); 


/*  2.  Using the above example again, the three entries that sum to 2020 are 979, 366, and 675. 
        Multiplying them together produces the answer, 241861950.
        In your expense report, what is the product of the three entries that sum to 2020? */

function question2() {
    fs.readFile('./day1.txt', (err, data) => {
        const numbers = data.toString();
        const numbersArray = numbers.split('\n');

         for (var i = 0; i < numbersArray.length; i++) {
            for (var j = 0; j < numbersArray.length; j++) {
                if (i > j) { 
                    for (var k= 0; k < numbersArray.length; k++) { 
                        if (j > k) { 
                            if (Number(numbersArray[i]) + Number(numbersArray[j]) + Number(numbersArray[k]) == 2020) { 
                                return (console.log('The multiplied three values that makes a sum of 2020:', 
                                Number(numbersArray[i]) * Number(numbersArray[j]) * Number(numbersArray[k])))
                            }
                        }
                    }
                }
            }
        }
    })
}

question2();