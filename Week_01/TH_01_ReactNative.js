//bai 1
// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
var wM = 95
var hM = 1.88
var bmiM = wM / (hM ** 2)
var wJ = 85
var hJ = 1.76
var bmiJ = wJ / (hJ ** 2)
var markHigherBMI = bmiM > bmiJ
    // Coding Challenge #2
    // Use the BMI example from Challenge #1, and the code you already wrote, and
    // improve it.
    // Your tasks:
    // 1. Print a nice output to the console, saying who has the higher BMI. The message
    // is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
    // 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
    // BMI (28.3) is higher than John's (23.9)!"
console.log("Bai 1 va Bai 2")
if (markHigherBMI) {
    console.log("Mark's BMI (" + Math.round(bmiM * 100) / 100, ") is higher than John's (" + Math.round(bmiJ * 100) / 100, ") !")
} else {
    console.log("John's BMI (" + Math.round(bmiJ * 100) / 100, ") is higher than Mark's (" + Math.round(bmiM * 100) / 100, ") !")
}
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
// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement  (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300
console.log("Bai 4")
var bill = 275
var tip = bill<=50 && bill <= 200 && bill >= 0 ? bill * 0.15 : bill*0.2
var total = bill+tip
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`)
// Coding Challenge #5
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
console.log("Bai 5")
var calcAverage = (sc1,sc2,sc3)=>{
    (sc1+sc2+sc3)/3
}
var avgDolphinsData1 = calcAverage(44, 23, 71);
var avgKoalasData1 = calcAverage(65, 54, 49);

var avgDolphinsData2 = calcAverage(85, 54, 41);
var avgKoalasData2 = calcAverage(23, 34, 27);

var checkWinner = (avgDolhins,avgKoalas)=>{
    if (avgDolhins > avgKoalas) {
        console.log(`Dolphins win (${avgDolhins}) `);
      } else if (avgKoalas > avgDolhins) {
        console.log(`Koalas thắng (${avgKoalas})`);
      } else {
        console.log("Không có đội nào thắng");
      }
}

checkWinner(avgDolphinsData1, avgKoalasData1);
checkWinner(avgDolphinsData2, avgKoalasData2);

// Coding Challenge #6
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
console.log("bai 6")
var bills = [125, 555 , 44];
var tips = [];
var totals = [];
var calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  };
for (let i = 0; i < bills.length; i++) {
    var tip = calcTip(bills[i]);
    tips.push(tip)
    var total = bills[i] + tips[i];
    totals.push(total);
}
console.log('Danh sách hóa đơn:', bills);
console.log('Danh sách tiền tip:', tips);
console.log('Danh sách tổng cộng:', totals);

// Coding Challenge #7
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
console.log("Bai 7");
var mark = {
    FullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        return this.bmi = this.mass/(this.height**2)
    }
}
var john = {
    FullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        return this.bmi = this.mass/(this.height**2)
    }
}
var bmiM = Math.round(mark.calcBMI()*100)/100;
var bmiJ = Math.round(john.calcBMI()*100)/100;

if (bmiM>bmiJ) {
    console.log(`Mark's BMI ${bmiM} is higher than John's ${bmiJ}!`)
} else {
    console.log(`John's BMI ${bmiJ} is higher than Mark's ${bmiM}!`)
}
// Coding Challenge #8
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays 
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array
console.log('Bai 8')
var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52];
var tips = [];
var totals = [];
var calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  };
for (let i = 0; i < bills.length; i++) {
    var tip = calcTip(bills[i]);
    tips.push(tip)
    var total = bills[i] + tips[i];
    totals.push(total);
}
console.log('Danh sách hóa đơn:', bills);
console.log('Danh sách tiền tip:', tips);
console.log('Danh sách tổng cộng:', totals);
var calcAverage = (array)=>{
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
       sum += array[i]       
    }
    return sum;
}
var result = calcAverage(totals)/totals.length;
console.log('Trung bình tổng hóa đơn:', result);
// Coding Challenge #9
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1
// days ... 21oC in 2 days ... 23oC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]
console.log("bai 9");
var printForecast = (array)=>{
    for (let i = 0; i < array.length; i++) {
        console.log(`${array[i]}oC in ${i+1} days`);
    }
}
console.log("data 1");
printForecast([17, 21, 23]);
console.log("data 2");
printForecast([12, 5, -5, 0, 4]);