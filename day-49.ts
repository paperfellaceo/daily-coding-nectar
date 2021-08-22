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
		return `${this.date} / (${this.state.substr(0, 9)}...)`;
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
		console.log(`\nCaretaker: Saving Originator's state...`);
		this.mementos.push(this.originator.svae());
	}

	public undo(): void {
		if (!this.mementos.length) {
			return;
		}
		const memento = this.mementos.pop();
		console.log(`Caretaker: Restoring state to: ${memento.getName()}`);
		this.originator.restore(memento);
	}

	public showHistory(): void {
		console.log(`Caretaker: Here's the list of mementos:`);
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

console.log('');
caretaker.showhistory();

console.log(`\nClient: Now, let's rollback!\n`);
caretaker.undo();

console.log(`\nClient: Once more!\n`);
caretaker.undo();
