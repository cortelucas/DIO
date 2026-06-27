// index.mjs (raiz do projeto)
import { stdin, stdout } from "node:process";
import { RaceEngine } from "./core/index.mjs";
import { getRunners } from "./data/index.mjs";
import { RandomDiceRoller } from "./services/dice/index.mjs";
import { TrackSelector } from "./services/track/index.mjs";
import { createTrackStrategyRegistry } from "./services/track-strategies/index.mjs";
import { RaceDisplay, RunnerSelectionMenu } from "./ui/index.mjs";

async function printCountdown() {
	console.log("🚦 SINAL VERDE!");
	for (let i = 5; i > 0; i--) {
		console.log(`🚦 ${i}`);
		await new Promise((resolve) => setTimeout(resolve, 1000));
	}
}

async function main() {
	const availableRunners = getRunners();

	const menu = new RunnerSelectionMenu({
		availableRunners,
		input: stdin,
		output: stdout,
	});

	const selection = await menu.run();
	if (!selection) return;

	const { runnerOne, runnerTwo } = selection;

	await printCountdown();
	console.log(`🏁 Corrida Iniciada: ${runnerOne.NOME} VS ${runnerTwo.NOME}\n`);

	const raceEngine = new RaceEngine({
		diceRoller: new RandomDiceRoller(),
		trackSelector: new TrackSelector(),
		trackStrategyRegistry: createTrackStrategyRegistry(),
	});

	const rounds = raceEngine.run(runnerOne, runnerTwo);

	const raceDisplay = new RaceDisplay();
	raceDisplay.renderRace(rounds, runnerOne, runnerTwo);
	raceDisplay.printFinalResult(runnerOne, runnerTwo);
}

main();
