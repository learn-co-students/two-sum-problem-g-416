function bruteForceTwoSum(array, sum) {
    let nums = [];
    let prevNums = [];
    for(let x in array){
        for(let y in array){
            if (array[x] + array[y] === sum){
                if(!!nums.length){ 
                    if (!prevNums.includes(array[x]) && !prevNums.includes(array[y])) {
                        prevNums.push(array[x])
                        nums.push([array[x], array[y]])
                    } 
                } else {
                    nums.push([array[x], array[y]])
                    prevNums.push(array[x])
                }
            }
        }
    }
   return nums
}

function hashTwoSum(array, sum) {
    let storageHash = {}
    let nums = []
    for(let i in array) {
        let addend = sum - array[i]
        if (addend in storageHash){
            nums.push([addend, array[i]])
        }
        storageHash[array[i]] = i
    }
    return nums
}

function binarySearchTwoSum(array, sum) {
    let sortedArray = array.sort()
    let result = []
    let left = 0
    let right = array.length - 1
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
    return result
}

function binaryMatch(sortedArray, missingNum) {
    let low = 0
    let high = sortedArray.length - 1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (sortedArray[mid] === missingNum) {
            return true
        } else if (sortedArray[mid] < missingNum) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return false
}