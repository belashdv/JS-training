  
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