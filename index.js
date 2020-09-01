function bruteForceTwoSum(a, sum){
  let array = a;
  let pairs = [];
  while(array.length !== 0){
    //console.log('a', a, 'array', array);
    let n = array.pop();
    array.forEach( (e) => {
      if(e + n === sum){
        pairs.unshift([e, n]);
      }
    })
  }
  return pairs;
}

function binarySearch(array, target, start=0, end=array.length-1){
  let midpoint = Math.floor(start + (end-start)/2);
  switch(true){
    case array[start] === target:
      return array[start];
    case array[midpoint] === target:
      return array[midpoint];
    case array[end] === target:
      return array[end];
    case end - start === 0:
      return false;
    case array[midpoint] > target:
      return binarySearch(array, target, start+1, midpoint-1);
    case array[midpoint] < target:
      return binarySearch(array, target, midpoint + 1, end-1);
  }
  return false;
}

function binarySearchTwoSum(array, sum){
  let sortedArray = array.sort();
  let pairs = [];
  let previousNums = [];
  for(let i in sortedArray){
    
    let addend = binarySearch(array, sum-sortedArray[i])
    if(!!addend && !previousNums.includes(addend) && !previousNums.includes(sortedArray[i])){
      pairs.push([sortedArray[i], addend]);
      previousNums.push(addend)
    }
  }
  return pairs;
}

function binaryMatch(array, number, start=0, end=array.length-1){
  let sortedArray = array.sort();
  let midpoint = Math.floor(start + (end-start)/2);
  switch(true){
    case sortedArray[start] === number:
      return true;
    case sortedArray[midpoint] === number:
      return true;
    case sortedArray[end] === number:
      return true;
    case end - start === 0:
      return false;
    case sortedArray[midpoint] > number:
      return binaryMatch(sortedArray, number, start+1, midpoint-1)
    case sortedArray[midpoint] < number:
      return binaryMatch(sortedArray, number, midpoint+1, end-1)
  }
  return false
}

function hashTwoSum(array, sum){
  let hashStorage = {};
  let nums = [];
  
  for( let i in array){
    let addend = sum - array[i];
    if(addend in hashStorage){
      nums.push( [addend, array[i]])
    }
    hashStorage[array[i]] = i
  }
  return nums
}