// .reduce() = reduce the elements of an array
//              to a single value
const prices =[1,2,3,4,5];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element){
   return accumulator + element;        //The returned value is passed to the accumulator of parameter
}
