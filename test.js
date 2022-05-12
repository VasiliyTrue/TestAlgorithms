// 1. Implement function strToInt(str: string): number.
const string = '275295'
const strToInt = string => {
	let tmp = 0
	for (let i = 0; i < string.length; i++) {
		const char = string[i].charCodeAt() - 48
		tmp = tmp * 10 + char
	}
	return tmp
}

console.log(strToInt(string)) // 275295

// 2. Implement function Array.map via Array.reduce function.

const weights = [1, 5, 3, 0, -5]
const doubleWeights = weights.map(value => value * 2)

const map = (fn, arr) =>
	arr.reduce(
		(accumulutor, currentValue) => accumulutor.concat(fn(currentValue)), // using concat to return a new array (not 'push')
		[]
	)

const result = map(x => x * 2, weights)

console.log(result) // [ 2, 10, 6, 0, -10 ]

// 3. Tweak the debounce method and add third argument (toggle)

function debounce(func, timeout = 100, toggle = true) {
	if (toggle === true) {
		let timer
		return (...args) => {
			clearTimeout(timer)
			timer = setTimeout(() => {
				func.apply(this, args)
			}, timeout)
		}
	} else {
		console.log('toggle is false')
	}
}
