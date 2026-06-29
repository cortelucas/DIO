import Api, { key } from "./application/api.js";
import {
	ConnectToDatabase,
	databaseType,
} from "./infra/connect-to-database.js";

const connectionToDatabase = new ConnectToDatabase();

class Main {
	constructor() {
		this.init();
		this.run();
		this.stop();
		this.destroy();
		this.test();
	}

	async init() {
		console.log("====== init ======");
		await connectionToDatabase.execute();
	}

	async run() {
		console.log("\n====== run ======");
		console.log(databaseType);
		console.log(new Api());
	}

	async stop() {
		console.log("\n====== stop ======");
		await connectionToDatabase.disconnect();
	}

	async destroy() {
		console.log("\n====== destroy ======");
		console.log(key);
	}

	async test() {
		console.log("\n====== test ======");
	}
}

new Main();
