"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Excercise # 1
console.log('\n Excercise # 1 \n');
let personName = "Tasleem";
let message = `Hello ${personName}
would you like to learn some Python today?`;
console.log(message);
// Excercise # 3
console.log('\n Excercise # 3 \n');
console.log(`Uppercase ${personName.toUpperCase()}`);
console.log(`LowerCase ${personName.toLowerCase()}`);
console.log(`TitleCase ${toTitleCase(personName)}`);
function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
//Excercise # 4
console.log('\n Excercise #  4 \n');
let author = "Jaun Elia";
let quote = `“Lying is the worst need of life but sometimes speaking the truth is not a bad thing.”`;
console.log(`${author}, ${quote} `);
//Excercise #  # 5
console.log('\n Excercise # 5 \n');
let message1 = ` ${author} once said , ${quote}`;
console.log(message1);
//Excercise # 6
console.log('\n Excercise # 6 \n');
let personNameWithWhitespace = "\t \n Muhammad Tasleem\n \t";
console.log(`Name with Whitespace: ${personNameWithWhitespace} `);
let strippedName = personNameWithWhitespace.trim();
console.log(`Stripped Name: ${strippedName}`);
//Excercise #  7 & 8
console.log('\n Excercise # 7 & 8 \n');
console.log(" \t ");
console.log(`Addition: ${5 + 3}`);
console.log(`substraction: ${10 - 2}`);
console.log(`Multiplication: ${2 * 4}`);
console.log(`Division: ${16 / 2}`);
// Excercise # 9
console.log('\n Excercise # 9 \n');
let num = 12;
let message2 = `MY favourite number is ${num}`;
console.log(message2);
// Excercise # 10
console.log('\n Excercise # 10 \n');
let date = new Date();
date.toDateString;
console.log(`my name ${personName} 
date&time
${date}  `); //message with my name Excercise # 10 commit with code
//Excercise # 11
console.log('\n Excercise # 11 \n');
let friedsName = ["Fareed", "Usama", "Ibad", "Haris"];
for (let i = 0; i < friedsName.length; i++) {
    console.log(`My friends Name is ${friedsName[i]}`);
}
//Excercise # 12
console.log('\n Excercise # 12 \n');
for (let i = 0; i < friedsName.length; i++) {
    let greeting = `Hello ${friedsName[i]} have a nice day!`;
    console.log(greeting);
}
//Excercise # 13
console.log('\n Excercise # 13 \n');
let cars = ["Tesla Model 3", "Honda Civic", "Ford Mustang", "BMW M3"];
for (let i = 0; i < cars.length; i++) {
    const statement = `I would like to own a ${cars[i]}.`;
    console.log(statement);
}
//Excercise # 14
console.log('\n Excercise # 14 \n');
const guestList = ["Hamzah", "Okasha", "Bilal", "Arsalan"];
for (let i = 0; i < guestList.length; i++) {
    const invitation = `Dear ${guestList[i]},\n\tYou are cordially invited to dinner. It would be an honor to have you join us.`;
    console.log(invitation);
}
//Excercise # 15
console.log('\n Excercise # 15 \n');
let guestCantMakeIt = guestList.pop();
console.log("After update guest list");
for (let i = 0; i < guestList.length; i++) {
    let invitation = `Dear ${guestList[i]},\n\tYou are cordially invited to dinner. It would be an honor to have you join us.`;
    console.log(invitation);
}
//Excercise # 15 point 1
console.log(`Unfortunately, ${guestCantMakeIt} can't make it to the dinner.`);
//Excercise # 15 point 2 & 3
let replaceOfguestCantMakeIt = guestList.push(`Mustafa`);
for (let i = 0; i < guestList.length; i++) {
    let invitation = `Dear ${guestList[i]},\n\tYou are cordially invited to dinner. It would be an honor to have you join us.`;
    console.log(invitation);
}
//Excercise # 16
console.log('\n Excercise # 16 \n');
let Additionalguest = guestList.push("Faraz", "Shehriyar", "Hammad");
for (let i = 0; i < guestList.length; i++) {
    let invitation = `Dear ${guestList[i]},\n\tYou are cordially invited to dinner. It would be an honor to have you join us.`;
    console.log(invitation);
}
console.log("\nGood news! We found a bigger dinner table, so there's more space available. Looking forward to seeing everyone!");
guestList.unshift("Adeel");
guestList.splice(3, 0, "Daniyal");
console.log("\nNew Invitations:");
for (let i = 0; i < guestList.length; i++) {
    let invitation = `Dear ${guestList[i]},\n\tYou are cordially invited to dinner. It would be an honor to have you join us.`;
    console.log(invitation);
}
//Excercise # 17
console.log('\n Excercise # 17 \n');
console.log("\nUnfortunately, due to limited space, we can only invite two people for dinner.");
// Remove guests until only two names remain
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
// Print invitations for the two remaining guests
console.log("\nInvitations for the two remaining guests:");
for (let i = 0; i < guestList.length; i++) {
    let invitation = `Dear ${guestList[i]},\n\tYou are still invited to dinner. We look forward to seeing you!`;
    console.log(invitation);
}
// Remove the last two names from the list
function lengthofGuest() {
    return guestList.length;
    guestList.pop();
    guestList.pop();
}
;
// Print the final list (should be empty)
console.log("\nFinal Guest List:", guestList);
//Excercise # 18
console.log('\n Excercise # 18 \n');
let placesToVisit = ["karachi", "Lahore", "islamabad", "Abotabad", "Kashmir"];
console.log("Original Order:", placesToVisit);
console.log("Alphabetical Order:", [...placesToVisit].sort());
console.log("Original Order (unchanged):", placesToVisit);
console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());
console.log("Original Order (unchanged):", placesToVisit);
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
placesToVisit.reverse();
console.log("Back to Original Order:", placesToVisit);
placesToVisit.sort();
console.log("Alphabetical Order:", placesToVisit);
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Reverse Alphabetical Order:", placesToVisit);
//Excercise # 19
console.log('\n Excercise # 19 \n');
console.log(`Number of people invited for the dinner ${lengthofGuest()}`);
//Excercise # 20
console.log('\n Excercise # 20 \n');
let favoritecars = ["Tesla Model S", "Porsche 911", "Ford Mustang", "Toyota Supra", "BMW M3"];
// Print the list of favorite cars
console.log("My Favorite cars:");
for (let i = 0; i < favoritecars.length; i++) {
    console.log(` ${favoritecars[i]}`);
}
//Excercise # 21
console.log('\n Excercise # 21 \n');
//create object for car
let car = [
    { type: "Tesla ",
        model: "Model S",
        year: 2012 },
    { type: "Porsche 911 ",
        model: "Model S",
        year: 2010 },
    { type: "Ford  ",
        model: "Mustang",
        year: 2016 },
    { type: "Toyota  ",
        model: "Supra",
        year: 2019 },
    { type: "BMW ",
        model: "M3",
        year: 2021 },
];
for (let i = 0; i < car.length; i++) {
    console.log(`
    ${car[i].type} 
    ${car[i].model} 
    ${car[i].year}`);
}
//Excercise # 22
console.log('\n Excercise # 22 \n');
console.error(car[10]);
//Excercise # 23
console.log('\n Excercise # 23 \n');
let car2 = 'subaru';
// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car2 == 'subaru');
// Test 2
console.log("Is car === 'subaru'? I predict True.");
console.log(car2 === 'subaru');
// Test 3
console.log("Is car != 'honda'? I predict True.");
console.log(car2 != 'honda');
// Test 4
console.log("Is car !== 'HONDA'? I predict True.");
console.log(car2 !== 'HONDA');
// Test 5
console.log("Is car.toLowerCase() === 'subaru'? I predict True.");
console.log(car2.toLowerCase() === 'subaru');
// Test 6
console.log("Is car == 'Subaru'? I predict False.");
console.log(car2 == 'Subaru');
// Test 7
console.log("Is car === 'Subaru'? I predict False.");
console.log(car2 === 'Subaru');
// Test 8
console.log("Is car != 'subaru'? I predict False.");
console.log(car2 != 'subaru');
// Test 9
console.log("Is car === undefined? I predict False.");
console.log(car === undefined);
// Test 10
console.log("Is car !== null? I predict True.");
console.log(car !== null);
//Excercise # 24
console.log('\n Excercise # 24 \n');
let numberA = 42;
let numberB = 27;
let colors = ['red', 'blue', 'green'];
// Tests for equality and inequality with strings
console.log("Is car == 'subaru'? I predict True.");
console.log(car2 == 'subaru'); // True
console.log("Is car === 'subaru'? I predict True.");
console.log(car2 === 'subaru'); // True
console.log("Is car != 'honda'? I predict True.");
console.log(car2 != 'honda'); // True
console.log("Is car !== 'Subaru'? I predict True.");
console.log(car2 !== 'Subaru'); // True
// Tests using the lowercase function
console.log("Is car.toLowerCase() === 'subaru'? I predict True.");
console.log(car2.toLowerCase() === 'subaru'); // True
// Numerical tests
console.log("Is numberA > numberB? I predict True.");
console.log(numberA > numberB); // True
console.log("Is numberA < numberB? I predict False.");
console.log(numberA < numberB); // False
console.log("Is numberA >= numberB? I predict True.");
console.log(numberA >= numberB); // True
console.log("Is numberA <= numberB? I predict False.");
console.log(numberA <= numberB); // False
// Tests using "and" and "or" operators
console.log("Is numberA > numberB && car === 'subaru'? I predict True.");
console.log(numberA > numberB && car2 === 'subaru'); // True
console.log("Is numberA > numberB || car === 'honda'? I predict True.");
console.log(numberA > numberB || car2 === 'honda'); // True
// Test whether an item is in an array
console.log("Is 'red' in the colors array? I predict True.");
console.log(colors.includes('red')); // True
// Test whether an item is not in an array
console.log("Is 'yellow' not in the colors array? I predict True.");
console.log(!colors.includes('yellow')); // True
//Excercise # 25 ,26 and 27
console.log('\n Excercise # 25 ,26 & 27 \n');
let allien_color = ["green", "yellow", "red"];
let player_score = 0;
if (allien_color[0] === "green") {
    player_score = +5;
    console.log("The player just earned  points.", player_score);
}
if (allien_color[0] === "blue") {
    player_score = +5;
    console.log("The player just earned 5 points.", player_score);
}
else {
}
if (allien_color[1] === "green") {
    player_score = +5;
    console.log("the player just earned points for shooting the alien.", player_score);
}
else if (allien_color[1] != "green") {
    player_score = +10;
    console.log("the player just earned  points", player_score);
}
else {
    console.log("wrong credentials");
}
if (allien_color[0] === "green") {
    player_score = +5;
    console.log("the player just earned  points for shooting the alien.", player_score);
}
else if (allien_color[0] == "yellow") {
    player_score = +10;
    console.log("the player just earned  points", player_score);
}
else if (allien_color[0] == "red") {
    player_score = +15;
    console.log("the player just earned  points", player_score);
}
else {
    console.log("gameover");
}
//Excercise # 28
console.log('\n Excercise # 28 \n');
let personAge = 0;
function ageCriteria(personAge) {
    if (personAge < 2) {
        console.log("Person is baby");
    }
    else if (personAge >= 2 && personAge < 4) {
        console.log("person is tolder");
    }
    else if (personAge >= 4 && personAge < 13) {
        console.log("PERSON IS KID ");
    }
    else if (personAge >= 13 && personAge < 20) {
        console.log("PERSON IS TEENAGER ");
    }
    else if (personAge >= 20 && personAge < 65) {
        console.log("PERSON IS ADULT ");
    }
    else if (personAge >= 65) {
        console.log("PERSON IS ELDER");
    }
}
ageCriteria(65);
//Excercise # 29
console.log('\n Excercise # 29 \n');
let favorite_fruit = ["banana", "strawberry", "apple", "kiwi", "grapes"];
function fruits(fruit) {
    if (fruit === favorite_fruit[0]) {
        console.log(`such as You really like ${fruit}`);
    }
    else if (fruit === favorite_fruit[0]) {
        console.log(`such as You really like ${fruit}`);
    }
    else if (fruit === favorite_fruit[1]) {
        console.log(`such as You really like ${fruit}`);
    }
    else if (fruit === favorite_fruit[2]) {
        console.log(`such as You really like ${fruit}`);
    }
    else if (fruit === favorite_fruit[3]) {
        console.log(`such as You really like ${fruit}`);
    }
    else if (fruit === favorite_fruit[4]) {
        console.log(`such as You really like ${fruit}`);
    }
    else {
        console.log(` ${fruit} is not in your favorite fruit  list`);
    }
}
fruits("chico");
// //Excercise # 30
console.log('\n Excercise # 30 \n');
let usernames = ['admin', 'Tasleem', 'hamzah', 'jamal', 'kashan'];
function user(user) {
    if (user === usernames[0]) {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
}
user("faraz");
//Excercise # 31
console.log('\n Excercise # 31 \n');
usernames = [];
function user2(user) {
    if (usernames.length > 0) {
        if (user === usernames[0]) {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log(`Hello ${user}, thank you for logging in again.`);
        }
    }
    else {
        console.log("your user list is Empty");
    }
}
user2("daniyal");
//Excercise # 32
console.log('\n Excercise # 32 \n');
// Make a list of current users
const currentUsers = ['Tasleem', 'shehriyar', 'Faraz', 'Subhan', 'Ahtisham'];
// Make another list of new users
const newUsers = ['Ahtisham', 'Tasleem', 'Kashan', 'Daniyal', 'Faraz'];
// Loop through new users to check for uniqueness
for (const newUser of newUsers) {
    // Check case-insensitive uniqueness
    const isUsernameTaken = currentUsers.some((currentUsername) => currentUsername.toLowerCase() === newUser.toLowerCase());
    // Display appropriate message
    if (isUsernameTaken) {
        console.log(`The username '${newUser}' is not available. Please enter a new username.`);
    }
    else {
        console.log(`The username '${newUser}' is available.`);
    }
}
//Excercise # 33
console.log('\n Excercise # 33 \n');
// Store numbers 1 through 9 in an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
for (const number of numbers) {
    // Use if-else chain to determine the proper ordinal ending
    let ordinalEnding;
    if (number === 1) {
        ordinalEnding = 'st';
    }
    else if (number === 2) {
        ordinalEnding = 'nd';
    }
    else if (number === 3) {
        ordinalEnding = 'rd';
    }
    else {
        ordinalEnding = 'th';
    }
    console.log(`${number}${ordinalEnding}`);
}
///Excercise # 34
console.log('\n Excercise # 34 \n');
const favoritePizzas = ['Margherita', 'Pepperoni', 'BBQ Chicken'];
for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(`i like  ${favoritePizzas[i]} pizza`);
}
console.log(`I really love pizza`);
//Excercise # 35
console.log('\n Excercise # 35 \n');
const animals = ['Dog', 'Cat', 'Rabbit'];
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i].toLowerCase()} would make a great pet.`);
}
console.log(`Any of these animals would make a great pet!`);
//Excercise # 36
console.log('\n Excercise # 36 \n');
function makeShirt(size, message) {
    console.log(`Shirt size: ${size.toUpperCase()}`);
    console.log(`Message: ${message}`);
}
console.log(`Make Shirt `);
makeShirt('medium', `“Speak up, even when your voice shakes.”`);
//Excercise # 37
console.log('\n Excercise # 37 \n');
function makeShirt2(size, message) {
    if (size == "large" || size == "medium") {
        message = "I love Type script";
    }
    console.log(`Shirt size: ${size.toUpperCase()}`);
    console.log(`Message: ${message}`);
}
makeShirt2("medium", "abc");
//Excercise # 38
console.log('\n Excercise # 38 \n');
function describeCity(city, country = 'Unknown') {
    console.log(`${city} is in ${country}.`);
}
describeCity('Karachi', 'Pakistan');
describeCity('New York');
describeCity('Tokyo', 'Japan');
//Excercise # 39
console.log('\n Excercise # 39 \n');
function cityCountry(city, country) {
    return `${city}, ${country}`;
}
const location1 = cityCountry('Lahore', 'Pakistan');
const location2 = cityCountry('Paris', 'France');
const location3 = cityCountry('Sydney', 'Australia');
console.log(location1);
console.log(location2);
console.log(location3);
//Excercise # 40
console.log('\n Excercise # 40 \n');
function makeAlbum(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = makeAlbum('Artist1', 'Album1');
const album2 = makeAlbum('Artist2', 'Album2', 12);
const album3 = makeAlbum('Artist3', 'Album3');
console.log(album1);
console.log(album2);
console.log(album3);
//Excercise # 41
console.log('\n Excercise # 41 \n');
function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
const magicianNames = ['Merlin', 'David Copperfield', 'Houdini', 'Luna'];
showMagicians(magicianNames);
//Excercise # 42
console.log('\n Excercise # 42 \n');
function makeGreat(magicians) {
    return magicians.map((magician) => `the Great ${magician}`);
}
const greatMagicians = makeGreat(magicianNames);
showMagicians(greatMagicians);
//Excercise # 43
console.log('\n Excercise # 43 \n');
console.log("Original Magicians:");
showMagicians(magicianNames);
console.log("\nModified Magicians:");
showMagicians(greatMagicians);
//Excercise # 44
console.log('\n Excercise # 44 \n');
function orderSandwich(...items) {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("No items selected for the sandwich.");
    }
    else {
        console.log("Items:");
        for (const item of items) {
            console.log(`- ${item}`);
        }
    }
    console.log();
}
orderSandwich('Turkey', 'Cheese', 'Lettuce', 'Tomato');
orderSandwich('Ham', 'Swiss Cheese');
orderSandwich();
//Excercise # 45
console.log('\n Excercise # 45 \n');
function createCar(manufacturer, model, ...otherInfo) {
    const car = {
        manufacturer,
        model,
    };
    const keyValuePairs = otherInfo.reduce((acc, item, index) => {
        if (index % 2 === 0) {
            acc[item] = otherInfo[index + 1];
        }
        return acc;
    }, {});
    Object.assign(car, keyValuePairs);
    return car;
}
const myCar = createCar("Toyota", "Camry", "color", "red", "sunroof", true);
console.log(myCar);
