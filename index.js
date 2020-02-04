function bruteForceTwoSum(S, arr) {

      let sums = [];
    
      // check each element in array
      for (var i = 0; i < arr.length; i++) { 
    
        // check each other element in the array
        for (var j = i + 1; j < arr.length; j++) {
    
          // determine if these two elements sum to S
          if (arr[i] + arr[j] === S) {
            sums.push([arr[i], arr[j]]);
          }
        }
      }
      return sums;
    }

function hashTwoSum(arr, S) {
    let sums = [];
    let hashTable = {};

    // check each element in array
    for (var i = 0; i < arr.length; i++) {
   
      // calculate S - current element
      var sumMinusElement = S - arr[i];
  
      // check if this number exists in hash table
      // if so then we found a pair of numbers that sum to S
      if (hashTable[sumMinusElement.toString()] !== undefined) { 
        sums.push([arr[i], sumMinusElement]);
      }
  
      // add the current number to the hash table
      hashTable[arr[i].toString()] = arr[i];
  
    }
  
    // return all pairs of integers that sum to S
    return sums;
  }