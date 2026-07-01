export class Cart {
	/**
	 *
	 * @param {Array<Cart>} userCart
	 * @param {Object} item
	 * @returns {Array}
	 */
	async addItem(userCart, item) {
		userCart.push(item);
		return userCart;
	}

	/**
	 *
	 * @param {Array<Cart>} userCart
	 *  @returns {Array}
	 */
	async displayCart(userCart) {
		console.log("\nShopee Cart List:");
		return userCart.forEach((item, index) => {
			console.log(
				`${index + 1}: ${item.name} - R$ ${item.price.toFixed(2)} | ${item.quantity}x | Subtotal: R$ ${item.subtotal()}`,
			);
		});
	}

	async removeItem(userCart, index) {}

	/**
	 *
	 * @param {Array<Cart>} userCart
	 * @param {String} name
	 * @returns {Array}
	 */
	async deleteItem(userCart, name) {
		const index = userCart.findIndex((item) => item.name === name);
		if (index !== -1) {
			userCart.splice(index, 1);
		}
		return userCart;
	}

	/**
	 *
	 * @param {Array<Cart>} userCart
	 * @returns {String}
	 */
	async calculateTotal(userCart) {
		const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
		return `💸 Total: R$ ${result.toFixed(2)}`;
	}
}
