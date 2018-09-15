// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
// The output should be two capital letters with a dot seperating them.
//
// It should look like this:
//
// Sam Harris => S.H
//
// Patrick Feeney => P.F

function initials(name) {
    return name.split(' ').map(e => e[0].toUpperCase()).join('.')
}

console.log(initials('Sam Harris'))
console.log(initials('Patrick Feeney'))


///////////////////////////////////////////////////////

// 2
// Write function makeUpperCase.
function makeUpperCase(str) {
    let tempString = ''
    for (let i = 0; i < str.length; i++) {
        tempString += str[i].toUpperCase();
    }
    return tempString;
}

console.log(makeUpperCase('asdgadsfg'))
console.log(makeUpperCase('jadsfmvzi adsf'))

//////////////////////////////////////////////////////

//3
// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// addLength('apple ban') => ["apple 5", "ban 3"]
// addLength('you will win') => ["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

function addLength(str) {
    const arr = str.split(' ');
    return arr.map(e => `${e} ${e.length}`)
}

console.log(addLength('apple ban'))
console.log(addLength('you will win'))
// Note: String will have at least one element; words will always be separated by a space.

///////////////////////////////////////////////////////
//4
// Who likes keywords? Nobody likes keywords, so why use them?
//
// You know what keyword I use too much? if! We should make a function called _if, with its arguments as a logical test and two functions/lambdas where the first function is executed if the boolean is true, and the second if it's false, like an if/else statement, so that we don't have to mess around with those nasty keywords! Even so, It should support truthy/falsy types just like the keyword.
function _if(condition, funcTrue, funcFalse) {
    condition ? funcTrue() : funcFalse();
}
_if(0, _ => test_if = true, _ => test_if = false)
test_if
_if(1, _ => test_if = true, _ => test_if = false)
test_if
_if('', _ => test_if = true, _ => test_if = false)
test_if
_if('as', _ => test_if = true, _ => test_if = false)
test_if

///////////////////////////////////////////////////////
//5
// Prolog:
//
// This kata series was created for friends of mine who just started to learn programming. Wish you all the best and keep your mind open and sharp!
//
// Task:
//
// Write function typeValidation that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.

function typeValidation(variable, type) {
    return typeof variable === type
}

console.log(typeValidation(5, 'number'))
console.log(typeValidation('s', 'string'))
console.log(typeValidation({}, 'object'))
console.log(typeValidation([], 'object'))
console.log(typeValidation(null, 'object'))
console.log(typeValidation(true, 'boolean'))

///////////////////////////////////////////////////////
//6
// #Triple Trouble
//
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!
//
// Ex) Input: "aa", "bb" , "cc" => Output: "abcabc"
//
// Note: You can expect all of the inputs to be the same length.

function tripleTrouble(str1, str2, str3) {
    let tempString = '';
    for (let i = 0; i < str1.length; i++) {
        tempString += `${str1[i]}${str2[i]}${str3[i]}`
    }
    return tempString;
}

console.log(tripleTrouble('aa', 'bb', 'cc'))
console.log(tripleTrouble('D  cl', 'aiaoj', 'ns ok'))

///////////////////////////////////////////////////////
//7
//Given a non-negative integer n, write a function toBinary/ToBinary which returns that number in a binary format.

function toBinary(number) {
    return number.toString(2)
}

console.log(toBinary(2))
console.log(toBinary(1))
console.log(toBinary(20))
console.log(toBinary(63))

///////////////////////////////////////////////////////
//8
// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function goodIdeas(arr) {
    const goodIdeas = arr.filter(e => e === 'good');

    switch (goodIdeas.length) {
        case 0:
            return 'Fail!'
        case 1:
        case 2:
            return 'Publish!'
        default:
            return 'I smell a series!'

    }
}

console.log(goodIdeas(['bad', 'bad']))
console.log(goodIdeas(['bad','good', 'bad']))
console.log(goodIdeas(['bad', 'good', 'good', 'bad']))
console.log(goodIdeas(['bad', 'good', 'good', 'good','bad']))
console.log(goodIdeas(['bad', 'good', 'bad']))
console.log(goodIdeas(['bad', 'bad','good', 'good', 'good', 'good', 'good', 'good', 'good']))
console.log(goodIdeas([]))

