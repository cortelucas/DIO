import { TrackStrategy } from "./track-strategy.mjs";

export class AttributeBasedTrackStrategy extends TrackStrategy {
	/** @param {"VELOCIDADE"|"MANOBRABILIDADE"} attributeName */
	constructor(attributeName) {
		super();
		this.attributeName = attributeName;
	}

	resolve(runnerOne, runnerTwo, diceRoller) {
		const rollOne = diceRoller.roll();
		const rollTwo = diceRoller.roll();

		const totalOne = rollOne + runnerOne[this.attributeName];
		const totalTwo = rollTwo + runnerTwo[this.attributeName];

		const winner = this.#getWinner(runnerOne, totalOne, runnerTwo, totalTwo);

		return {
			winner,
			rolls: {
				runnerOne: {
					dice: rollOne,
					attribute: runnerOne[this.attributeName],
					total: totalOne,
				},
				runnerTwo: {
					dice: rollTwo,
					attribute: runnerTwo[this.attributeName],
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
