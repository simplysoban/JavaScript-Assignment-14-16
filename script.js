console.log("-----------------")
console.log("Question 1, 2, 3, 4, 5, 6, 7")
console.log("-----------------")

var emptyArray = [];
var strArray = ["string"];
var numArray = [0];
var boolArray = [true];
var mixArray = ["string", 10, true];
var qualificationsPk = ["SSC", "HSC", "Diploma", "Degree", "Master", "PhD"];

console.log("1)", qualificationsPk[0]);
console.log("2)", qualificationsPk[1]);
console.log("3)", qualificationsPk[2]);
console.log("4)", qualificationsPk[3]);
console.log("5)", qualificationsPk[4]);
console.log("6)", qualificationsPk[5]);


console.log("-----------------")
console.log("Question 8")
console.log("-----------------")

var students = ["Soban", "Taha", "Ishmaan"];
var score = [350, 250, 450];
var percentage = [(350 / 500)*100 + "%", (250 / 500)*100 + "%", (450 / 500)*100 + "%"];

console.log(`Score of ${students[0]} is ${score[0]}. Percentage ${percentage[0]}`)
console.log(`Score of ${students[1]} is ${score[1]}. Percentage ${percentage[1]}`)
console.log(`Score of ${students[2]} is ${score[2]}. Percentage ${percentage[2]}`)


console.log("-----------------")
console.log("Question 9")
console.log("-----------------")

var colors = ["red", "yellow", "blue"];
console.log("Colors: ", colors);

var begColor = prompt("Enter a color you want to add in the beginning of the array: ")
colors.unshift(begColor);
console.log("Added one color in the start: ", colors);

var endColor = prompt("Enter a color you want to add in the end of the array: ")
colors.push(endColor);
console.log("Added one color in the end: ", colors);

colors.unshift("White, Black")
console.log("Added two more colors in the start: ", colors);

colors.shift()
console.log("Removed one color from the start: ", colors);

colors.pop()
console.log("Removed one color from the end: ", colors);

var indexNum = prompt("On which index you want to add a color? ")
var indexColor = prompt("What color you want to add to that index? ")

colors.splice(indexNum, 0, indexColor);
console.log("Added one color at the given index: ", colors);

var indexRemove = prompt("From which index you want to remove a color? ")
var indexQuantity = prompt("How many colors you want to remove from that index? ")
colors.splice(indexRemove, indexQuantity);
console.log("Removed desired number of colors from the desired index: ", colors);


console.log("-----------------")
console.log("Question 11")
console.log("-----------------")


var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar", "Multan"];
var selectedCities = cities.slice(2, 5);
console.log("Selected cities: ", selectedCities);


console.log("-----------------")
console.log("Question 13")
console.log("-----------------")


var devices = ["Keyboard", "Mouse", "Monitor", "Printer", "Scanner"];
console.log("Out: ", devices[0]);
console.log("Out: ", devices[1]);
console.log("Out: ", devices[2]);
console.log("Out: ", devices[3]);
console.log("Out: ", devices[4]);


console.log("-----------------")
console.log("Question 14")
console.log("-----------------")


var newdevices = ["Keyboard", "Mouse", "Monitor", "Printer", "Scanner"];
console.log("Out: ", devices[4]);
console.log("Out: ", devices[3]);
console.log("Out: ", devices[2]);
console.log("Out: ", devices[1]);
console.log("Out: ", devices[0]);

