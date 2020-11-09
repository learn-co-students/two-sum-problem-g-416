function bruteForceTwoSum(array, sum) {
    let pairs = []

    for (let i = 0 ; i < array.length; i++) {
        for (let a = i + 1; a < array.length; a++) {
            if (i !== a && sum === array[i] + array[a]) {
                pairs.push([array[i], array[a]])
            }
        }
    }
    return pairs
}

function binarySearchTwoSum(array, sum) {
    let pairs = []
    let valuesAdded = []
    const sorted = array.sort(function(a, b) {
        return a - b;
    });
    for (let i = 0; i < array.length; i++) {
        const target = sum - array[i] 
        if (binaryMatch(sorted, target)) {  // how do i track pairs that have already been added and prevent duplicates?       
            if (!valuesAdded.includes(target)) {
                valuesAdded.push(target, array[i])
                pairs.push([array[i], target]) 
            }
        }
    }
    return pairs 
}

function binaryMatch(sorted, target) {
    let half = Math.floor(sorted.length / 2)
    if (sorted.length == 0) {
        return false 
    }
    if (sorted[half] == target) {
        return true 
    } else if (half == 0) {
        return false 
    } else if (sorted[half] < target) {
        sorted = sorted.slice(half)  
        return binaryMatch(sorted, target)      
    } else {
        sorted = sorted.slice(0, half)
        return binaryMatch(sorted, target)
    }
}

function hashTwoSum(array, sum) {
    let pairs = []
    let hash = {}
    let valuesAdded = []

    for (const element of array) {
        const value = sum - element 
        hash[element] = value 
        if (!!hash[value] && !valuesAdded.includes(value)) {
            pairs.unshift([value, element])
            valuesAdded.push(value,element)
        }
    }
    return pairs
}