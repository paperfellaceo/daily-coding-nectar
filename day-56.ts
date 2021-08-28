interface Component {
	accept(visitor: Visitor): void;
}

class ConcreteComponentA implements Component {
	public accept(visitor: Visitor): void {
		visitor.visitConcreteComponentA(this);
	}

	public exclusiveMethodOfConcreteComponentA(): string {
		return "A";
	}
}

class ConcreteComponentB implements Component {
	public accept(visitor: Visitor): void {
		visitor.visitConcreteComponentB(this);
	}

	public specialMethodOfConcreteComponentB(): string {
		return "B";
	}
}

interface Visitor {
	visitConcreteComponentA(element: ConcreteComponentA): void;
	visitConcreteComponentB(element: ConcreteComponentB): void;
}

class ConcreteVisitor1 implements Visitor {}
