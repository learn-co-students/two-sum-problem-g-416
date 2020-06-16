function bruteForceTwoSum(array, sum){
    let solution = []
    for (let i=0; i<array.length; i++){
        for (let j = i + 1; j<array.length; j++){
        if (array[i] + array[j] === sum) {
            solution.push([array[i], array[j]])
        }
        }
    }
    return solution
}

function binarySearchTwoSum(array, sum){
    let nums = []
    let prevNums = []
    let sortedArray = array.sort()
    for(let i in sortedArray){
        let addend = binaryMatch(sortedArray, sum-sortedArray[i])
        if (!!addend && !prevNums.includes(array[i]) && !prevNums.includes(addend)){
            nums.push([sortedArray[i], addend])
            prevNums.push(addend)
        }
    }
    return nums
}

function binaryMatch(array, target, start = 0, end = array.length-1){
    let midPoint = Math.floor(start+(end-start)/2)
    switch (true){
        case array[start] === target:
            return array[start]
        case array[midPoint] === target:
            return array[midPoint]
        case array[end] === target:
            return array[end]
        case end - start === 0:
            return false
        case array[midPoint] > target:
            return binaryMatch(array, target, start+1, midPoint -1)
        case array[midPoint] < target:
            return binaryMatch(array, target, midPoint+1, end-1)
    }
    return false
}


function hashTwoSum(array, sum){
    let sums = []
    let hashTable = {}
    for (let i =0; i< array.length; i++){
        let sumMinusElement = sum - array[i]
        if (hashTable[sumMinusElement] !== undefined){
            sums.push([sumMinusElement, array[i]])
        }
        hashTable[array[i]] = array[i]
    }
    return sums
    console.log(hashTable)
}