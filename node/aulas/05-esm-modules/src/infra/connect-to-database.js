export class ConnectToDatabase {
	async execute() {
		console.log("Conectando ao banco de dados");
	}

	async disconnect() {
		console.log("Desconectando do banco de dados");
	}
}

export const databaseType = {
	userType: "admin",
	typeDatabase: "mysql",
};
