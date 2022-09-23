//Create a car object, add a color property to it with the value equals 'black'
//Change the color property of the car object to 'green'
//Add the power property to the car object, which is a function and displays the engine power to the console

let car = {
    color: 'Black',
  };
console.log(car);

car.color = 'Green';
car.power = showPower(138);

function showPower(P) {
    let power = P + "kW";
    console.log(power);
    return power;
  };

console.log(car);


//Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples

function getFruits(a,b) {
  let fruits = console.log(`There is ${a} pears and ${b} apples in the warhouse!`);
  return fruits;
}
getFruits(5,7);


//Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)

function greetings() {
  let name = "Dmitrii";
  
  if (prompt("What is your name?", "") == name) {
    alert(`Hello, ${name}`);
} else {
    alert("There is no such name!");
}
}

greetings();


//Write a function for calculating the type of argument and type output to the console

let a;
checkType(a);
a = 5;
checkType(a);
a = "Text";
checkType(a);

function checkType () {
    (typeof a == 'string') ? console.log("It is String!") :
    (typeof a == 'boolean') ? console.log("It is Boolean!") :
    (typeof a == 'number') ? console.log("It is Number!") :
    (a === null) ? console.log("It is null!") :
    (a === NaN) ? console.log("It is NaN!") :
    (typeof a == 'function') ? console.log("It is Function!") :
    (typeof a == 'bigint') ? console.log("It is BigInt!") :
    (typeof a == 'symbol') ? console.log("It is Symbol!") :
    (typeof a == 'object') ? console.log("It is Object!") :
    console.log("Looks like it is undefined!") ;   
}

//Write a function that determines whether a number is prime or not

function isPrime(num) { 
  if (num <= 1) return `${num} is a negative and not a prime number!`; // check negatives
  if (num % 2 == 0 && num > 2) return `${num} is an even and not prime number!`; // check even numbers
  const s = Math.sqrt(num); 
  for(let i = 3; i <= s; i += 2) { 
      if (num % i === 0) return `${num} is not a prime number!`; // 
  }
  return `${num} is a prime number!`;
}

console.log(isPrime(127));
console.log(isPrime(-1));
console.log(isPrime(14));
console.log(isPrime(121));