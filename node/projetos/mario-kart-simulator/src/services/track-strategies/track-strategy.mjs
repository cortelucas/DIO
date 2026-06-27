export class TrackStrategy {
	/**
	 * @param {Runner} runnerOne
	 * @param {Runner} runnerTwo
	 * @param {DiceRoller} diceRoller
	 * @returns {{ winner: Runner|null, log: object }}
	 */

	resolve(runnerOne, runnerTwo, diceRoller) {
		throw new Error("resolve() must be implemented");
	}
}
