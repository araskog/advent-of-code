const fs = require('fs');

const day1 = () => {
    fs.readFile('./day1.txt', (err, data) => {
        const depthsArray = data.toString().split('\n').map((i) => Number(i));
        
        const sum = depthsArray.reduce((acc, current, i, array) => {
            if (current > array[i - 1]){
             acc ++;
            } 
            return acc;
        }, 0)

        const windowSum = depthsArray.reduce((total, current, i, array) => {
            if (current + array[i+1] + array[i+2] < array[i+1] + array[i+2] + array[i+3]) {
                total ++;
            }
            return total;
        }, 0)

        return (console.log('The number of measurements that are larger than the previous measurement :', sum, 'The number of sums larger than the previous sum are: ', windowSum))
    })
}

day1(); 
