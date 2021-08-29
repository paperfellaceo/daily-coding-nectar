class Conteext {
	private state: State;

	constructor(state: State) {
		this.transitionTo(state);
	}

	public transitionTo(state: State): void {
		console.log(`Context: Transition to ${(<any>state).constructor.name}.`);
		this.state = state;
		this.state.setConext(this);
	}

	public request1(): void {
		this.state.handle1();
	}

	public request2(): void {
		this.state.handle2();
	}
}

abstract class State {
	protected context: Context;l
	
	public setContext(context: Context) {
		this.context = context;
	}

	public abstract handle1(): void;
	public abstract handle2(): void;
}

class ConcreteStateA extends State {
	public handle1(): void {
		this.context.transitionTo(new ConcreteStateB());
	}
	
	public handle2(): void {
	}
}

class ConcreteStateB extends State {
	public handle1(): void {
		console.log(`ConcreteStateB handles request1.`);
	}

	public handle2(): void {
		this.context.transitionTo(new ConcreteStateA());
	}
}

const context = new Context(new ConcreteStateA());
context.request1();
context.request2();
