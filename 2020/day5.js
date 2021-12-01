const fs = require('fs');

/* 1. What is the highest seat ID? The following rules apply:
    A seat might be specified like FBFBBFFRLR, 
    where F means "front", B means "back", L means "left", and R means "right".
    Start by considering the whole range, rows 0 through 127.
    F means to take the lower half, keeping rows 0 through 63.
    B means to take the upper half, keeping rows 32 through 63.
    F means to take the lower half, keeping rows 32 through 47.
    B means to take the upper half, keeping rows 40 through 47.
    B keeps rows 44 through 47.
    F keeps rows 44 through 45.
    The final F keeps the lower of the two, row 44.
    The last three characters will be either L or R; these specify exactly one of the 8 columns of seats on the plane (numbered 0 through 7).
    The same process as above proceeds again, this time with only three steps. L means to keep the lower half, while R means to keep the upper half.
    For example, consider just the last 3 characters of FBFBBFFRLR:
    Start by considering the whole range, columns 0 through 7.
    R means to take the upper half, keeping columns 4 through 7.
    L means to take the lower half, keeping columns 4 through 5.
    The final R keeps the upper of the two, column 5.
    So, decoding FBFBBFFRLR reveals that it is the seat at row 44, column 5. */

/* 2. It's a completely full flight, so your seat should be the only missing boarding pass in your list. However, there's a catch: some of the seats 
    at the very front and back of the plane don't exist on this aircraft, so they'll be missing from your list as well.
    Your seat wasn't at the very front or back, though; the seats with IDs +1 and -1 from yours will be in your list.
    What is the ID of your seat? */

function questionday5() {
    fs.readFile('./day5.txt', (err, data) => {
        const boardingcards = data.toString().split("\n");
        var allSeatIds = []; //Array to store all seat IDs found
        var missing = []; //Array to store any missing seat IDs

        for (var i = 0; i < boardingcards.length; i++) {
            var boardingcard = boardingcards[i];
            var maxSeatId = 0; //The maximum seat ID found
            var minRow = 0;
            var maxRow = 127;
            var minCol = 0;
            var maxCol = 7;
            //Calculate boarding pass row
            for (var j = 0; j < 7; j++) {
                if (boardingcard[j] == 'F') {
                    minRow = Math.floor(minRow);
                    maxRow = Math.floor(maxRow - ((maxRow - minRow)/2));
                } else if (boardingcard[j] == 'B') {
                    minRow = Math.ceil(maxRow - ((maxRow-minRow)/2));
                    maxRow = Math.ceil(maxRow);
                }
            }
            //Calculate boarding pass column
            for (var k=6; k <= boardingcard.length; k++) {
                if (boardingcard[k] == 'L') {
                    minCol = Math.floor(minCol);
                    maxCol = Math.floor(maxCol - ((maxCol - minCol)/2));
                } else if (boardingcard[k] == 'R') {
                    minCol = Math.ceil(maxCol - ((maxCol-minCol)/2));
                    maxCol = Math.ceil(maxCol);
                }
            } 
        //Every seat has a unique seat ID: multiply the row by 8, then add the column. 
            seatId = (minRow*8+minCol);
            allSeatIds.push(seatId);
                if (seatId > maxSeatId) {
                    maxSeatId = seatId;
                }    
        }

        //Find the seat ID missing from the list of all seat IDs
        const max = Math.max(...allSeatIds); // Search for the highest seat ID
        const min = Math.min(...allSeatIds); // Search for the lowest seat ID
            
        for(let l=min; l<= max; l++) {
            if(!allSeatIds.includes(l)) { // Checking whether the current value is included
                missing.push(l);
            }
        }
        
        console.log('Max seat ID: ', maxSeatId)
        console.log('Missing numbers: ', missing);;
    })
}

questionday5();

