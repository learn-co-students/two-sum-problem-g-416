function bruteForceTwoSum(array, n) {
    let pairs = []
    let fullArray = array.slice(0)
    while (fullArray.length > 1) {
        let current = fullArray.shift()
        for (let i = 0; i < fullArray.length; i++) {
            if (current + fullArray[i] === n) {
                pairs.push([current, fullArray[i]])
            }
        }
    }
    return pairs
}

function binarySearchTwoSum(array, n) {
    let sortedArray = mergeSort(array);
    
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    const middle = Math.floor(array.length/2)
    const left = array.slice(0, midddle);
    const right = array.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let result = [], leftIndex = 0, rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}