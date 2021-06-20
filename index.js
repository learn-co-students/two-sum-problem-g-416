// step 1: Clarify the problem:
  // - We want to find each pair (2 numbers) in array that
  //   sum up to the given target that is passed in as an argument
  // - Are there any edge cases?
  
  //  - edge cases:
  //    . length of array is less than 2, than just return
  //      - because it does not contain any pairs to sum
  //    . Are we only dealing with whole numbers(integer) or are floats involved? 
//        - if floats are involved, we might need some kind of rounding method
  //    . Are we dealing with negatives?
  //      - if we are, should we convert to positive before summing?
//      . Are strings involved ?
//        - if so, need to convert to numbers

  // - Questions to ask about problem:
    // Repeat the question:
    // . So let me clarify, the problem is asking us 
    //   to return an array of pairs that sum up to the target?
    // Determine the scope:
    // . Okay so it seems like we are only dealing with numbers
    //   that are positive and or negative integers not strings
    //   or any other data types. Also that the array can be empty is that correct?
    
  // 1. Give an example of the problem and solution:
    // ex: array: [2, -4, 6, 0, 3, 3] target: 6 
    // solution: [3, 3, 6, 0]

// Step 2: Problem Solving
  // 1. Break down what your brain is doing
  // . Given my example, there are two pairs of numbers that
  // add up to the target sum 
  // . Starting at the first element I'm iterating through the array 
  //   I'm summing the current number with number at next index
  //   If the numbers add up to target, I add them to result array
  //   I repeat this process until array length is reached and all 
  //   numbers summed. 

  // 2. Lean on brute force solution
  //  - Try every permutation to find all of the answers
  //  - consider what the time and space complexity is 
  //    - Our brute force solution would bring us to a 
  //      linear O(n) runtime because where traversing
  //      each element of the array with n values. The 
  //      space time is also linear O(n) because we are 
  //      creating a new array in memory to store the pairs.
  
  // PSEUDOCDE solution:
    /*
      pairsArray = [] // O(n) space 
      
      // O(n^2) time
      for i = 0 i < array.length i++
        for j = i + 1 j < array.length j++
          if (array[i] + array[j] == target)
            pairsArray.push(array[i], array[j])
     
      return pairsArray
    */
  
  // O(n^2) time | O(n) space
  function bruteForceTwoSum(array, targetSum) {
    const pairs = [];
    
    for (let idx = 0; idx < array.length; idx++) {
      for (let nextIdx = idx + 1; nextIdx < array.length; nextIdx++) {
        if (array[idx] + array[nextIdx] === targetSum) {
          pairs.push([array[idx], array[nextIdx]]);
        }
      }
    }
    return pairs;
  }
    
  // 3. Consider other data structures
  // - how can we do better?
  //  . Sort the array?
  //  . don't use an extra array, instead return original
  //    with only pairs that sum up to target
  //  . do we need to check the final value in array ?
  //  . use binary serach to see if matching element exists in array 
  //  . use merge sort O(n log n)
  
  function binarySearchTwoSum(array, targetSum) {
    // first sort the input array in asc order
    [].concat(array.sort((n1, n2) => n1 - n2) );
    // ex: let sum = 6
    // let a = [5, -2, 4, 9, 1] sorted: [-2, 1, 4, 5, 9]
    // 6 - array[i] 
    
    let prevNums = [];
    let pairs = [];
    
    for (let idx = 0; idx < array.length; idx++) {
      
      // calculate: targetSum - array[idx] to check if value in array
      let potentialMatch = targetSum - array[idx];
      if (binaryMatch(array, potentialMatch) && 
          !prevNums.includes(array[idx]) && 
          !prevNums.includes(potentialMatch)) {
        // if found, add to pairs 
        pairs.push([array[idx], potentialMatch]);
        prevNums.push(potentialMatch);
      }
    }
    return pairs;
  }
  
  function binaryMatch(array, target) {
    // bs algorithm:
      // set a pointer to min value and max value 
      // set a piointer to mid value 
      // loop while min <= max 
      // if array[mid] = target stop 
      // if array[mid] < target
      // min = mid + 1 
      // if array[mid] > target 
      // max = mid - 1 
      
    let min = 0;
    let max = array.length - 1;
      
    while (min <= max) {
      let mid = Math.floor( (max + min) / 2);
      if (array[mid] === target) {
        return true;
      } else if (array[mid] < target) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }
    // not found
    return false;

  }
  
  // 1. Can we do better?
  
  // Hash solution
  
  /*
    hash = {}
    pairs = []
    // first place all numbers in hash 
    for element in array 
      potentialMatch = target - element
      
      if hash[element]
        pairs.push([element, potentialMatch])
      else 
        hash[element] = potentialMatch
        
      return pairs
  */
  
  function hashTwoSum(array, targetSum) {
    const hash = {};
    const pairs = [];
    
    for (const element of array) {
      let potentialMatch = targetSum - element;
    
      if (potentialMatch in hash) {
        pairs.push([potentialMatch, element]);
      } 
      hash[element] = array.indexOf(element);
    }
    return pairs;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
    
    
    






















