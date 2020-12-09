const fs = require('fs');

fs.readFile('./day4.txt', (err, data) => {
    const dump = data;
const collect = data.toString().split("\n\n").map((chunk) => {
    var ppObj = {}
    chunk.split(/[\s|\n]+/).filter(maybeItem => maybeItem.split(":")[0] !== "cid").forEach(field => {
        const fieldSplit = field.split(":")
        ppObj[fieldSplit[0]] = fieldSplit[1]
    })
    return ppObj
}) 

const cols = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]
const rules = {
    byr: (val) => Number(val) >= 1920 && Number(val) <= 2002,
    iyr: (val) => Number(val) >= 2010 && Number(val) <= 2020,
    eyr: (val) => Number(val) >= 2020 && Number(val) <= 2030,
    hgt: (val) => {
        const lastTwo = val.substr(val.length - 2)
        if (!/(cm|in)$/.test(val)) {
            return false
        }
        const isCm = lastTwo === "cm"
        const num = Number(val.substr(0, val.length - 2))
        return isCm ? num >= 150 && num <=193 : num >= 59 && num <= 76
    },
    hcl: (val) => /^#[0-9a-f]{6}$/.test(val),
    ecl: (val) => cols.includes(val),
    pid: (val) => val.length === 9 && Number.isInteger(Number(val))
}

let count = 0
const keys = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
for (var i=0; i<collect.length; i++) {
    const containsAll = keys.every((key) => Object.keys(collect[i]).includes(key))
    if (!containsAll) {
        continue
    }
    const allValid = keys.every((key) => {
        return rules[key](collect[i][key])
    })
    if (containsAll && allValid) {
        count++
    }
}
console.log(count)
})