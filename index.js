function bruteForceTwoSum(array, sum){
    let pairs = []
        for(let i = 0 ; i < array.length; i++) {
        for(let j = i + 1 ; j < array.length; j++) {
        let total = array[i] + array[j]
        if (total === sum) {
            pairs.push([array[i], array[j]])
        }
        }
    }
    return pairs
}

function binarySearchTwoSum(array, sum) {
    let pairs = []
        for(let i = 0 ; i < array.length; i++) {
        for(let j = i + 1 ; j < array.length; j++) {
        let total = array[i] + array[j]
        if (total === sum) {
            pairs.push([array[i], array[j]])
        }
        }
    }
    return pairs
}

function binaryMatch(array, sum) {
    let pairs = []
        for(let i = 0 ; i < array.length; i++) {
        for(let j = i + 1 ; j < array.length; j++) {
        let total = array[i] + array[j]
        if (total === sum) {
            pairs.push([array[i], array[j]])
            return true
        }
        }
    }
    return pairs
}

function hashTwoSum(array, sum) {
    let pairs = []
        for(let i = 0 ; i < array.length; i++) {
        for(let j = i + 1 ; j < array.length; j++) {
        let total = array[i] + array[j]
        if (total === sum) {
            pairs.push([array[i], array[j]])
        }
        }
    }
    return pairs    
}