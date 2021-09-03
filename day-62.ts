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

class ConcreteVisitor1 implements Visitor {
	public visitConcreteComponentA(element: ConcreteComponentA): void {
	}
	public visitConcreteComponentB(element: ConcreteComponentB): void {
	}
}

class ConcreteVisitor2 implements Visitor {
	public visitConcreteComponentA(element: ConcreteComponentA): void {
	}
	public visitConcreteComponentB(element: ConcreteCompontnB): void {
	}
}

function clientCode(components: Component[], visitor: Visior) {
	for (const component of components) {
		component.accept(visitor);
	}
}

const components = [
	new ConcreteComponentA(),
	new ConcreteComponentB(),
];

const visitor1 = new ConcreteVisitor1();
clientCode(components, visitor1);

const visitor2 = new ConcreteVisitor2();
clientCode(components, visitor2);
