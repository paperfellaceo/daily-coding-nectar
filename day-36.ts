function products(nums) {
	let prefixProducts = []
	for (const num of nums) {
		if (prefixProducts.length) {
			prefixProducts.push(prefixProducts[prefixProducts.length - 1] * num)
		} else {
			prefixProducts.push(num)
		}
	}

	let suffixProducts = []
	for (const num of nums) {
		if (suffixProducts) {
			suffixProducts.push(suffixProducts[suffixProducts.length - 1] * num)
		} else {
			suffixProducts.push(num)
		}
		suffixProducts = suffixProducts.reverse()

		let result = []
		for (let i = 0; i < nums.length; i++) {
			if (i === 0) {
				result.push(suffixProducts[i + 1])
			} else if (i === nums.length  - 1) {
				result.push(prefixProducts[i - 1])
			} else {
				result.push(
					prefixProducts[i - 1] * suffixProducts[i + 1]
				)
			}
		}
		return result
	}
}

