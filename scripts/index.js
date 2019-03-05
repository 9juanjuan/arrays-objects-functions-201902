// add your solutions here

let numArray = [9, 1, 2, -1, -2, -4, 3, -1, 1];

function positiveArray(arr) {
    let newArr = [];
    arr.forEach(function(el) {
        // for each element in array
        if (el > 0){
            // push element into a new array if greater than 0 (positive)
            newArr.push(el)
        }
    });
    return newArr;
};
// console.log(positiveArray(numArray));
function evenArray(arr) {
    let newArr = [];
    arr.forEach(function(el) {
        // for each element in array
        if ((el % 2) == 0) {
            // push element into new array if mod == 0 (even)
            newArr.push(el)
        }
    });
    return newArr;
}
// console.log(evenArray(numArray));
function squareArray(arr) {
    let newArr = [];
    // for each element in array
    arr.forEach(function(el) {
        // push element into new array after squaring
        newArr.push(el*el)
    });
    return newArr
}
// console.log(squareArray(numArray));
var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
  ];

function coolCities (citiesDict) {
    let coolArr = [];
    // for each element in cities "dictionary" (array) 
    citiesDict.forEach(function(val){
        // if value of temperature is less than 70 (cold)
        if (val.temperature < 70) {
            // push temperatures into array
            coolArr.push(val.temperature);
        }
    });
    return coolArr;
}
// console.log(coolCities(cities));

function coolCityNames (citiesDict) {
    let coolArr = [];
    citiesDict.forEach(function(val){
        // if value of temperature is less than 70
        if (val.temperature < 70) {
            // push into cool names array
            coolArr.push(val.name);
        }
    });
    return coolArr;
}
// console.log(coolCityNames(cities));

var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
  ];
function goodJob(arr){
    // for each name in arr
    arr.forEach(function(name){
        console.log(`Good job ${name}!`)
    });
}  

// goodJob(people);

function hullo() {
    return "Hello World!"
}

function call3Times(fun){
    let msg = fun();
    let msg2 = fun();
    let msg3 = fun();
    console.log(`${msg}, ${msg2}, ${msg3}`);
}

// call3Times(hullo);

function callNTimes(times, fun) {
    for(let i = 0; i < times; i++)
    console.log(`${fun}`)
}
// callNTimes(5,hullo());

function strMultiply (str, times){
    let empty = "";
    for(let i = 0; i < times; i++){
        empty += str;
    }
    return empty;
}
// console.log(strMultiply('lol', 5));

function sortArray(arr){
    arr.sort()
    return arr
}
// console.log(sortArray(people));

function sortArray2(arr){
    arr.sort(function(a,b){
        return a.length - b.length
    });
    return arr
}
// console.log(sortArray2(people));

var products = [
    { name: 'Basketball', price: 12.00 },
    { name: 'Tennis Racquet', price: 66.00 },
    { name: 'Tennis Balls', price: 9.00 },
    { name: 'Tennis Balls', price: 9.00 }
  ];



function sortByPrice(arr) {
    arr.sort(function(a,b){
        // sorts in order of lowest to highest price 
        return a.price - b.price
        });

    return arr
}

// console.log(sortByPrice(products));