// .filter() = creates a new array by filtering
//             out elements

const ages =[11,17,18,20,22];
const adults = ages.filter(isAdult);
console.log(adults);
function isAdult(element){
    return element >= 18;
}
