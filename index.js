function bruteForceTwoSum(array, sum) {
    let result = []
    for (let i = 0; i<array.length; i++) {
        for (let k = i + 1; k<array.length; k++) {
            if (i !== k && sum === array[i] + array[k]) {
                result.push([array[i], array[k]])
            }
        }
    }
    return result
}

function binarySearchTwoSum(array, sum) {
    let result = []
    let sorted = array.sort((a,b) => a < b)
    for (let i = 0; i<sorted.length; i++) {
        let remainder = sum - array[i]
        let midpoint = parseInt(sorted.length / 2)
        let firstHalf = sorted.slice(0, midpoint)
        let secondHalf = sorted.slice(midpoint)
        if (firstHalf.includes(remainder)) {
            result.push([array[i], remainder])
        }
        else if (secondHalf.includes(remainder)) {
            result.push([array[i], remainder])
        }
    }
    if (result.length !== 0) {
        return result.slice(0, result.length / 2);
    } 
    else {
        return false;
    }
}

function binaryMatch(array, sum) {
    let sorted = array.sort((a,b) => a < b)
    for (let i = 0; i<sorted.length; i++) {
        let remainder = sum - array[i]
        let midpoint = parseInt(sorted.length / 2)
        let firstHalf = sorted.slice(0, midpoint)
        let secondHalf = sorted.slice(midpoint)
        if (firstHalf.includes(remainder)) {
            return true
        }
        else if (secondHalf.includes(remainder)) {
            return true
        }
        else {
            return false
        }
    }
}

function hashTwoSum(array, sum) {
    // map each element in the array to a hash
    let result = []
    let hash = {}
    array.forEach((number, i) => hash[number] = i)
    for (let i = 0; i<array.length; i++) {
        let remainder = sum - array[i]
        if (!!hash[remainder] && hash[remainder] > i) {
            result.push([array[i], remainder])
        }
    }
    return result
}