function bruteForceTwoSum(array, sum) {
  let pairs = [];

  while (array.length != 0){
    let currNum = array.shift()

    for (let i=0; i < array.length; i++){
      if (array[i] + currNum === sum){
        pairs.push([currNum, array[i]])
      }
    }
  }

  return pairs
}

function binarySearchTwoSum(array, sum) {
  let arrSorted = mergeSort(array);
  let result = [];

  while (arrSorted.length != 0){
    let currNum = arrSorted.shift()
    let pair = sum - currNum;
    let searchResult = binaryMatch(arrSorted, pair);

    if (searchResult) {
      result.push([currNum, pair]);
    }
  }

  return result;
}

function binaryMatch(array, targetValue) {
    var min = 0;
    var max = array.length - 1;
    var guess;

    while(min <= max) {
        guess = Math.floor((max + min) / 2);

        if (array[guess] === targetValue) {
            return true;
        }
        else if (array[guess] < targetValue) {
            min = guess + 1;
        }
        else {
            max = guess - 1;
        }

    }

    return false;
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  const midpoint = Math.floor(array.length / 2);
  const left = array.slice(0, midpoint);
  const right = array.slice(midpoint);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(arrOne, arrTwo) {
  let sorted = [];

  while (arrOne.length && arrTwo.length){
    if (arrOne[0] < arrTwo[0]){
      sorted.push(arrOne.shift())
    } else {
      sorted.push(arrTwo.shift())
    }
  }

  return sorted.concat(arrOne).concat(arrTwo)
}

function hashTwoSum(array, sum) {
  let result = [];
  let hashTable = {};
  array.forEach((value, index) => hashTable[value] = index);

  for (let i=0; i < array.length; i++) {
    let currNum = array[i];
    let pair = sum - currNum;

    if (hashTable[pair] && hashTable[pair] !== i){
      result.push([currNum, pair])
    }
  }

  return result;
}