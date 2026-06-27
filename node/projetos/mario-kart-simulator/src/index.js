import { stdin as input, stdout as output } from "node:process";
import { createInterface } from "node:readline/promises";

class Runner {
	constructor(nome, velocidade, manobrabilidade, poder) {
		this.NOME = nome;
		this.VELOCIDADE = velocidade;
		this.MANOBRABILIDADE = manobrabilidade;
		this.PODER = poder;
		this.PONTOS = 0;
	}
}

const runners = [
	new Runner("Mario", 4, 3, 3),
	new Runner("Luigi", 3, 4, 4),
	new Runner("Peach", 3, 4, 2),
	new Runner("Yoshi", 2, 4, 3),
	new Runner("Bowser", 5, 2, 5),
	new Runner("Donkey Kong", 2, 2, 5),
];

// menu
async function menu() {
	const readline = createInterface({ input, output });

	let runnerOne;
	let runnerTwo;

	console.log("\n🏎️  ====================================================== 🏎️");
	console.log("            MARIO KART - SELEÇÃO DE CORREDORES            ");
	console.log("==========================================================\n");

	for (let runner = 1; runner <= 2; runner++) {
		let executing = true;

		while (executing) {
			console.log(`👤 Corredor ${runner} - Escolha o seu corredor:`);
			console.log("----------------------------------------------------------");

			runners.forEach((c, index) => {
				const formattedName = c.NOME.padEnd(12, " ");
				console.log(
					` [${index + 1}] ${formattedName} | Velocidade: ${c.VELOCIDADE} | Manobrabilidade: ${c.MANOBRABILIDADE} | Poder: ${c.PODER}`,
				);
			});
			console.log(" [0] Sair do Jogo");
			console.log("----------------------------------------------------------");

			try {
				const response = await readline.question(
					`👉 Digite o número da sua opção: `,
				);
				let chosenRunner;

				switch (response.trim()) {
					case "1":
						chosenRunner = runners[0];
						break;
					case "2":
						chosenRunner = runners[1];
						break;
					case "3":
						chosenRunner = runners[2];
						break;
					case "4":
						chosenRunner = runners[3];
						break;
					case "5":
						chosenRunner = runners[4];
						break;
					case "6":
						chosenRunner = runners[5];
						break;
					case "0":
						console.log("\n🍄 Corrida cancelada. Até a próxima!\n");
						readline.close();
						return;
					default:
						console.log("\n❌ Opção inválida! Escolha de 1 a 6, ou 0.\n");
						continue;
				}

				if (runner === 1) {
					runnerOne = chosenRunner;
				} else if (runner === 2) {
					runnerTwo = chosenRunner;
				}

				executing = false;
				console.log(
					`\n✅ Corredor ${runner} confirmou: ${chosenRunner.NOME}\n`,
				);
			} catch (error) {
				console.error(`⛔ Erro ao ler a resposta: ${error}`);
				readline.close();
				return;
			}
		}
	}

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

	readline.close();
	return { runnerOne, runnerTwo };
}

const rollDice = async () => {
	return Math.floor(Math.random() * 6) + 1;
};

async function getRandomBlock() {
	const random = Math.random();
	let result;

	switch (true) {
		case random < 0.33:
			result = "RETA";
			break;
		case random < 0.66:
			result = "CURVA";
			break;
		default:
			result = "CONFRONTO";
			break;
	}

	return result;
}

// Melhoria: Alinhamento vertical perfeito dos logs de dados
async function logRollResult(characterName, block, diceResult, attribute) {
	const formattedName = characterName.padEnd(12, " ");
	const blocoFormatado = block.padEnd(9, " ");
	console.log(
		` 🎲 ${formattedName} | Dado ${blocoFormatado}: ${diceResult} + Atributo: ${attribute} = Total: ${diceResult + attribute}`,
	);
}

