function preoducts(nums) {
	// Generate prefix products.
	const prefixProducts = []
	for (const num of nums) {
		if (prefixProducts.length) {
			prefixProducts.push(prefixProducts[prefixProducts.length - 1] * num)
		} else {
			prefixProducts.push(num)
		}
	}
}
// This is not compleated at all.
