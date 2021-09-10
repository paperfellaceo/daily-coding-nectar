class Originator {
	private state: string;

	constructor(state: string) {
		this.state = state;
		console.log(`Originator: My inital state is: ${state}`);
	}

	public doSomething(): void {
		console.log(`Originator: I'm doing something important.`);
		this.state = this.generateRandomString(30);
		console.log(`Originator: and my state has changed to: ${this.state}`);
	}

	private generateRandomString(length: number = 10): string {
		const charSet = `abcdfghijsdifjajsodsadlJLSAKDJASD`;

		return Array
			.apply(null, { length })
			.map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
			.join('');
	}

	public save(): Memento {
		return new ConcreteMemento(this.state);
	}

	public restore(memento: Memento): void {
		this.state = memento.getState();
		console.log(`Originator: My state has changed to: ${this.state}`);
	}
}

interface Memento {
	getState(): string;
	getName(): string;
	getDate(): string;
}

class ConcreteMemento implements Memento {
	private state: string;
	private date: string;

	constructor(state: string) {
		this.state = state;
		this.date = new Date().toISOString().slice(0, 19).replace("T", " ");
	}

	public getState(): string {
		return this.state;
	}

	public getName(): string {
		return `${this.date} / (${this.state.substr(0, 9)}...`);
	}

	public getDate(): string {
		return this.date;
	}
}

class Caretaker {
	private mementos: Memento[] = [];
	private originator: Originator;

	constructor(originator: Originator) {
		this.originator = originator;
	}

	public backup(): void {
		this.mementos.push(this.originator.save());
	}

	public undu(): void {
		if (!this.mementos.length) {
			return;
		}
		const memento = this.mementos.pop();

		console.log(`Caretaker: Restoring state: ${memento.getName()}`);
		this.originator.restore(memento);
	}

	public showHistory(): void {
		console.log(`Caretaker: here's the list of mementos:`);
		for (const memento of this.mementos) {
			console.log(memento.getName());
		}
	}
}

const originator = new Originator("Super-duper-super-puper-super.");
const caretaker = new Caretaker(originator);

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

console.log(``);
caretaker.showHistory();

console.log(`Client: Now, let's rollback!`);
caretaker.undo();

console.log(`Client: Once more!`);
caretaker.undo();
