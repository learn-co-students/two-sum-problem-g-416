// let sum = 6;
// let a = [5, -2, 4, 9, 1];

function bruteForceTwoSum(array, sum) {
  let numArray = [];
  let previousNums = [];
  for (let i in array) {
    for (let j in array) {
      if (array[i] + array[j] === sum) {
        if (!!numArray.length) {
          if (!previousNums.includes(array[i]) && !previousNums.includes(array[j])) {
            previousNums.push(array[i])
            numArray.push([array[i], array[j]])
          }
        } else {
          numArray.push([array[i], array[j]])
          previousNums.push(array[i])
        }
      }
    }
  }
  return numArray;
}

function hashTwoSum(array, sum) {
  let storedHash = {};
  let numArray = [];
  for (let i in array) {
    let addEnd = sum - array[i];
    if (addEnd in storedHash) {
      numArray.push([addEnd, array[i]])
    }
    storedHash[array[i]] = 1
  }
  return numArray;
}

function binarySearchTwoSum(array, sum) {
  let sortedArray = array.sort();
  let result = [];
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    if (sortedArray[left] + sortedArray[right] == sum) {
      result.push([sortedArray[left], sortedArray[right]])
      left += 1
      right -= 1
    } else if (sortedArray[left] + sortedArray[right] > sum) {
      right -= 1
    } else {
      left += 1
    }
  }
  return result;
}

function binaryMatch(sortedArray, missingNum) {
  let lowNum = 0;
  let highNum = sortedArray.length - 1;
  while (lowNum <= highNum) {
    let midNum = Math.floor((lowNum + highNum) / 2);
    if (sortedArray[midNum] === missingNum) {
      return true
    } else if (sortedArray[midNum] < missingNum) {
      lowNum = midNum + 1
    } else {
      highNum = midNum - 1
    }
  }
  return false
}
