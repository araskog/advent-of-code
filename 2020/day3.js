const fs = require('fs');

/* 1. Start by counting all the trees you would encounter for the slope right 3, down 1: From your starting position at the top-left, check the position that is right 3 and down 1. 
Then, check the position that is right 3 and down 1 from there, and so on until you go past the bottom of the map.
*/

var multiplied = 1;

function day3(right, down) {
    fs.readFile('./day3.txt', (err, data) => {
        var slopesArray = data.toString().split("\n");
        var position = right;
        const stepsDown = down;
        var treesCounted = 0;
        // Starting at i = stepsDown
        for (i=stepsDown; i<slopesArray.length; i=i+stepsDown){
            var line = slopesArray[i].toString().split("");
            // After reaching end of a line, begin at correct index on the next line
            if (position >= line.length){
                position = position % line.length;
            }
            // Count the number of trees (#)
            if(line[position] == '#'){
                treesCounted++;
            }
            position = position + right;
        }
        // Part 1: How many trees are encountered on this route?
        console.log('Slope: ', right, down, '. Trees encountered: ', treesCounted);
        // Part 2: Multiply the trees encountered on each route
        console.log('Multiplied value ', multiplied = treesCounted * multiplied);
    })
}

// Routes to be multiplied 

// Right 1, down 1
day3(1,1);
// Right 3, down 1
day3(3,1);
// Right 5, down 1
day3(5,1);
// Right 7, down 1
day3(7,1);
// Right 1, down 2
day3(1,2);