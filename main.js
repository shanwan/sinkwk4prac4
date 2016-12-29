// Kitchen Sink
//
// Write a function that takes a variable and using the typeof operator console logs different messages. If it is a:
// string: it should just console log it
// number: it should square it and console log the result
// boolean: it should console log either 'yes' or 'no'
// function: it should invoke the function()
// undefined: it should scold the user of the function for passing in bad data

// var x = function testLog() {
//   console.log('this is a function');
// }
// var x = ['a','b','c','d','e']
var x = {
  wheels: 4,
  doors: 2,
  seats: 5
};

function msgLog(x) {
  var msg = typeof (x);
  console.log('what is ' + Array.isArray(x));
  console.log('what is ' + msg);
  if (msg === 'string') {
    console.log('string is ' + x);
  } else if (msg === 'number') {
    var result = x * x
    console.log('math result is ' + result);
  } else if (msg === 'boolean') {
    if (x === true) {
      console.log('boolean and it is a yes');
    } else {
      console.log('boolean and it is a no');
    }
  } else if (msg === 'function') {
      x()
  } else if ((msg === 'object') && (Array.isArray(x) === true)) {
    var i = 0
    while ( i < x.length) {
      console.log(x[i]);
      i++
    }
  } else if ((msg === 'object') && ( x !== null)) {
    for (var key in x) {
      console.log(x[key]);
    }
  } else if (x === null) {
    console.log('you have a null object');
  } else {
    console.log('you should not pass in bad data');
  }
}

msgLog(x)

// Bonus
//
// If it is an array or object, javascript will return it's type as object, you can use the isArray Method to check if it is an array and complete the following extensions:
// array: loop through each element and console log it
// object: loop through each key and console log the value there
// null: is also technically an object so you can work out how to check for that


// Super Bonus
//
// In the above where you are given an array/object, rather than console log the result, call the kitchenSink function again with each element in the array passed in as an arguement - this is called Recursion btw, it's considered pretty advanced stuff :-)
