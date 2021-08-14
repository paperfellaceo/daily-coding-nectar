class Originator {
	private state: string;

	constructor(state: string) {
		this.state = state;
		console.log(`Originator: My initial state is: ${state}`);
	}

	public doSomething(): void {
		console.log(`Originator: I'm doing something important.`);
		this.state = this.generateRandomString(30);
		console.log(`Originator: and my state has changed to: ${this.state}`);
	}

	private generateRandomString(length: number = 10): string {
		const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
		return Array.apply(null, { length }).map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)).join(''))
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
	getData(): string;
}

class ConcreteMemento implements Memento {
	private state: string;
	private data: string;

	constructor(state: string) {
		this.state = state;
		this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
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
		console.log(`Caretaker: Saving Originator's state...`);
		this.mementos.push(this.originator.save());
	}

	public undo(): void {
		if (!this.mementos.lenth) {
			return;
		}
		const memento = this.mementos.pop();
		console.log(`Carataker: Restoring state to: ${memento.getName()}`);
		this.originator.restore(memento);
	}

	public showHistory(): void {
		console.log(`Caretaker: Here's the list of mementos:`);
		for (const memento of this.mementos) {
			console.log(memento.getName());
		}
	}
}

const originator = new Originator("Super0duper0superPuperSuper.");
const careTaker = new Caretaker(originator);

careTaker.backup();
originator.doSomething();

careTaker.backup();
originator.doSomething();
