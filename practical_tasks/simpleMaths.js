let number = 5;
let text = "Text";
let boolean = true;

/*Additions*/
let sumResult1 = number + text;
console.log(sumResult1);

let sumResult2 = number + boolean;
console.log(sumResult2);

let sumResult3 = text + boolean;
console.log(sumResult3);

/*Multiplications*/
let multiResult1 = number * text;
console.log(multiResult1);

let multiResult2 = number * boolean;
console.log(multiResult2);

let multiResult3 = text * boolean;
console.log(multiResult3);

/*Divides*/
let divideResult1 = number / text;
console.log(divideResult1);

let divideResult2 = number / boolean;
console.log(divideResult2);

let divideResult3 = text / boolean;
console.log(divideResult3);

/*Conversions*/
let booleanToNumber = +boolean;
console.log(booleanToNumber);
let stringToNumber = +text;
console.log(stringToNumber);

let numberToString = String(number);
console.log(numberToString);
let booleanToString = String(boolean);
console.log(booleanToString);

let numberToBoolean = Boolean(number);
console.log(numberToBoolean);
let stringToBoolean = Boolean(text);
console.log(stringToBoolean);