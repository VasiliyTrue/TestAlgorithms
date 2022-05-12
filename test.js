// 1. Implement function strToInt(str: string): number.

const string = '275295'
const strToInt = string => {
	const arrString = string.split('')
	const asciiArr = arrString.map(value => value.charCodeAt())
	const result = String.fromCharCode(...asciiArr)
	return result
}
console.log(strToInt(string)) // 275295

// 2. Implement function Array.map via Array.reduce function.

const weights = [1, 5, 3, 0, -5]
const doubleWeights = weights.map(value => value * 2)

const map = (fn, arr) =>
	arr.reduce(
		(accumulutor, currentValue) => accumulutor.concat(fn(currentValue)),
		[]
	)

const result = map(x => x * 2, weights)

console.log(result) // [ 2, 10, 6, 0, -10 ]
