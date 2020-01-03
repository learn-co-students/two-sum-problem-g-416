// function which takes in array and number 
// Take each number at a particular index, and add it to each other number
// O(n^2)
//Loop for iterating over each step, loop for iterating to find each sum


function bruteForceTwoSum(nums, target){
    let pairs = []
    for(let i = 0 ; i < nums.length; i++){
    for(let j = i + 1 ; j < nums.length; j++){
       let total = nums[i] + nums[j]
       if (total === target) {
        pairs.push([nums[i], nums[j]])
       }
    }
    }
    return pairs
}

function binarySearchTwoSum(nums, target){

}

function binaryMatch(nums, target){

}

function hashTwoSum(nums, target){

}