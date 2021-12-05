const fs = require('fs');

const day3 = () => {
    fs.readFile('./day3.txt', (err, data) => {
        const diagnostics = data.toString().split('\n')

        let binaryNum = [];
        let gammaNum = [];

        for(let i = 0; i < diagnostics[0].length; i++){    
            let num1 = 0;
            let num0 = 0;
            for (let j = 0; j < diagnostics.length; j++) {
                if (Number(diagnostics[j][i]) == 0) {
                    num0++
                } else num1++
            }
            if (num1 > num0) {
                binaryNum.push(1) 
                gammaNum.push(0)
            } else {
                binaryNum.push(0)
                gammaNum.push(1) 
                }
            }                    
         
         const bitCriteria = (position, data, bit) => {
            const arr0 = [];
            const arr1 = [];
        
            data.forEach(el => el[position] == '0' ? arr0.push(el) : arr1.push(el));
        
            if (data.length == 1) 
                return data[0];
             else {
                if (bit == '1') 
                    return bitCriteria(position+1, arr1.length >= arr0.length ? arr1 : arr0, bit);
                if (bit == '0') 
                    return bitCriteria(position+1, arr0.length <= arr1.length ? arr0 : arr1, bit);
            }
        }
        
        const oxygen = bitCriteria(0, diagnostics, '1');
        const co2 = bitCriteria(0,diagnostics, '0');

        return (console.log("What is the power consumption of the submarine? ", parseInt(binaryNum.join(''), 2) * parseInt(gammaNum.join(''), 2), 
        "What is the life support rating of the submarine?", parseInt(oxygen, 2) * parseInt(co2, 2)))
    })
}

day3(); 
