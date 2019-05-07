const arr = [10, 20, 30];

function map(arr, callback) {
  let newArray = [];
  for (let i =0; i < Array.length; i++){
    let elements = callback(array[i]);
    newArray.push(elements);
  }
  return newArray;
}