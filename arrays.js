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

function accessElementInArray(chocolateBars[3]) {
  return (chocolateBars[3]);
}

function destructivelyRemoveElementFromBeginningOfArray() {
  
}

function removeElementFromBeginningOfArray() {
  
}

function destructivelyRemoveElementFromEndOfArray() {
  
}

function removeElementFromEndOfArray() {
  
}