const score=400;
// console.log(score)
const balance=new Number(100)
// console.log(balance);
// console.log(balance.toFixed(2));
// console.log(balance.toString().length)

// const frstNum=23.8967;
// console.log(frstNum.toPrecision(2))

// const hundreds=1000000;
// console.log(hundreds.toLocaleString('en-IN'))

// Math
// console.log(Math)
// console.log(Math.abs(-9));
// console.log(Math.round(3.9))
// console.log(Math.ceil(4.3))
// console.log(Math.floor(5.7))
// console.log(Math.max(4,7,9,0))
// console.log(Math.min(2,3,6,1))

console.log(Math.random());
// The math.random number only gives number between 0 and 1 to remove the output 0 we can print following
console.log((Math.random()*10)+1)
// now see the question of when we have min or max num
const min=10;
const max=20;
console.log((Math.random()*(max-min+1))+min)
console.log(Math.floor(Math.random()*(max-min+1))+min)
// adding min because i want number more than or min

