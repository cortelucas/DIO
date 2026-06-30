export class Item {
	async createItem(name, price, quantity) {
		return {
			name,
			price,
			quantity,
			subtotal: () => price * quantity,
		};
	}
}
