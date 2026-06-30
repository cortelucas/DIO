import { Cart } from "./services/cart.js";
import { Item } from "./services/item.js";

const myCart = [];
const myWhishlist = [];

console.log("Welcome to the your Shopee Cart");

const cartInstance = new Cart();
const item = new Item();

const hotwheelsFerrari = await item.createItem("Hotwheels Ferrari", 20.99, 2);
const hotwheelsLamborghini = await item.createItem(
	"Hotwheels Lamborghini",
	39.99,
	3,
);

await cartInstance.addItem(myCart, hotwheelsFerrari);
console.log(`Your cart total is: ${await cartInstance.calculateTotal(myCart)}`);

await cartInstance.addItem(myWhishlist, hotwheelsLamborghini);
await cartInstance.addItem(myWhishlist, await item.createItem("Hotwheels Porsche", 21.99, 4));

console.log(`Your whishlist contens: ${myWhishlist.length} items`);
console.log(myWhishlist.map((item) => {
    return {
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        subtotal: item.subtotal()
    };
}));
