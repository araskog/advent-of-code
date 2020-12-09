const fs = require('fs');


/* 1. A valid passport must include the following fields: byr (Birth Year), iyr (Issue Year), 
eyr (Expiration Year), hgt (Height), hcl (Hair Color), ecl (Eye Color), pid (Passport ID).
cid (Country ID) is optional. How many valid passports are there? */

function question1day4() {
    fs.readFile('./day4.txt', (err, data) => {
        const passports = data.toString().split("\n\n");
        var numberOfValidPassports = 0;
        for (i=0; i<passports.length; i++) {
            // Separating each passport into passportString
            var passportString = passports[i].split('\n').join(' ');
            // Check if each passportString includes the required fields
            if (passportString.includes('byr') && 
                passportString.includes('iyr') &&
                passportString.includes('eyr') &&
                passportString.includes('hgt') &&
                passportString.includes('hcl') &&
                passportString.includes('ecl') &&
                passportString.includes('pid')) {
                    numberOfValidPassports ++
                }
        }
        console.log('Q1: The number of valid passports is: ', numberOfValidPassports)
    })
}

question1day4();

/* 2. Adding additional requirements for each field. cid (Country ID) - ignored, missing or not. */

function question2day4() {
    fs.readFile('./day4.txt', (err, data) => {
        const passports = data.toString().split("\n\n");
        var numberOfValidPassports = 0;
        for (i=0; i<passports.length; i++) {
            // Separating each passport into a an array
            var passportArray = passports[i].split('\n').join(' ').split(' ');
            var byr, iyr, eyr, hgt, hcl, ecl, pid = false;

            //Check each field in the passport
            for (j=0; j <passportArray.length; j++) {
                var field = passportArray[j].substring(0,3);
                var value = passportArray[j].substring(4);
                switch (field) {
                    case 'byr': 
                        //byr (Birth Year) - four digits; at least 1920 and at most 2002 (e.g. byr:1920)
                        byr =  (value >=1920 && value <= 2002);
                        break;

                    case 'iyr':
                        //iyr (Issue Year) - four digits; at least 2010 and at most 2020 (e.g. iyr:2011)
                        iyr= (value >= 2010 && value <= 2020);
                        break;

                    case 'eyr':
                        //eyr (Expiration Year) - four digits; at least 2020 and at most 2030 (e.g. eyr:2022)
                        eyr= (value >= 2020 && value <= 2030);
                        break;

                    case 'hgt':
                        //hgt (Height) - a number followed by either cm or in (e.g. hgt:185cm)
                        //If cm, the number must be at least 150 and at most 193
                        //If in, the number must be at least 59 and at most 76
                        hgt = ((passportArray[j].length == 9 && passportArray[j].slice(-2) == 'cm' 
                            && 150 <= passportArray[j].substring(4,7) && passportArray[j].substring(4,7) <= 193) ||
                            (passportArray[j].length == 98&& passportArray[j].slice(-2) == 'in' 
                            && 59 <= passportArray[j].substring(4,6) && passportArray[j].substring(4,6) <= 76));
                        break;

                    case 'hcl':
                        //hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f (e.g. hcl:#123456)
                        hcl = ((/^#[0-9a-f]{6}$/).test(value));
                        break;

                    //ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
                    case 'ecl':
                        ecl = (value == 'amb' || value == 'blu' || value == 'brn' || value == 'gry' 
                        || value == 'grn' || value == 'hzl' || value == 'oth');
                        break;
                    
                    case 'pid':
                        //pid (Passport ID) - a nine-digit number, including leading zeroes (e.g. pid:001234567)
                        pid = ((/^[0-9]{9}$/).test(value));
                        break;
                    
                    default:
                         break;
                }
            }
            // Count the passports that pass all requirements
            if (byr && iyr && eyr && hgt && hcl && ecl && pid) { 
                numberOfValidPassports ++;
            }
        } 
        console.log('Q2: The number of valid passports is: ', numberOfValidPassports)
    })
}

question2day4();