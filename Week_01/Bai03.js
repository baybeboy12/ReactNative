// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
//1.
var Dolphins = [96, 108, 89]
var Koalas = [88, 91, 110]
console.log("Bai 3")
var averageDolphins = (parseInt(Dolphins[1]) + parseInt(Dolphins[2]) + parseInt(Dolphins[3])) / 3
var averageKoalas = (parseInt(Koalas[1]) + parseInt(Koalas[2]) + parseInt(Koalas[3])) / 3
var boolean = averageDolphins == averageKoalas
    //2.
console.log("1. 2.")
if (boolean) {
    console.log("they have the same average score : ", averageDolphins)
} else {
    if (averageDolphins > averageKoalas) {
        console.log("Dolphins win")
    } else {
        console.log("Koalas win")
    }
}
//3.
console.log("3. 4.")
var Dolphins = [97, 112, 101]
var Koalas = [109, 95, 123]
var averageDolphins = (parseInt(Dolphins[1]) + parseInt(Dolphins[2]) + parseInt(Dolphins[3])) / 3
var averageKoalas = (parseInt(Koalas[1]) + parseInt(Koalas[2]) + parseInt(Koalas[3])) / 3
if (averageDolphins >= 100 || averageKoalas >= 100) {
    if (averageDolphins > averageKoalas) {
        console.log("Dolphins>Koalas")
    } else {
        if (averageDolphins > averageKoalas) {
            console.log("Koalas>Dolphins")
        } else {
            console.log("they have the same average score")
        }
    }
} else {
    console.log("No team win")
}
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
console.log("3. 4.")
var Dolphins = [97, 112, 101]
var Koalas = [109, 95, 106]
var averageDolphins = (parseInt(Dolphins[1]) + parseInt(Dolphins[2]) + parseInt(Dolphins[3])) / 3
var averageKoalas = (parseInt(Koalas[1]) + parseInt(Koalas[2]) + parseInt(Koalas[3])) / 3

if (averageDolphins >= 100 || averageKoalas >= 100) {
    var boolean = averageDolphins == averageKoalas
    if (boolean) {
        console.log("they have the same average score : ", averageDolphins)
    } else {
        if (averageDolphins > averageKoalas) {
            console.log("Dolphins win")
        } else {
            console.log("Koalas win")
        }
    }
} else {
    console.log("No team win")
}