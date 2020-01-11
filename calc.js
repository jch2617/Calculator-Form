"use strict"; {

/* The function takes a number, squares that number, and returns the result in a string. */

function squareNumber() {
  let total = document.createElement("div");
// adds div
  total.classList.add = "one";
// adds class to new div
  let square = document.querySelector('#square-input').value;
//grabs value of input 
  let squareD = (square*square);
// multiplies both values passed in by user
  total.textContent = `The result of squaring the number ${square} is ${squareD}`;
// content of string
  document.body.appendChild(total);
// adds div to document body
}

// creates event listener to fire function
let eventOne = document.getElementById("square-button");
eventOne.addEventListener("click", squareNumber);

/* Write a function that takes a number, divides it by 2, and returns the result */ 

function halfNumber() {
let divide = document.createElement("div");
// adds div
divide.classList.add = "two";
// adds class to new div to not confuse from the other divs
let division = document.querySelector("#half-input").value;
//grabs value of input
let half = (division/2)
// calculates value passed in by user
divide.textContent = `Half of ${division} is ${half}`;
// content of string
document.body.appendChild(divide);
// adds div to document body
}

// creates event listener to fire function
let halved = document.getElementById("half-button");
halved.addEventListener("click", halfNumber);


/* This function takes two numbers, figures out what percent the first
number represents of the second number, and returns the result in a string." */

function percentOf () {
let percent = document.createElement("div");
// adds div
percent.classList.add = "three";
// adds class to new div to not confuse from the other divs
let frac = document.querySelector("#percent1-input").value;
//grabs first value of input
let whole = document.querySelector("#percent2-input").value;
//grabs second value of input 
let calc = (frac/whole * 100); 
/* divides second by first value and converts decimal to 
a percentage */
let formatter = new Intl.NumberFormat('en-US', {
 // rounds it to 2 decimal places
 minimumFractionDigits: 2,      
 maximumFractionDigits: 2,
  });
percent.textContent = `${frac} is %${(formatter.format(calc))} percent of ${whole}`;
// logs to a string
document.body.appendChild(percent);
// adds div to document body
}

// creates event listener to fire function
let divy = document.getElementById("percent-button");
divy.addEventListener("click", percentOf);


/* Write a function called areaOfCircle that will take one argument (the radius), 
calculate the area based on that, and return the result in a string */

function areaofCircle() {
let area = document.getElementById("solution");
// this will put radius total in this div
let radius = document.querySelector("#area-input").value;
// grabs value of input
let half = (Math.PI * radius * radius);
// calculates radius and stores in variable
let form = new Intl.NumberFormat('en-US', {
// rounds it to 2 decimal places
minimumFractionDigits: 2,     
maximumFractionDigits: 2,
});
area.textContent = `The area for a circle with a radius of ${radius} is ${(form.format(half))}`;
// logs string to div
}

// creates event listener to fire function
let circle = document.getElementById("area-button");
circle.addEventListener("click", areaofCircle);


/* The function belows takes all numbers entered in input fields and 
calculates them all at once, rather calculating each number at once */
function calculateAll() {
  squareNumber();
  halfNumber();
  percentOf();
  areaofCircle();
}

// adds event listener to "Calculate All" button
let calc = document.getElementById("calc-button");
calc.addEventListener("click", calculateAll);

}