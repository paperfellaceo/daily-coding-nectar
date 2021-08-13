class Context {
	private strategy: Strategy;

	cosntructor(strategy: Strategy) {
		this.strategy = strategy;
	}

	public setStrategy(strategy: Strategy) {
		this.strategy = strategy;
	}

	public doSomeBusinessLogic(): void {
		console.log("Context: sorting data using the strategy (not sure how it'll do it)");
		const result = this.strategy.doAlgorith(["a", "b", "c", "d", "e"]);
		console.log(result.join(","));
	}
}

interface Strategy {
	doAlgorith(data: string[]): string[];
}

class ConcreteStrategyA implements Strategy {
	public doAlgorithm(data: string[]): string[] {
		return data.sort();
	}
}


class ConcreteStrategyB implements Strategy {
	public doAlgorithm(data: string[]): string[] {
		return data.reverse();
	}
}

const context = new Context(new ConcreteStrategyA());
console.log("Client: Strategy is set to normal sorting.");
context.doSomeBusinessLogic();

console.log("");

console.log("Client: Strategy is set to reverse sorting.");
context.setStrategy(new ConcreteStrategyB());
context.doSomeBusinessLogic();
