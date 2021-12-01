const fs = require('fs');

// 1. How many measurements are larger than the previous measurement?
const question1 = () => {
    fs.readFile('./day1.txt', (err, data) => {
        const depths = data.toString();
        const depthsArray = depths.split('\n').map((i) => Number(i));
        const num = depthsArray.reduce((acc, current, index, array) => {
            if (current > array[index - 1]){
             acc ++
            } 
             return acc
        }, 0)
        return (console.log('The number of measurements that are larger than the previous measurement :', num))
    })
}

question1(); 

// 2. Consider sums of a three-measurement sliding window. 
//    How many sums are larger than the previous sum?