///////////////////////////////////////////////////////
//9
// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.
function sumTwoArrays(arr1, arr2) {
    return arrTotal(arr1) + arrTotal(arr2);
}

function arrTotal(arr) {
    return arr.reduce((p, c) => { return p + c }, 0)
}

console.log(sumTwoArrays([1], [2, 4, 6, 7, 1]))
console.log(sumTwoArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1]))
///////////////////////////////////////////////////////
//10
// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.
//
// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].

function familyAge(ages) {
    return [ages[0], ages[ages.length - 1], ages[ages.length - 1] - ages[0]]
}

console.log(familyAge([0, 1]))
console.log(familyAge([0, 1, 4, 65]))
console.log(familyAge([4, 10, 12, 13, 59]))

///////////////////////////////////////////////////////
//11
// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// Example
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
// Note: the result should be rounded down to the nearest integer.

// Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.

function predictAge(gg1, gg2, gg3, gg4, gg5, gg6, gg7, gg8) {
    const greatDeaths = [gg1, gg2, gg3, gg4, gg5, gg6, gg7, gg8]
    return Math.floor(Math.sqrt(greatDeaths.map(e => e * e).reduce((p, c) => { return p + c }, 0)) / 2)
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45))

///////////////////////////////////////////////////////
//12
// Time to test your basic knowledge in functions! Return the odds from a list:
//
// odds([1,2,3,4,5]) #=> [1,3,5]

function odds(odds) {
    return odds.filter(e => e % 2 === 1)
}

console.log(odds([1, 2, 3, 4, 5]))
console.log(odds([1, 3, 5, 7, 9]))
console.log(odds([2, 4, 6, 8, 0]))

///////////////////////////////////////////////////////
//13
// You are given an initial 2-value array (x). You will use this to calculate a score.
//
// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.
//
// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.
//
// For example:
//
// if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].

function doubleArrayScore(x) {
    let score = 0;
    if (typeof x[0] !== 'number' && typeof x[1] !== 'number') {
        return 'Void!'
    }
    if (typeof x[0] === 'number') {
        score += x[0]
    }
    if (typeof x[1] === 'number') {
        score += x[1]
    }

    const tempArr = [];
    for (let i = 0; i < score; i++) {
        tempArr.push(x);
    }
    return tempArr
}
console.log(doubleArrayScore(['a', 3]))
console.log(doubleArrayScore([1, 3]))
console.log(doubleArrayScore(['a', {}]))
console.log(doubleArrayScore([20, 3]))
///////////////////////////////////////////////////////
//14
// My friend wants a new band name for her band. She like bands that use the formula: 'The' + a noun with first letter capitalized.
//
// dolphin -> The Dolphin
//
// However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word like so (WITHOUT a 'The' in front):
//
// alaska -> Alaskalaska
//
// europe -> Europeurope
//
// Can you write a function that takes in a noun as a string, and returns her preferred band name written as a string?

function bandName(str) {
    let bandName = str.toLowerCase()
    if (bandName[0] === bandName[bandName.length - 1]) {
        return bandName[0].toUpperCase() + bandName.slice(1) + bandName.slice(1);
    }

    return `The ${bandName[0].toUpperCase()}${bandName.slice(1)}`
}
console.log(bandName('europe'))
console.log(bandName('alaska'))
console.log(bandName('dolphin'))
console.log(bandName('yardbirds'))
console.log(bandName('who'))
///////////////////////////////////////////////////////
//15
// In this programming exercise, you're going to learn about functions, boolean (true/false) values, strings, and the if-statement.
//
// A function is a block of code that takes an input and produces an output. In this example, boolean_to_string is a function whose input is either true or false, and whose output is the string representation of the input, either "true" or "false".
//
// A common idea we often want to represent in code is the concept of true and false. A variable that can either be true or false is called a boolean variable. In this example, the input to boolean_to_string (represented by the variable b) is a boolean.
//
// Lastly, when we want to take one action if a boolean is true, and another if it is false, we use an if-statement.
//
// For this kata, don't worry about edge cases like where unexpected input is passed to the function. You'll get to worry about these enough in later exercises.

