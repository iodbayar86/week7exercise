var myHeading= document.getElementById('myHeading');
	
	myHeading.innerText= 'Javascript is a very complex codes that will seem very confusing.';

var myNewHeading= document.getElementById('myNewHeading');

// this function enables users when they write some text in the input and clicks the button, the text shows up below inside the h1 myNew Heading.
function getInfo() {
	userInput = document.getElementById('userInput').value;
	console.log(userInput);
	myNewHeading.innerText = userInput
}

// this variable contains five strings 
var myArray = ['the', ' best way', ' to', ' understand JavaScript is', ' to practice coding!' ];

// for loop ables to loop around the five strings
for (var i = 0; i < myArray.length; i++) {
	console.log(myArray[i]);

}


// variable contains objects that has 3 items and console logs each item without for loop
var myObjects = {
	name: 'Odbayar',
	age: 31,
	isFemale: false
};

console.log(myObjects.name);
console.log(myObjects.age);
console.log(myObjects.isFemale);

var heading1 = document.getElementById('heading1');
var heading2 = document.getElementById('heading2');
var heading3 = document.getElementById('heading3');

	heading1.innerText = myObjects.name;
	heading2.innerText = myObjects.age;
	heading3.innerText = myObjects.isFemale;

var myArrayobj = [
	
	{
		make: 'Mcdonnell Douglas',
		model: 'MD-80',
		engine: 'twin-engine turbojet'
	}, 

	{
		make:'Boeing',
		model:'737',
		engine:'twin turbofan'
	},

	{
		make: 'Bombardier',
		model: 'Q400',
		engine: 'twin turboprop'
	}
];

for(var i = 0; i < myArrayobj.length; i++) {
	console.log(myArrayobj[i].name);
	console.log(myArrayobj[i].model);
	console.log(myArrayobj[i].engine);
}



document.body.style.color = "red";










// Exercises
// Important: Make sure to add comments to your code to help your future self.
// Create a copy of your template folder and rename it to week7exercise.
// Drag this new folder into your 'week7' folder inside your 'codify' folder.
// Open Github and your terminal/Git Bash. Push your empty week7exercise project to Github before we begin. 
// Refer once more to this guide if you need to.

// In HTML: Make an h1 and give it a unique Id. Using Javascript, insert some text into that element.

// In HTML: Create an input and give it a unique ID. Then create a button with an onclick attribute which invokes a function. 
// Name this function whatever you’d like.

// In JS: Declare your function and inside it, store the value of the input in a variable, with a name of your choice. 
// The way this will work is, a user will type something into the input field and then click the button, which will 
// invoke your function and store what they have typed in into a variable.

// In JS: Add a console.log command to your function to also log the value of your variable to the console when the function runs. 
// Test your function. Is the console correctly displaying what you typed into the input? If not, 
// take a closer look at your function code and try to identify the issue.

// In HTML: Create another h1 with a unique ID.

// In JS: Add additional code to your function which takes your variable and inserts the text into the new h1.
 // Now, when a user types into the input and clicks the button, they should see their text populate in an h1 elsewhere on your page.

// In JS: Create a variable and store an array inside it of five strings. Using a for loop, log each string in 
// the array to the console, one at a time.

// In JS: Create an object with at least three separate properties and values. Log each property value to the 
// console, one at a time (Note: do not use a for loop for this).

// In HTML: Create three HTML heading elements, each with a unique ID.

// In JS: Insert the value of one of your object’s property values into each new heading element.

// In JS: Create a variable and store an array in it. In this array, create three objects, with three properties each. 
// Using a for loop, log the property values of each object to the console.

// In JS: Now write a line of code which changes all of the text inside your HTML body element to red 
// (HINT: you can select your body element very easily with “document.body”).

// Refer to this guide to update your Github repository with your completed week 7 exercises when you’re done!