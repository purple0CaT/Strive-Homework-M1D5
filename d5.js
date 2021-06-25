/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
console.log('\n<=== EXERCISE 1 ===> \n')

function area(l1,l2){
    return l1*l2
}
console.log(area(10,5))

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
console.log('\n<=== EXERCISE 2 ===> \n')
function crazySum(val1, val2) {
    parseInt(val1)
    parseInt(val2)
    let sum
    if ( val1 !== val2) {
        sum = val1+val2
    } else {
        sum = (val1+val2)*3
    }
    return sum
}
console.log(crazySum(10,10))
console.log(crazySum(10,5))


/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
console.log('\n<=== EXERCISE 3 ===> \n')

function crazyDiff(val1){
    let dif
    if (val1 <= 19) {
        dif = Math.abs(19 - val1);
        } else {
        dif = Math.abs((val1 - 19) * 3);
        }
    return dif
    }

console.log(crazyDiff(20))
console.log(crazyDiff(10))


/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
console.log('\n<=== EXERCISE 4 ===> \n')

function boundary (n) {
    return ( n >=20 && n <= 100) || n === 400 ? true : false
}
console.log(boundary(400))
console.log(boundary(30))

/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
console.log('\n<=== EXERCISE 5 ===> \n')

function strivify(string){

    if (typeof string === 'string'){

        if (string !== 'Strive'){
            return `Strive  ${string}`
        } else {
            return string
        }
    } else{
        return 'Not a string'
    }

}
console.log(strivify('Strive'))
console.log(strivify('School'))
console.log(strivify(123))



/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
console.log('\n<=== EXERCISE 6 ===> \n')

function check3and7(a){
    if (typeof a==='number' && a > 0) {
        if ( a%3 == 0 ){
            return 'multiple of 3'
        }
        if ( a%7 == 0 ){
            return 'multiple of 7'
        }
    } return 'nope'
}
console.log(check3and7(-1))
console.log(check3and7(6))
console.log(check3and7(14))



/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/
console.log('\n<=== EXERCISE 7 ===> \n')

function reverseString(x){
    let y
    let d
    if ( typeof x === "string") {
        y = x.split('')
        y.reverse()
        d = y.join('')
        return d
    } return 'Not a string'

}
console.log(reverseString('Hello'))


/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/
console.log('\n<=== EXERCISE 8 ===> \n')

function upperFirst(v){
    let x
    let y 
    if ( typeof v === 'string' ){

        x = v.split(' ')

        for ( i = 0; i < x.length; i++){
            x[i]= x[i].charAt(0).toUpperCase() + x[i].slice(1)
            y = x.join(" ");
        }

        return y
    } return 'Not a string'
}
console.log(upperFirst('Hello mate how is your day'))

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
console.log('\n<=== EXERCISE 9 ===> \n')
function cutString(q){

    if ( typeof q ==='string'){
    
        return q.slice(1, -1)
        
    } return 'Not a string'

}
console.log(cutString('mHelloq'))


/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
console.log('\n<=== EXERCISE 10 ===> \n')

function giveMeRandom(n){
    let x = []
    if (!isNaN(n)){

        for ( i=0; i<n; i++){
            let r = Math.round(Math.random() * (10 - 0) + 0)
            x.push(r)
        }
    }
return x
}
console.log(giveMeRandom(10))

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/