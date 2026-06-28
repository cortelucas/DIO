const products = require("./services/products");
const config = require("./services/config");
const {
	connectToDatabase,
	disconnectFromDatabase,
} = require("./services/database");

async function main() {
	console.log("main");

	const product = {
		codeId: "123",
		productName: "Notebook",
	};

	const result = await products.getFullName(
		product.codeId,
		product.productName,
	);
	console.log(result);

	const label = await products.getProductLabel(product.productName);
	console.log(label);
	console.log(products.productType);

	console.log(`Version: ${config.version} - Production: ${config.production}`);

	await connectToDatabase("test");
	await disconnectFromDatabase("test");

	console.log("Fim");
}

main();
