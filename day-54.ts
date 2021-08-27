interface Subject {
	attach(observer: Observer): void;
	detach(observer: Observer): void;
	notify(): void;
}

class ConcreteSubject implements Subject {
	public state: number;
	private observers: Observer[] = [];
	public attach(observer: Observer): void {
		const isExist = this.observers.includes(observer);
		if (isExist) {
			return console.log(`Subject: Observer has been attached already.`);
		}
		console.log(`Subject: attached an observer.`);
		this.observers.push(observer);
	}

	public detach(observer: Observer): void {
		const observerIndex = this.observers.indexOF(observer);
		if (observerIndex === -1) {
			return console.log(`Subject: nonexistent observer.`);
		}

		this.observers.splice(observerIndex, 1);
		console.log(`Subject: detached an observer.`);
	}

	public notify(): void {
		console.log(`Subject: notifying observers...`);
		for (const observer of this.observers) {
			observer.update(this);
		}
	}

	public someBusinessLogic(): void {
		console.log(`\nSubject: I'm doing something important.`);
		this.state = Math.floor(Math.random() * (10 + 1));
		console.log(`Subject: My state has just changed to: ${this.state}`);
		this.notify();
	}
}

interface Observer {
	update(subject: Subject): void;
}

class ConcreteObserverA implements Observer {
	public update(subject: Subject): void {
		if (subject interfaceof ConcreteSubject && subject.state < 3) {
			console.log(`ConcreteObserverA: Reacted to the event.`);
		}
	}
}

class ConcreteObserverB implements Observer {
	public update(subject: Subject): void {
		if (subject instanceof ConcreteSubject && (subject.state === 0 || subject.state >= 2)) {
			console.log(`ConcreteObserverB: Reacted to the event.`);
		}
	}
}

const subject = new ConcreteSubject();
const observer1 = new ConcreteObserverA();
const observer2 = new ConcreteObserverB();
subject.attach(observer1);
subject.attach(observer2);
subject.someBusinessLogic();
subject.someBusinessLogic();
subject.detach(observer2);
subject.someBusinessLogic();
