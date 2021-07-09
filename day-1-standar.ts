// This code is imcomplete and has an error.
function products(nums: number[]) {
	// Generate prefix products.
	const prefixProducts: number[] = []
	for (const num of nums) {
		if (prefixProducts.length) {
			prefixProducts.push(prefixProducts[-1] * num)
		} else {
			prefixProducts.push(num)
		}
	}
	// Generate suffix products.
	const suffixProducts: number[] = []
	for (const num of nums) {
		if (suffixProducts) {
			suffixProducts.push(suffixProducts[-1] * num)
		} else {
			suffixProducts.push(num)
		}
	}
	// Generate result from the product of prefixes and suffixes.
	const result = []
	for (let i = 0; i <= nums.length; i++) {
		if (i === 0) {
			result.push(suffixProducts[i + 1])
		} else if (i === nums.length - 1) {
			result.push(prefixProducts[i - 1])
		} else {
			result.push(
				prefixProducts[i - 1] * suffixProducts[i + 1]
			)			
		}
	}
	return result
}
