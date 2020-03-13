//not working: "adds `"I am ${i} strange loop${i === 0 ? '' : 's'}."` to an array 25 times"
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
array[i] = `I am ${i} strange loop${i === 0 ? '' : 's'}.`
    return array
  }
}

function whileLoop(n) {
  let countdown = n;
  while (countdown > 0) {
    console.log(--countdown);
  if (countdown === 0) {
    return "done";
    }
  }
}

//not working: "console logs "I run once regardless." 10 times when passed an integer of 10 as a parameter."
var i = 0;
function incrementVariable() {
  i = i + 1;
  return i;
}
function doWhileLoop(num) {
  do {
  if (i === 0) {
    console.log("I run once regardless.")
  }
  if (num === 10) {
  for (var w = 0; w < 10; w++) {
    console.log("I run once regardless.")
  } }
} while (incrementVariable() < num) }