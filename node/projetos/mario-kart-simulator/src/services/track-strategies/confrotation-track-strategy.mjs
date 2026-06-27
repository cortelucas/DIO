import { TrackStrategy } from "./index.mjs";

export class ConfrontationTrackStrategy extends TrackStrategy {
	resolve(runnerOne, runnerTwo, diceRoller) {
		const rollOne = diceRoller.roll();
		const rollTwo = diceRoller.roll();

		const totalOne = rollOne + runnerOne.PODER;
		const totalTwo = rollTwo + runnerTwo.PODER;

		const winner = this.#getWinner(runnerOne, totalOne, runnerTwo, totalTwo);
		const loser =
			winner === runnerOne
				? runnerTwo
				: winner === runnerTwo
					? runnerOne
					: null;

		return {
			winner,
			loser,
			isConfrontation: true,
			rolls: {
				runnerOne: {
					dice: rollOne,
					attribute: runnerOne.PODER,
					total: totalOne,
				},
				runnerTwo: {
					dice: rollTwo,
					attribute: runnerTwo.PODER,
					total: totalTwo,
				},
			},
		};
	}

	#getWinner(runnerOne, totalOne, runnerTwo, totalTwo) {
		if (totalOne > totalTwo) return runnerOne;
		if (totalTwo > totalOne) return runnerTwo;
		return null;
	}
}
