export class Item {
	/**
	 *
	 * @param {string} name
	 * @param {number} price
	 * @param {number} quantity
	 * @returns {Object<Item>}
	 */
	async createItem(name, price, quantity) {
		return {
			name,
			price,
			quantity,
			subtotal: () => price * quantity,
		};
	}
}
