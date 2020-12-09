// let array = [2, 3, 4, 3, 6, 7]
// let sum = 6

function binarySearchTwoSum(array, sum) {
    let solutionArray = []
    for (let k=0; k<array.length; k++) {
        for (let i=k+1 ; i < array.length; i++) {
            console.log(`i=${i} and k=${k}`)
            let firstNum = array[k]
            let remainder = sum - firstNum
            if (array[i] === remainder) {
                let secondNum = array[i]
                solutionArray.push([firstNum, secondNum])
            }
        }
    }
    return solutionArray
}
function bruteForceTwoSum(array, sum) {
    let solutionArray = []
    for (let k=0; k<array.length; k++) {
        for (let i=k+1 ; i < array.length; i++) {
            // console.log(`i=${i} and k=${k}`)
            let firstNum = array[k]
            let remainder = sum - firstNum
            if (array[i] === remainder) {
                let secondNum = array[i]
                solutionArray.push([firstNum, secondNum])
            }
        }
    }
    return solutionArray
}
function binaryMatch(array, sum) {
    let solutionArray = []
    let numObject = {}
    for (let i=0; i<array.length; i++) {
        let thisNum = array[i]
        numObject[thisNum] = i
    }
    for (let i=0; i<array.length; i++) {
        let goal = sum - array[i]
        if (numObject[goal] && numObject[goal] !== i) {
            solutionArray.push([array[i], array[numObject[goal]]])
        }
    }
    if (solutionArray.length > 0) {
        return true
    } else {
        return false
    }
}
function hashTwoSum(array, sum) {
    let solutionArray = []
    let numObject = {}
    for (let i=0; i<array.length; i++) {
        let thisNum = array[i]
        numObject[thisNum] = i
    }
    for (let i=0; i<array.length; i++) {
        let goal = sum - array[i]
        if (numObject[goal] && numObject[goal] !== i) {
            solutionArray.push([array[i], array[numObject[goal]]])
        }
    }
    return solutionArray
}
// binarySearchTwoSum(array, sum)
// hashTwoSum(array, sum)