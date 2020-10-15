/* Question 1: Create an Array from 0...100 without using traditional For-loop */

console.log('Array from 0...100');

var newArray = [];

function array_1_to_100(num) {	

	let nextNumber = num + 1;
    
    if (num <= 100) {

        newArray.push(nextNumber);
        array_1_to_100(nextNumber);
       
    }
}

array_1_to_100(0);

console.log(newArray);

/* End Problem 1 */

/* Question 2: Create an Array of only even numbers from the above array */

console.log('Array of only even numbers from the above array');

var newEvenArray = newArray.filter( x => x % 2 == 0);

console.log(newEvenArray);

// Create a function that returns a Promise which returns the 
// square of only even numbers and 
// throws an error if an odd number is passed

function evenOddTest (num) {
	return new Promise(
		(resolve, reject) => {
			
			if( num % 2 == 0 )
				return resolve(num * num);
			else
				return reject('Odd number input');
		}
	);
}

evenOddTest(32)
.then( result => {
	console.log( result );
})
.catch( err => {
	console.log( err );
})

/* End Problem 2 */

/* Question 3: create an array of even squares using the previous array */

console.log('array of even squares using the previous array');

var newEvenSquareArray = newArray.map( x => {
	if(x % 2 == 0)
		return x * x;
	else
		return 0 
}).filter(y => { return y != 0 });

console.log(newEvenSquareArray);

/* End Problem 3 */

/* Problem 4 Sum of all the squares from the above array of Even Squares */

console.log("Sum of all the squares from the above array of Even Squares");

let total = 0;

newEvenSquareArray.forEach(x => {
	total += x;
});

console.log('total = '+ total);

/*let errors = [];
let resultantArray = [];

// 1. Number of errors 
// 2. The resultant array
// 3. Number of objects in the resultant array

for(const a of newArray) {
	evenOddTest(a)
	.then( result => {
		resultantArray.push(result);
	})
	.catch( err => {
		errors.pus(err);
	})
}

console.log(`Number of errors = ${errors.length}`);*/


console.log('____________________________________________________________________')


// Q1: Create a template string of a button HTML Element. Save the title
// for the button in a separate var and use it in the button correctly.

let btnHTML = "button HTML Element";

let button = `<button title="${btnHTML}">Submit</button>`;

console.log(button);

// Q2: Create a function that returns a list element (<li>) HTML 
// use this function to create an ordered list HTML structure of numbers from 
// 1-30 without breaking the template string invocation i.e. usage of += is disallowed.
function list(array) {
	let array_li = array.map(  num => {

		return `<li>${num}</li>`;		

	}).join("\n");

	return `<ol>${array_li}</ol>`;
}

console.log(list(newArray));

// Q3: Now only print the even numbers. Again, breaking the template string
// invocation is disallowed

let liArray = [];

for( const a of newArray) {

	if(a % 2 == 0) {
		liArray.push(`<li>${a}</li>`)
	}
}

console.log(`<ol> ${liArray.join("\n")} </ol>`)