async function playRaceEngine(characterOne, characterTwo) {
	for (let round = 1; round <= 5; round++) {
		console.log(
			`⚡ ==================== RODADA ${round}/5 ==================== ⚡`,
		);

		const block = await getRandomBlock();
		const blockIcon =
			block === "RETA" ? "🛣️ " : block === "CURVA" ? "📐" : "⚔️ ";
		console.log(` Bloco Atual: ${blockIcon} ${block}`);
		console.log("----------------------------------------------------------");

		const characterOneRoll = await rollDice();
		const characterTwoRoll = await rollDice();

		let totalTestSkillOne = 0;
		let totalTestSkillTwo = 0;

		if (block === "RETA") {
			totalTestSkillOne = characterOneRoll + characterOne.VELOCIDADE;
			totalTestSkillTwo = characterTwoRoll + characterTwo.VELOCIDADE;

			await logRollResult(
				characterOne.NOME,
				block,
				characterOneRoll,
				characterOne.VELOCIDADE,
			);
			await logRollResult(
				characterTwo.NOME,
				block,
				characterTwoRoll,
				characterTwo.VELOCIDADE,
			);
		}

		if (block === "CURVA") {
			totalTestSkillOne = characterOneRoll + characterOne.MANOBRABILIDADE;
			totalTestSkillTwo = characterTwoRoll + characterTwo.MANOBRABILIDADE;

			await logRollResult(
				characterOne.NOME,
				block,
				characterOneRoll,
				characterOne.MANOBRABILIDADE,
			);
			await logRollResult(
				characterTwo.NOME,
				block,
				characterTwoRoll,
				characterTwo.MANOBRABILIDADE,
			);
		}

		if (block === "CONFRONTO") {
			const powerResultOne = characterOneRoll + characterOne.PODER;
			const powerResultTwo = characterTwoRoll + characterTwo.PODER;

			console.log(
				`💥 Confronto Direto: ${characterOne.NOME} vs ${characterTwo.NOME}!`,
			);
			console.log("----------------------------------------------------------");

			await logRollResult(
				characterOne.NOME,
				block,
				characterOneRoll,
				characterOne.PODER,
			);
			await logRollResult(
				characterTwo.NOME,
				block,
				characterTwoRoll,
				characterTwo.PODER,
			);

			console.log("----------------------------------------------------------");
			if (powerResultOne > powerResultTwo) {
				if (characterTwo.PONTOS > 0) {
					console.log(
						` 🥊 ${characterOne.NOME} venceu! ${characterTwo.NOME} perdeu 1 ponto.`,
					);
					characterTwo.PONTOS--;
				} else {
					console.log(
						` 🥊 ${characterOne.NOME} venceu! ${characterTwo.NOME} já tinha 0 pontos.`,
					);
				}
			} else if (powerResultTwo > powerResultOne) {
				if (characterOne.PONTOS > 0) {
					console.log(
						` 🥊 ${characterTwo.NOME} venceu! ${characterOne.NOME} perdeu 1 ponto.`,
					);
					characterOne.PONTOS--;
				} else {
					console.log(
						` 🥊 ${characterTwo.NOME} venceu! ${characterOne.NOME} já tinha 0 pontos.`,
					);
				}
			} else {
				console.log(" 🤝 Confronto empatado! Ninguém perdeu pontos.");
			}
		}

		// Validação e pontuação das pistas normais (Reta e Curva)
		if (block !== "CONFRONTO") {
			console.log("----------------------------------------------------------");
			if (totalTestSkillOne > totalTestSkillTwo) {
				console.log(
					` ✨ ${characterOne.NOME} foi mais rápido e marcou 1 ponto!`,
				);
				characterOne.PONTOS++;
			} else if (totalTestSkillOne < totalTestSkillTwo) {
				console.log(
					` ✨ ${characterTwo.NOME} foi mais rápido e marcou 1 ponto!`,
				);
				characterTwo.PONTOS++;
			} else {
				console.log(" 🤝 Empate na pista! Ninguém marcou pontos.");
			}
		}

		console.log(
			`\n Placar Parcial -> ${characterOne.NOME}: ${characterOne.PONTOS} | ${characterTwo.NOME}: ${characterTwo.PONTOS}`,
		);
		console.log("==========================================================\n");
	}
}

async function declareWinner(characterOne, characterTwo) {
	console.log("🏁 ====================================================== 🏁");
	console.log("                 🏆 CORRIDA FINALIZADA 🏆                  ");
	console.log("==========================================================");
	console.log(
		` 🎮 ${characterOne.NOME.padEnd(12, " ")} | Pontuação Final: ${characterOne.PONTOS} pontos`,
	);
	console.log(
		` 🎮 ${characterTwo.NOME.padEnd(12, " ")} | Pontuação Final: ${characterTwo.PONTOS} pontos`,
	);
	console.log("==========================================================");

	if (characterOne.PONTOS > characterTwo.PONTOS) {
		console.log(
			`\n🎉 VITORIOSO: ${characterOne.NOME} venceu o GP! Parabéns! 🏆\n`,
		);
	} else if (characterOne.PONTOS < characterTwo.PONTOS) {
		console.log(
			`\n🎉 VITORIOSO: ${characterTwo.NOME} venceu o GP! Parabéns! 🏆\n`,
		);
	} else {
		console.log(
			`\n🤝 FIM DE PROVA: A corrida terminou em um empate emocionante!\n`,
		);
	}
}

(async function main() {
	const { runnerOne, runnerTwo } = await menu();

	if (!runnerOne || !runnerTwo) return;

	console.log("🚦 SINAL VERDE!");
  // contagem regressiva 5 a 1
  for (let i = 5; i > 0; i--) {
    console.log(`🚦 ${i}`);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
	console.log(`🏁 Corrida Iniciada: ${runnerOne.NOME} VS ${runnerTwo.NOME}\n`);

	await playRaceEngine(runnerOne, runnerTwo);
	await declareWinner(runnerOne, runnerTwo);
})();
