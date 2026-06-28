// Todas as funções que lidam com produto.
const productType = {
	version: "digital",
	tax: "x1",
};

async function getFullName(codeId, productName) {
	return `Produto: ${codeId} -- ${productName}`;
}

async function getProductLabel(productName) {
	return `Produto: ${productName}`;
}

module.exports = {
	getFullName,
	getProductLabel,
	productType,
};
