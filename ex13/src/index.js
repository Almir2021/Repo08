//Only change code below this line
 function randomRangeNumber(minNumber,maxNumber) {
     var  random1 = Math.floor(Math.random() * (maxNumber -  minNumber)) + minNumber ;
   
     return random1;
 }

console.log(randomRangeNumber(15,22));

// Only change code above this line
module.exports = randomRangeNumber;