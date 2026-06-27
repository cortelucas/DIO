import { DiceRoller } from "./index.mjs";

export class RandomDiceRoller extends DiceRoller {
	roll() {
		return Math.floor(Math.random() * 6) + 1;
	}
}
