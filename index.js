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