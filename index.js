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
    let pairs = []
    let sortedArray = mergeSort(array);
    while (sortedArray.length > 1) {
        let current = sortedArray.shift();
        let target = n - current;
        if (binarySearch(sortedArray, target)) {
            pairs.push([current, target])
        }
    }
    return pairs;
}

function binarySearch(array, target) {
    let start = 0, end = array.length
    while (start < end) {
        let middle = Math.floor((start + end)/2)
        if (target === array[middle]) return true;

        if (target > array[middle]) return binarySearch(array.slice(middle + 1), target)

        if (target < array[middle]) return binarySearch(array.slice(0, middle - 1), target)
    }
    return false;
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    const middle = Math.floor(array.length/2)
    const left = array.slice(0, middle);
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

function binaryMatch(array, target) {
    let start = 0, end = array.length - 1
    while (start <= end) {
        let middle = Math.floor((start + end)/2)
        if (target === array[middle]) return true;

        if (target > array[middle]) return binarySearch(array.slice(middle + 1), target)

        if (target < array[middle]) return binarySearch(array.slice(0, middle - 1), target)
    }
    return false;
}

// function hashTwoSum(array, n) {
//     let hash = createHash(array)
//     console.log(Object.keys(hash))
//     console.log(Object.values(hash))
// }

// function createHash(array) {
//     let hash = {}
//     array.forEach(num => hash[`${num}`] = num)
//     return hash;
// }

const hashTwoSum = (arr, target) => {
    let numObject = {};
    let results = [];
	for (let i = 0; i < arr.length; i++) {
        let thisNum = arr[i];
        if (!numObject.hasOwnProperty(thisNum)) {
		    numObject[thisNum] = i;
        } else {
            numObject[thisNum] = [numObject[thisNum], i]
        }
    }
    console.log(numObject)
	for (var i = 0; i < arr.length; i++) {
        let diff = target - arr[i];
        // if (diff === arr[i] && numObject[arr[i]].length > 1) {
        //     results.push([arr[i], arr[i]])
        // }
		if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
			results.push([arr[i], arr[numObject[diff]]]);
		}
    }
    return results;
}