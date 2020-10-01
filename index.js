function bruteForceTwoSum(arr, sum) {
    let nums = [];
    for (let i = 0; i < arr.length; i++) {
        let remainder = sum - arr[i];
        for (let j = 0; j < arr.length; j++) {
            if (remainder === arr[j] && i < j) {
            nums.push([arr[i], arr[j]])
            }
        }
    }
    if (nums.length !== 0) {
      return nums;
    } else {
      return false;
    }
}

function binarySearchTwoSum(arr, sum) {
    let nums = [];
    let sortedArr = arr.sort((a, b) => a < b);
    for (let i = 0; i < sortedArr.length; i++) {
        let remainder = sum - arr[i];
        let midPoint = parseInt(sortedArr.length / 2)
        let firsthalf = sortedArr.slice(0, midPoint);
        let secondhalf = sortedArr.slice(midPoint);
        if (firsthalf.includes(remainder)) {
            nums.push([arr[i], remainder])
        } else if (secondhalf.includes(remainder)) {
            nums.push([arr[i], remainder])
        }
    }
    if (nums.length !== 0) {
        return nums.slice(0, nums.length / 2);
    } else {
        return false;
    }
}

function binaryMatch(arr, sum) {
    let sortedArr = arr.sort((a, b) => a < b);
    for (let i = 0; i < sortedArr.length; i++) {
        let remainder = sum - arr[i];
        let midPoint = parseInt(sortedArr.length / 2)
        let firsthalf = sortedArr.slice(0, midPoint);
        let secondhalf = sortedArr.slice(midPoint);
        if (firsthalf.includes(remainder)) {
            return true;
        } else if (secondhalf.includes(remainder)) {
            return true;
        } else {
            return false;
        }
    }
}

function hashTwoSum(arr, sum) {
    let hash = {};
    let nums = [];
    arr.forEach((num, i) => hash[num] = i);
    arr.forEach((num, i) => {
        let remainder = sum - num;
        if (!!hash[remainder] && hash[remainder] > i) {
            nums.push([arr[i], remainder])
        }
    })
    return nums;
}