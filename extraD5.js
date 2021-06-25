/* EXERCISE 11
Write a function "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5.
The function returns the sum of the numbers bigger than 5.
*/
console.log('\n<=== EXERCISE 11 ===> \n')
// array
const arry = []
for ( i=0; i<10; i++){
    let x = Math.round(Math.random() * (10 - 0) + 0)
    arry.push(x)
}
console.log(arry)

// function
function checkArray(arry){
    let sum = 0
    for ( i = 0; i < arry.length; i++){

        if (arry[i] > 5){
            console.log(arry[i])
            sum += arry[i]
        }
    } 
console.log(' The sum is:')
return sum
}
console.log(checkArray(arry))

/* WRITE YOUR CODE HERE */

/* EXERCISE 12
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "shippingCartTotal" which calculates the total due to the shop.
*/
console.log('\n<=== EXERCISE 12 ===> \n')

const shoppingCart = [
    {id: 1, name: 'cup', price: 10, quantity: 3},
    {id: 2, name: 'pen', price: 5, quantity: 7},
    {id: 3, name: 'paper', price: 3, quantity: 6}
]
console.log(shoppingCart)

function shippingCartTotal(sum){
let sumtotal = 0
    for( i=0; i<shoppingCart.length; i++){
        let x = shoppingCart[i].price * shoppingCart[i].quantity
        sumtotal += x
    }
return sumtotal
}
console.log(`Total earnings: ${shippingCartTotal(shoppingCart)}`)


/* WRITE YOUR CODE HERE */

/* EXERCISE 13
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/
console.log('\n<=== EXERCISE 13 ===> \n')
let newObj = {id: 4, name: 'cabel', price: 12, quantity: 10}

function addToShoppingCart(x){
    shoppingCart.push(x)
    console.log(shoppingCart)
    
    let y = 0
    for ( i=0; i<shoppingCart.length; i++){
        y += shoppingCart[i].quantity
    }
    console.log(`Total number of items: ${y}`)

}
addToShoppingCart(newObj)

/* WRITE YOUR CODE HERE */

/* EXERCISE 14
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in the array.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 15
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 16
Create a function "loopUntil" which receives an integer x between 0 and 9.
The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 17
Write a function "average" which receives an array and return the average value. The function automatically skips non-numeric entries in the array.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 18
Write a function "longest" to find the longest string from an given array of strings.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 19
Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
Check if the email is valid using string methods. The email (in this example) is valid if the words SPAM and SCAM does not appear.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 20
Write a function that receives a date d as parameter and calculates the number of days passes since the d.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 21
Write a function "matrixGenerator" that receives x and y as parameter. The result should be a matrix of x times y with, as value, the index of the position.
Ex.: X = 3, Y = 2
["00","01","02"
"10","11","12"]
*/

/* WRITE YOUR CODE HERE */