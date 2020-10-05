// iterate over all elements in array
// find pairs that add up to sum
// and push into an empty array
const bruteForceTwoSum = (arr, sum) => {
  const twoSum = [];
  const uniqueSum = arr.reduce((acc, curVal) => {
    const addend = sum - curVal;
    const pair = [curVal, addend];
    if (
      curVal + addend === sum &&
      arr.includes(addend) &&
      acc.indexOf(curVal) === -1
    ) {
      return acc.concat(pair);
    }
    return acc;
  }, []);
  for (let i = 0; i < uniqueSum.length; i += 2) {
    const firstNum = uniqueSum[i];
    const secondNum = uniqueSum[i + 1];
    twoSum.push([firstNum, secondNum]);
  }
  return twoSum;
};

// ---------------------------------------------------------
// helper functions (merge sort)

// merge left and right arrays
const merge = (left, right) => {
  let sorted = [];
  while (left.length && right.length) {
    console.log(left);
    if (left[0] < right[0]) {
      // console.log(left[0])
      // console.log(sorted)
      // console.log(left.shift())
      sorted.push(left.shift());
    } else {
      // console.log(sorted)
      // console.log(right.shift())
      sorted.push(right.shift());
    }
  }
  return sorted.concat(left).concat(right);
};

// divide arr into two arrays -- left and right
// use recursion to combine left and right
const mergeSort = (arr) => {
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  if (arr.length < 2) {
    return arr;
  }
  return merge(mergeSort(left), mergeSort(right));
};
// --------------------------------------------------------------

// return true when a match is found
const binaryMatch = (arr, missingNum) => {
  let start = 0;
  let end = arr.length - 1;
  let middle;
  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle] === missingNum) {
      return true;
    } else if (arr[middle] < missingNum) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return false;
};

// let missingNum = 6;
// let sortedArray = [2, 3, 3, 4, 6, 7];
// console.log(binaryMatch(sortedArray, missingNum));

// employ binary search (the above method) to solve two sum
const binarySearchTwoSum = (arr, sum) => {
  let sortedArr = mergeSort(arr);
  let twoSum = [];
  while (sortedArr.length !== 0) {
    let num = sortedArr.shift();
    let addend = sum - num;
    let match = binaryMatch(sortedArr, addend);
    if (match) {
      twoSum.push([num, addend]);
    }
  }
  return twoSum;
};

// let array = [2, 3, 4, 3, 6, 7];
// let sum = 6;
// console.log(binarySearchTwoSum(array, sum));

// use hash to solve two sum
const hashTwoSum = (arr, sum) => {
  let twoSum = [];
  let hash = {};
  arr.forEach((val, idx) => (hash[val] = idx));
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const addend = sum - num;
    if (hash[addend] && hash[addend] !== i) {
      twoSum.push([num, addend]);
    }
  }
  return twoSum;
};

// let array = [2, 3, 4, 3, 6, 7];
// let sum = 6;
// console.log(hashTwoSum(array, sum));
