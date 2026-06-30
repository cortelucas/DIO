export class Cart {
	async addItem(userCart, item) {
		userCart.push(item);
		return userCart;
	}

	async removeItem(userCart, index) {}

	async deleteItem(userCart, name) {}

	async calculateTotal(userCart) {
		const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
		return `R$ ${result.toFixed(2)}`;
	}
}
