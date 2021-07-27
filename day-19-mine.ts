function products(nums: number[]) {
	let prefixProducts: number[] = []
	for (const num of nums) {
		if (prefixProducts) {
			prefixProducts.push(prefixProducts[prefixProducts.length - 1] * num)
		} else {
			prefixProducts.push(num)
		}

		let suffixProducts: number[] = []
		for (const num of nums.reverse()) {
			if (suffixProducts) {
				suffixProducts.push(suffixProducts[prefixProducts.length - 1] * num)
			} else {
				suffixProducts.push(num)
			}
		}
		suffixProducts = suffixProducts.reverse()

		const result: number[] = []
		for (let i = 0; i < nums.length; i++) {
			if (i === 0) {
				result.push(suffixProducts[i + 1])
			} else if (i === nums.length) {
				result.push(prefixProducts[i - 1])
			} else {
				result.push(
					prefixProducts[i - 1] * suffixProducts[i + 1]
				)
			}
		}
		return result
