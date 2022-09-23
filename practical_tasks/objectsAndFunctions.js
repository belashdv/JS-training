
/*
let user = {
    name: "John",
    surname: "Smith",
}
console.log(user);

user.name = "Pete";
console.log(user);

delete user.name;
console.log(user);


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
  console.log(sum);



  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  }
  
  multiplyNumeric(menu);

  function multiplyNumeric(obj) {
    for (let key in obj) {
       if (typeof obj[key] == "number") {  
       obj[key] *= 2;
    }
  }
}
  console.log(menu);
*/








  /* Homework part*/

  
var car = {
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