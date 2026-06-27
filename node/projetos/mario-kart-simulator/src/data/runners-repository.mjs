import { Runner } from "../entities/index.mjs";

export function getRunners() {
	return [
		new Runner("Mario", 4, 3, 3),
		new Runner("Luigi", 3, 4, 4),
		new Runner("Peach", 3, 4, 2),
		new Runner("Yoshi", 2, 4, 3),
		new Runner("Bowser", 5, 2, 5),
		new Runner("Donkey Kong", 2, 2, 5),
	];
}
