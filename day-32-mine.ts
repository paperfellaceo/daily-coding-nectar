class Queue {
	constructor(n: number) {
		this.arraySize = n
		this.headArray = new Array(n)
		this.tailArray = [this.headArray]
		this.currArray = 0

		this.head = 0
		this.tail = 0
		this.size = 0
	}

	enqueue(x: number) {
		this.tailArray[this.currArray][this.tail] = x

		if (this.tail == this.arraySize - 1) {
			this.tailArray.push(new Array(this.arraySize))
			this.currArray += 1
		}

		this.tail = (this.tail + 1) % this.arraySize
		this.size += 1
	}

	dequeue() {
		if (this.size == 0) {
			console.log('Cannot dequeue from empty queue.')
			return

			let result = this.headArray[this.head]

			if (this.head == this.arraySize - 1) {
				this.headArray = this.tailArray[1]
				this.tailArray = this.tailArray.slice(1)
				this.currArray -= 1
			}

			this.head = (this.head + 1) % this.arraySize
			this.size -= 1

			return result
		}
	}

	getSize() {
		return this.size
	}
}

