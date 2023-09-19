// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
var wM = 95
var hM = 1.88
var bmiM = wM / (hM ** 2)
var wJ = 85
var hJ = 1.76
var bmiJ = wJ / (hJ ** 2)
var markHigherBMI = bmiM > bmiJ
console.log("Bai 1 va Bai 2")
if (markHigherBMI) {
    console.log("Mark's BMI (" + Math.round(bmiM * 100) / 100, ") is higher than John's (" + Math.round(bmiJ * 100) / 100, ") !")
} else {
    console.log("John's BMI (" + Math.round(bmiJ * 100) / 100, ") is higher than Mark's (" + Math.round(bmiM * 100) / 100, ") !")
}