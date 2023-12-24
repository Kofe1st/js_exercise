var existingArray = [1, 2, 3, 4, 5];
var newElement = 404;
var middleIndex = Math.floor(existingArray.length / 2);
existingArray.splice(middleIndex, 0, newElement);
console.log(existingArray);
