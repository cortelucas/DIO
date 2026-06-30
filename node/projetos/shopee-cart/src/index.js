import { Cart } from "./services/cart.js";
import { Item } from "./services/item.js";

const cart = [];

console.log("Welcome to the your Shopee Cart");

const cartInstance = new Cart();
const item = new Item();

const hotwheelsFerrari = await item.createItem("Hotwheels Ferrari", 20.99, 1);
const hotwheelsLamborghini = await item.createItem(
	"Hotwheels Lamborghini",
	39.99,
	3,
);

await cartInstance.addItem(cart, hotwheelsFerrari);
await cartInstance.addItem(cart, hotwheelsLamborghini);
console.log(`Your cart total is: ${await cartInstance.calculateTotal(cart)}`);
