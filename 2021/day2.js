const fs = require('fs');

const day2 = () => {
    fs.readFile('./day2.txt', (err, data) => {
        const depthsArray = data.toString().split('\n');

        const down = depthsArray.filter(step  => step.startsWith("down")).reduce((acc, current) => acc += Number(current[5]), 0)
        const up = depthsArray.filter(step  => step.startsWith("up")).reduce((acc, current) => acc += Number(current[3]), 0)
        
        let aim = 0;
        let horizontal = 0;
        let depth = 0;

        depthsArray.forEach((current) => {
            if (current.startsWith("forward")) {
                horizontal += Number(current[8])
                if (aim != 0) {
                    depth += (aim * Number(current[8]))
                }
            } 
            else if (current.startsWith("down")) {
                aim += Number(current[5]);
            } 
            else if (current.startsWith("up")) {
                aim -= Number(current[3]);
            } 
        })

        return (console.log('The number of measurements that are larger than the previous measurement :', (horizontal * (down - up)), 'The number of measurements that are larger than the previous measurement :', (horizontal * depth)))
    })
}

day2(); 
