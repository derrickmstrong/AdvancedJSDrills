name = 'Derrick';
var name;
console.log(name);

setName();
function setName() {
  var name = 'Covalence';
  console.log(name);
}

console.log('Stage 1');
let avg = findAvg(2, 2);
console.log('Stage 2', 'Avg:', avg);
function findAvg(x, y) {
  console.log('Stage 3');
  return (x + y) / 2;
}

let fruits = ['apple', 'banana', 'pear'];
function printFruits() {
  let favFruit = fruits[2];
  console.log(fruits[0]);

  function printFavFruit() {
    let leasFav = fruit[1];
    console.log(favFruit);
  }

//   console.log(leasFav);
}
printFruits();
// printFavFruit(); Note: printFavFruits has access to favFruit variable but it still won't print because printFavFruit is hidden from the global scope

sayHello(name)
function sayHello(name){
    console.log(`Hello, ${name}`)
}

let alertName = function(){
    console.log('Name:', name)
}
alertName()