function boolean_to_string(boo) {
    return boo ? "true" : "false"
}

console.log(boolean_to_string(true))
console.log(boolean_to_string(false))

///////////////////////////////////////////////////////
//16
// Write function avg which calculates average of numbers in given list.

function avg(arr) {
    return arr.reduce((p, c) => { return p + c }, 0) / arr.length
}

console.log(avg([1]))
console.log(avg([1, 2, 3]))
console.log(avg([1, 2, 3, 4, 5, 6, 7, 8, 9,]))
console.log(avg([86, 87, 85, 91, 81]))
///////////////////////////////////////////////////////
//17
// This time we want to write calculations using functions and get the results. Let's have a look at some examples:
//
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:
//
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
function plus(num) {
    return (num2) => num + num2
}
function minus(num) {
    return (num2) => num2 - num
}
function times(num) {
    return (num2) => num * num2
}
function dividedBy(num) {
    return (num2) => num2 / num
}

function one(operation) {
    return operation ? operation(1) : 1
}
function two(operation) {
    return operation ? operation(2) : 2
}
function three(operation) {
    return operation ? operation(3) : 3
}
function four(operation) {
    return operation ? operation(4) : 4
}
function five(operation) {
    return operation ? operation(5) : 5
}
function six(operation) {
    return operation ? operation(6) : 6
}
function seven(operation) {
    return operation ? operation(7) : 7
}
function eight(operation) {
    return operation ? operation(8) : 8
}
function nine(operation) {
    return operation ? operation(9) : 9
}
function zero(operation) {
    return operation ? operation(0) : 0
}

console.log(seven(times(five())))
console.log(four(plus(nine())))
console.log(eight(minus(three())))
console.log(six(dividedBy(two())))

///////////////////////////////////////////////////////
//18
// Write function bmi that calculates body mass index (bmi = weight / height ^ 2).
//
// if bmi <= 18.5 return "Underweight"
//
// if bmi <= 25.0 return "Normal"
//
// if bmi <= 30.0 return "Overweight"
//
// if bmi > 30 return "Obese"

function calculateBmi(weight, height) {
    const bmi = weight / (height ** 2)
    switch (true) {
        case bmi <= 18.5: return "Underweight"
        case bmi <= 25.0: return "Normal"
        case bmi <= 30.0: return "Overweight"
        case bmi > 30: return "Obese"
    }
}

console.log(calculateBmi(170, 70))
console.log(calculateBmi(100, 150))
console.log(calculateBmi(100, 150))
console.log(calculateBmi(800, 5))

///////////////////////////////////////////////////////
//19
// Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.

// A few cases:


// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false

// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true

// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true

function isDivideBy(num1, num2, num3) {
    return !(num1 % num2 || num1 % num3)
}
console.log(isDivideBy(-12, 2, -6))
console.log(isDivideBy(-12, 2, -5))
console.log(isDivideBy(45, 1, 6))
console.log(isDivideBy(45, 5, 15))
console.log(isDivideBy(4, 1, 4))
console.log(isDivideBy(15, -5, 3))


///////////////////////////////////////////////////////
//20
// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears or human_years years ago.

// Return their respective ages now as [humanYears,catYears,dogYears] or [human_years,cat_years,dog_years]

// NOTES:

// humanYears >= 1
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

function respectiveAges(humanYears) {
    let catYears = 0;
    let dogYears = 0;

    for (let i = 1; i <= humanYears; i++) {
        switch (i) {
            case 1:
                catYears += 15;
                dogYears += 15;
                break;
            case 2:
                catYears += 9;
                dogYears += 9;
                break;
            default:
                catYears += 4;
                dogYears += 5;
                break;

        }
    }
    return [humanYears, catYears, dogYears]
}

console.log(respectiveAges(0))
console.log(respectiveAges(1))
console.log(respectiveAges(2))
console.log(respectiveAges(3))
console.log(respectiveAges(4))
console.log(respectiveAges(5))
console.log(respectiveAges(6))

