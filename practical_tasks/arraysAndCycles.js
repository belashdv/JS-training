//1 Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console

let movies = ["Bladerunner 2049", "Terminator", "Alien", "Predator"];
movies.forEach(item => console.log(item));


//2 Given an array of car manufacturers, convert the array to a string and back to an array

let carsManufacturers = ["Ford", "Volkswagen", "BMW", "Jaguar", "Honda", "Toyota"];

str = carsManufacturers.join(", ");
console.log(str);

carsManufacturers = str.split(", ");
console.log(carsManufacturers);


//3 Given an array of the names of your friends, add the words hello to each element of the array

let listOfFriends = ["Max", "Kostya", "Misha", "Ivan", "Roman", "Vasya", "Marina"];
let greetings = listOfFriends.map(item => `Hello, ${item}`);
console.log(greetings);


//4 Convert numeric array to Boolean

let numArr = [-3, -2, -1, 0, 1, 2, 3];
let booleanArr = numArr.map(item => !!item);
console.log(booleanArr);


//5 Sort the array [1,6,7,8,3,4,5,6] in descending order

let arr = [1,6,7,8,3,4,5,6];
arr.sort( (a, b) => a - b );
console.log(arr);


//6 Filter array [1,6,7,8,3,4,5,6] by value> 3

let filteredArr = arr.filter(item => item > 3);
console.log(filteredArr);


//7 Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number

function getIndex (array, b) {
    for (let key of array) {
        if (key == b) {
            let found = array.findIndex(key => key === b)
            return found;
        }
    }
}
console.log(getIndex([1,6,7,8,3,4,5,6], 8)); //expected: 3


//8 Implement a loop that will print the number 'a' until it is less than 10

for (let i = 0; i < 10; i++) {
    console.log(`${i}`);
};


//9 Implement a loop that prints prime numbers to the console

function primeLoop(a) {
    for (let i = 2; i < a; i++) {
        isPrime(i);
        if (isPrime(i) == false) {
            continue;
        } else {
            console.log(i);
        }

    };
}

function isPrime(num) { 
    
    if (num % 2 == 0 && num > 2) return false; 
    const s = Math.sqrt(num); 
    for(let i = 3; i <= s; i += 2) { 
        if (num % i === 0) return false; 
    }
    return true;
  }

primeLoop(20);


//10 Implement a loop that prints odd numbers to the console

function oddNumbersPrinter (a) {
    for (let i = 1; i < a; i++) {
        if (i % 2 == 0) {
            continue;
        } else {
            console.log(i);
        };
    };
}

oddNumbersPrinter(10);