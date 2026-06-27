// src/core/RaceEngine.mjs
const TOTAL_ROUNDS = 5;

export class RaceEngine {
	/**
	 * @param {object} deps
	 * @param {import("../services/dice/index.mjs").DiceRoller} deps.diceRoller
	 * @param {import("../services/track/index.mjs").TrackSelector} deps.trackSelector
	 * @param {{ getStrategy: (trackType: string) => import("../services/track-strategies/index.mjs").TrackStrategy }} deps.trackStrategyRegistry
	 */
	constructor({ diceRoller, trackSelector, trackStrategyRegistry }) {
		this.diceRoller = diceRoller;
		this.trackSelector = trackSelector;
		this.trackStrategyRegistry = trackStrategyRegistry;
	}

	run(runnerOne, runnerTwo) {
		const rounds = [];

		for (let roundNumber = 1; roundNumber <= TOTAL_ROUNDS; roundNumber++) {
			const trackType = this.trackSelector.select();
			const strategy = this.trackStrategyRegistry.getStrategy(trackType);

			const result = strategy.resolve(runnerOne, runnerTwo, this.diceRoller);

			this.#applyScore(runnerOne, runnerTwo, result);

			rounds.push({
				roundNumber,
				trackType,
				result,
				score: { runnerOne: runnerOne.PONTOS, runnerTwo: runnerTwo.PONTOS },
			});
		}

		return rounds;
	}

	#applyScore(runnerOne, runnerTwo, result) {
		const { winner, loser, isConfrontation } = result;

		if (isConfrontation) {
			if (loser && loser.PONTOS > 0) {
				loser.PONTOS--;
			}
			return;
		}

		if (winner) {
			winner.PONTOS++;
		}
	}
}
