function bruteForceTwoSum(array, sum) {
	let matches = []
	array.forEach((num1, index1) => {
		array.slice(index1 + 1).forEach((num2, index2) => {
			if (num1 + num2 === sum) {
				matches.push([num1, num2])
			}
		});

	});
	return matches
}

function binarySearchTwoSum(array, sum) {
	let matches = []
	let sortedArray = mergeSort(array)
	sortedArray.forEach((num, index) => {
		let missingNum = sum - num
		if (binaryMatch(sortedArray.slice(index + 1), missingNum)) {
			matches.push([num, missingNum])
		}
	});
	return matches
}

function binaryMatch(array, target) {
	let startIndex = 0
	let endIndex = array.length - 1

	while (startIndex <= endIndex) {
		let midIndex = Math.floor((startIndex + endIndex) / 2)

		if (target === array[midIndex]) {
			return true
		}

		if (target > array[midIndex]) {
			startIndex = midIndex + 1
		}

		if (target < array[midIndex]) {
			endIndex = midIndex -1
		}
	}

	return false
}


function merge(arr1, arr2) {
	let sorted = []

	while (arr1.length !== 0 && arr2.length !== 0) {
		if (arr1[0] < arr2[0]) {
			sorted.push(arr1.shift())
		} else {
			sorted.push(arr2.shift())
		}
	}
	return sorted.concat(arr1).concat(arr2)
}

function mergeSort(array) {
	let midIndex = array.length/2
	let firstHalf = array.slice(0, midIndex)
	let secondHalf = array.slice(midIndex, array.length)

	if (array.length < 2) {
		return array
	} else {
		return merge(mergeSort(firstHalf), mergeSort(secondHalf))
	}
}

function hashTwoSum(array, sum) {
	let matches = []
	let hash = {}
	array.forEach((num, index) => {
		let missingNum = sum - num
		if (hash[num]) {
			matches.push([hash[num], num])
		} else {
			hash[missingNum] = num
		}
	});
	return matches
}
