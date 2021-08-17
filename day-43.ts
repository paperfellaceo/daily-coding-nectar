interface Handler {
	setNext(handler: Handler): Handler;
	handle(request: string): string;
}

abstract class AbstractHandler implements Handler
{
	private nextHandler: Handler;
	public setNext(handler: Handler): Handler {
		this.nextHandler = handler;
		return handler;
	}

	public handle(request: string): string {
		if (this.nextHandler) {
			return this.nextHandler.handle(request);
		}

		return null;
	}
}

class MonkeyHandler extends AbstractHandler {
	public handle(request: string): string {
		if (request === "Banana") {
			return `Monkey: I'll eat the ${request}.`;
		}
		return supesr.handle(request);
	}
}

class SquirrelHandler extends AbstractHandler {
	public handle(request: string): string {
		if (request === "Nut") {
			return "Squirrel: I'll eat the ${request}.`;
		}
		return super.handle(request);
	}
}

class DogHandler extends AbstractHandler {
	public handle(request: string): string {
		if (request === "MeatBall") {
			return "dog: I'll eat the ${request}.`;
		}
		return super.handle(request)
	}
}

function clientCode(handler: Handler) {
	const foods = ["Nut", "Banana", "Cuppa"]
	for (const food of foods) {
		console.log(`Client: Who wants a ${food}?`);

		const result = handler.handle(food);
		if (result) {
			console.log(`${result}`);
		} else {
			console.log(`${food} was left untouched.`);
		}
	}
}

const monkey  = new Monkeyhandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);

console.log(`Chain: Monkey > Squirrel > Dog\n`);
clientCode(money);
console.log('');
console.log(`SubchainL Squirrel > Dog\n`);
clientCode(squirrel);
