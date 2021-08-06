function products(nums: number[]) {
	let prefixProducts: number[] = []
	for (const num in nums) {
		if (prefixProducts) {
			prefixProducts.push(prefixProducts[-1] * num)
		} else {
			prefixProducts.push(num)
		}
	}

	let suffixProducts: number[] = []
	for (const num in nums) {
		if (suffixProducts) {
			suffixProducts.push(suffixProducts[-1] * num)
		} else {
			suffixProducts.push(num)
		}
		suffixProducts = suffixProducts.reverse()
	}

	let result: number[] = []
	for (let i = 0; i < nums.length; i++) {
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
