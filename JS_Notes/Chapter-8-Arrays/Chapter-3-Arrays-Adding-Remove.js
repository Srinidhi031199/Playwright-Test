let arr = [1, 2, 3];

//Add to an end

arr.push(4);
console.log(arr);

arr.pop(); //removes the last element
console.log(arr);

arr.push(4, 5, 6);
console.log(arr);

//Add at beginning
arr.unshift(0);
console.log(arr);

//Remove from beginning
arr.shift();
console.log(arr);

//splice (start, deletecount)
arr.splice(1, 2); //removes 2 items at index 1
console.log(arr);

arr.splice(2, 0, 99);
console.log(arr);

arr.slice(1, 2, 10, 20);
console.log(arr);