///////////////////////////////////////////////////////
//21
// Given a year, return the century it is in.

// The first century spans from the year 1 up to and including the year 100,
// the second - from the year 101 up to and including the year 200, etc.

// Let's see some examples:

// centuryFromYear(1705) // returns 18
// centuryFromYear(1900) // returns 19
// centuryFromYear(1601) // returns 17
// centuryFromYear(2000) // returns 20
// Hope you enjoy it .. Awaiting for Best Practice Codes hahaha ..

// Enjoy Learning !!!

function centuryFromYear(num) {
    let century = Math.floor(num / 100)
    if (num % 100) {
        century++
    }
    return century
}

console.log(centuryFromYear(1705))
console.log(centuryFromYear(1900))
console.log(centuryFromYear(1601))
console.log(centuryFromYear(2000))

///////////////////////////////////////////////////////
//22
// The first input array contains the correct answers to an exam, like ["a", "a", "b", "d"]. The second one is "answers" array and contains student's answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer(empty string).

// If the score < 0, return 0.

// For example:

function checkExam(solution, studentAnswer) {
    let score = 0;

    for (let i = 0; i < solution.length; i++) {
        if (studentAnswer[i] !== "") {
            if (solution[i] === studentAnswer[i]) {
                score += 4
            } else {
                score -= 1
            }
        }
    }

    return score > 0 ? score : 0
}
console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])) //→ 6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])) //→ 7
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])) //→ 16
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])) //→ 0

///////////////////////////////////////////////////////
//23
// It's a well known fact that anything Chuck Norris wants, he gets. As a result Chuck very rarely has to use the word false.

// It is a less well known fact that if something is true, and Chuck doesn't want it to be, Chuck can scare the truth with his massive biceps, and it automatically becomes false.

// Your task is to be more like Chuck (ha! good luck!). You must return false without ever actually using the word false...

// Go show some truth who's boss!

function ifChuckSaysSo() {
    return {} === 0
}

console.log(ifChuckSaysSo())

///////////////////////////////////////////////////////
//24
// Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
//
// Your task is to make 'Past' function which returns time converted to miliseconds.
//
// #####Example:
//
// past(0, 1, 1) == 61000
// Note! h, m and s will be only Natural numbers! Waiting for translations and Feedback! Thanks!
function past(h, m, s) {
    return s * 1000 + m * 60000 + h * 60 * 60 * 10000
}

console.log(past(0, 1, 1)) // == 61000
console.log(past(1, 1, 1)) // == 36061000
console.log(past(7, 5, 8)) // == 252308000
console.log(past(0, 0, 0)) // == 0

///////////////////////////////////////////////////////
//25
// Color Ghost

// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

class Ghost {
    constructor() {
        const ghostColors = ["white", "yellow", "purple", "red"]

        this.color = ghostColors[Math.floor(Math.random() * 4)]
    }
}

let ghost;

ghost = new Ghost();
console.log(ghost.color)
ghost = new Ghost();
console.log(ghost.color)
ghost = new Ghost();
console.log(ghost.color)
ghost = new Ghost();
console.log(ghost.color)
ghost = new Ghost();
console.log(ghost.color)
ghost = new Ghost();
console.log(ghost.color)
ghost = new Ghost();
console.log(ghost.color)
ghost = new Ghost();
console.log(ghost.color)

///////////////////////////////////////////////////////
//26
// An AI has infected a text with a character!!
//
// This text is now fully mutated to this character.
//
// If the text or the character are empty, return an empty string.
// There never will be a case when both are empty as nothing is going on!!
//
// The character is a string. It will always be of length 1 if it's not empty.
//
// Example:
//
// before = "abc"
// character = "z"
// after = "zzz"

function contamination(text, char) {
    return text.split('').map(e => char).join('')
}

console.log(contamination("abc", "z"), "zzz")
console.log(contamination("", "z"))
console.log(contamination("abc", ""))
console.log(contamination("_3ebzgh4", "&"), "&&&&&&&&")
console.log(contamination("//case", " ").length)