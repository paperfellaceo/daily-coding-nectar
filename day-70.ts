interface Subject {
	request(): void;
}

class RealSubject implements Subject {
	public request(): void {
		console.log(`RealSubject: Handling request.`);
	}
}

class Proxy implements Subject {
	private realSubject: RealSubject;

	constructor(realSubject: RealSubject) {
		this.realSubject = realSubject;
	}

	public request(): void {
		if (this.checkAccess()) {
			this.realSubject.request();
			this.logAccess();
		}
	}

	private logAccess(): void {
		console.log(`Proxy: Logging the time of request.`);
	}
}

function clientCode(subject: Subject) {
	subject.request();
}

const realSubject = new RealSubject();
clientCode(realSubject);

const proxy = new Proxy(realSubject);
clientCode(proxy);
