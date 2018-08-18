var chocolateBars = ["sncickers", "hundred grand", "kitkat", "skittles"];

var gummies = "foo"

function addElementToBeginningOfArray(chocolateBars, gummies) {
  return [gummies, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, gummies) {
  chocolateBars.unshift(gummies);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, gummies) {
  return[...chocolateBars, gummies];
}

function destructivelyAddElementToEndOfArray(chocolateBars, gummies) {
  chocolateBars.push(gummies);
  return chocolateBars;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars, gummies) {
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars, gummies) {return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray() {
   return chocolateBars.slice(1);
}

function removeElementFromEndOfArray() {
  
}