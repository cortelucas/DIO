class App {
	constructor() {
        this.execute();
    }

	static async execute() {
		console.log("Olá mundo!");
	}
}

await App.execute();
