const fs = require("fs");

function questionday6() {
  fs.readFile("./day6.txt", (err, data) => {
    // Put the declarationForms for each group in an array
    const declarationForms = data.toString().split("\n\n");

    const uniqueAnswers = declarationForms.reduce(function (acc, groupAnswers) {
      // Store each group's declarationForms in a set (unique values)
      const groupSet = new Set(groupAnswers);

      // Remove new lines in each declarationForm group
      groupSet.delete("\n");

      // Add the unique answers per group to the total
      return acc + groupSet.size;
    }, 0);

    const allAnswers = declarationForms.reduce(function (acc, groupAnswers) {
      //  Store each person's declarationForm as an entry in an array
      const groupArr = groupAnswers.split("\n");
      // Pick the first list of answers in the group
      const list = groupArr[0];

      function countAllYes() {
        let count = 0;
        let allYes = false;

        // If only one person in the group - all answers count
        if (groupArr.length === 1) {
          count = list.length;
          return count;
        }
        // Else, count the characters from the first entry included in the rest of the array
        else {
          for (let j = 0; j < list.length; j++) {
            for (let i = 1; i < groupArr.length; i++) {
              allYes = groupArr[i].includes(list[j]);
              if (!allYes) break;
            }
            if (allYes === true) {
              count++;
            }
          }
          return count;
        }
      }
      return acc + countAllYes();
    }, 0);

    console.log("Q1: The total number of unique answers are: ", uniqueAnswers);
    console.log(
      "Q2: The total number of answers where everyone answered yes are:",
      allAnswers
    );
  });
}

questionday6();
