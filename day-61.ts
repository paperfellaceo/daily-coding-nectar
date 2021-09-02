class Singleton {
	private static instance: Singleton;

	private constructor() {}

	public static getInstance(): Singleton {
		if (!Singleton.instance) {
			Singleton.instance = new Singleton();
		}

		return Singleton.instance;
	}

	public someBusinessLogic() {
	}
}

function clientCode() {
	const s1= Singleton.getInstance();
	const s2= Singleton.getInstance();

	if (s1 === s2) {
		console.log(`Singleton works, buth variables contain the smae instance.`);
	} else {
		console.log(`Singleton failed, variables contain different instances.`);
	}
}

clientCode();
