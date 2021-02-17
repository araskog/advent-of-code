const fs = require("fs");

function questionday6() {
  fs.readFile("./day6.txt", (err, data) => {
    // Put the declarationForms for each group in an array
    const declarationForms = data.toString().split("\n\n");

    const uniqueAnswersQ1 = declarationForms.reduce((acc, groupAnswers) => {
      // Store each group's declarationForms in a set (unique values)
      const groupSet = new Set(groupAnswers);
      // Remove new lines in each declarationForm group
      groupSet.delete("\n");

      return acc + groupSet.size;
    }, 0);

    const allAnswersQ2 = declarationForms.reduce((acc, groupAnswers) => {
      //  Store each person's declarationForm as an entry in an array
      const groupArr = groupAnswers.split("\n");
      // Store the first list of answers in the group into an array
      const [...list] = groupArr[0];
      let count = 0;

      // Counting the characters present in all people's declaration forms
      list.map((char) => {
        if (groupArr.every((group) => group.includes(char))) count++;
      });

      return acc + count;
    }, 0);

    console.log(
      "Q1: The total number of unique answers are: ",
      uniqueAnswersQ1
    );
    console.log(
      "Q2: The total number of answers where everyone answered yes are:",
      allAnswersQ2
    );
  });
}

questionday6();
