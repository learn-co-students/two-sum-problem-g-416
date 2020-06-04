function bruteForceTwoSum(arr, sum){
  let solution = []
  for (let num of arr){
    if (checkSolutions(num, solution)){
      let num2 = sum - num
      if (arr.includes(num2)){
          solution.push([num, num2])
      }
    }
  }
  return solution
}

function binarySearchTwoSum(arr, sum){
 let solution = []
 let array = mergeSort(arr)
 for(let num of array){
   if (checkSolutions(num, solution)){
     let num2 = sum - num
     if (binaryMatch(array, num2)){
       solution.push([num, num2])
     }
   }
 }
 return solution
}

function binaryMatch(array, num){
  while(array.length > 1){
  let midpoint = Math.round(array.length/2)
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)
  if(secondHalf[0] > num ){
    return binaryMatch(firstHalf, num)
  }
  else if (secondHalf[0] === num || firstHalf[0] === num) {
    return true
  }
  else{
    return binaryMatch(secondHalf, num)
  }}
  if (array[0] === num){
    return true
  }
  else{
    return false
  }
}

function checkSolutions(num, solution){
  let answer = true
  solution.forEach(arr => arr.includes(num) ? answer = false : null )
  return answer
}

function findMinAndRemoveSorted(array){
  return array.shift()
}

function merge(array1 , array2){
  let sorted = [];
  while(array1.length > 0 && array2.length > 0){
    if (array1[0] > array2[0]){
      sorted.push(findMinAndRemoveSorted(array2))
    }
    else{
      sorted.push(findMinAndRemoveSorted(array1))
    }
  }
  return sorted.concat(array1).concat(array2)
}

function mergeSort(array){
  let midpoint = Math.round(array.length/2)
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)
  if (array.length < 2){
    return array
  }
  else{
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}

function hashTwoSum(arr, sum){
  let solution = []
  let hash = createHash(arr)
  for(let num of arr){
    if (checkSolutions(num, solution)){
      let num2 = sum - num
      if(hash[num2]){
        solution.push([num, num2])
      }
    }
  }
  return solution
}

function createHash(arr){
  let hash = {}
  arr.forEach(el => hash[el] = true)
  return hash
}
