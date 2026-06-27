// src/ui/RunnerSelectionMenu.mjs
import { createInterface } from "node:readline/promises";

export class RunnerSelectionMenu {
	/**
	 * @param {object} deps
	 * @param {import("../entities/index.mjs").Runner[]} deps.availableRunners
	 * @param {NodeJS.ReadableStream} deps.input
	 * @param {NodeJS.WritableStream} deps.output
	 */
	constructor({ availableRunners, input, output }) {
		this.availableRunners = availableRunners;
		this.input = input;
		this.output = output;
	}

	async run() {
		const readline = createInterface({
			input: this.input,
			output: this.output,
		});

		console.log(
			"\n🏎️  ====================================================== 🏎️",
		);
		console.log("            MARIO KART - SELEÇÃO DE CORREDORES            ");
		console.log("==========================================================\n");

		try {
			const runnerOne = await this.#selectRunner(readline, 1);
			if (!runnerOne) return null;

			const runnerTwo = await this.#selectRunner(readline, 2);
			if (!runnerTwo) return null;

			this.#printConfirmation(runnerOne, runnerTwo);

			return { runnerOne, runnerTwo };
		} finally {
			readline.close();
		}
	}

	async #selectRunner(readline, slotNumber) {
		while (true) {
			this.#printOptions(slotNumber);

			const response = (
				await readline.question("👉 Digite o número da sua opção: ")
			).trim();

			if (response === "0") {
				console.log("\n🍄 Corrida cancelada. Até a próxima!\n");
				return null;
			}

			const index = Number(response) - 1;
			const chosenRunner = this.availableRunners[index];

			if (!chosenRunner) {
				console.log("\n❌ Opção inválida! Escolha de 1 a 6, ou 0.\n");
				continue;
			}

			console.log(
				`\n✅ Corredor ${slotNumber} confirmou: ${chosenRunner.NOME}\n`,
			);
			return chosenRunner;
		}
	}

	#printOptions(slotNumber) {
		console.log(`👤 Corredor ${slotNumber} - Escolha o seu corredor:`);
		console.log("----------------------------------------------------------");

		this.availableRunners.forEach((runner, index) => {
			const formattedName = runner.NOME.padEnd(12, " ");
			console.log(
				` [${index + 1}] ${formattedName} | Velocidade: ${runner.VELOCIDADE} | Manobrabilidade: ${runner.MANOBRABILIDADE} | Poder: ${runner.PODER}`,
			);
		});
		console.log(" [0] Sair do Jogo");
		console.log("----------------------------------------------------------");
	}

	#printConfirmation(runnerOne, runnerTwo) {
		console.log("📊 ====================================================== 📊");
		console.log("                 🏁 CONFRONTOS DEFINIDOS 🏁                ");
		console.log("==========================================================");
		console.log(
			` 🎮 Corredor 1: ${runnerOne.NOME.padEnd(12, " ")} | Velocidade: ${runnerOne.VELOCIDADE} | Manobrabilidade: ${runnerOne.MANOBRABILIDADE} | Poder: ${runnerOne.PODER}`,
		);
		console.log(
			` 🎮 Corredor 2: ${runnerTwo.NOME.padEnd(12, " ")} | Velocidade: ${runnerTwo.VELOCIDADE} | Manobrabilidade: ${runnerTwo.MANOBRABILIDADE} | Poder: ${runnerTwo.PODER}`,
		);
		console.log("==========================================================\n");
	}
}
