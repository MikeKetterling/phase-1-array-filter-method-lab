// const findMatching = (arr, string) => arr.filter(string) 

function findMatching(arr, string) {
    const result = arr.filter(newArr => newArr.toUpperCase() === string.toUpperCase())
    return result
}

const fuzzyMatch = (driversArray, string) => {
    const driverName = driversArray.filter(newArr => newArr.slice(0, string.length) === string)
    return driverName
}

const matchName = (arr, string) => {
    const dName = arr.filter(element => element.name === string)
    return dName
}