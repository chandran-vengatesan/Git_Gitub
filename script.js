//function example without return
/*
function add(a,b,c)
{
    console.log(a+b+c);
}
add(10,20,5)

function Sub(c,d,e)
{
    console.log(c-d-e);
}
Sub(100,50,25)
*/
//function example with return
/*function add(a,b,c)
{
    return(a+b+c)
}
console.log(50+30+10)*/

/*function mobile(a,b)
{
    return a+b
}
var price = mobile(10,20)

console.log(price)*/
/*/ let homework=false
if(homework)
{
    console.log("Great job")
}
else{
    console.log("Finish your homework before playing")
}*/

/*var result = [];

var odd = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            result.push(arr[i]);
        }
    }
    return result;
};

console.log(odd([1,2,3,4,5,6,7,8,9,10]));*/
/*
var odd = function (arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {   // checking odd number
            result.push(arr[i]);
        }
    }
    return result;
};

console.log(odd([1,2,3,4,5,6,7,8,9,10]));*/

let fruits = ["mangoe", "orange", "apple"];
let updatedFruits = fruits.map(fruit => fruit + "s");
console.log(updatedFruits);
