import { Item } from "./services/item.js";

const cart = [];

console.log("Welcome to the your Shopee Cart");

const item = new Item();

const hotwheelsFerrari = await item.createItem("Hotwheels Ferrari", 20.99, 1);
const hotwheelsLamborghini = await item.createItem(
	"Hotwheels Lamborghini",
	39.99,
	3,
);

console.log([
	{
		...hotwheelsFerrari,
		subtotal: hotwheelsFerrari.subtotal(),
	},
	{
		...hotwheelsLamborghini,
		subtotal: hotwheelsLamborghini.subtotal(),
	},
]);
