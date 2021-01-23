/* 
TODO: Home work for day 4
* Get First name from user
* Get Last name from user
* Add without using library function
* total length of full name
* convert full name into upper case
 */

var firstName = prompt("Enter your first Name ");
var lastName = prompt("Enter your last Name");

//! find first and last letter form first and last name.
var firstLetter = firstName.slice(0, 1).toUpperCase();
var lastLetter = lastName.slice(0, 1).toUpperCase();
var joinName = firstLetter.concat(lastLetter);

//! Marge first and last name together 
var fullName = firstName.concat(lastName).toUpperCase();

//! Finally print the results into inner html.
document.getElementById('head').innerHTML = joinName;
document.getElementById('fullname').innerHTML = fullName;