// src/ui/RaceDisplay.mjs
const BLOCK_ICONS = {
	RETA: "🛣️ ",
	CURVA: "📐",
	CONFRONTO: "⚔️ ",
};

export class RaceDisplay {
	printRoundHeader(roundNumber, totalRounds) {
		console.log(
			`⚡ ==================== RODADA ${roundNumber}/${totalRounds} ==================== ⚡`,
		);
	}

	printTrackType(trackType) {
		console.log(` Bloco Atual: ${BLOCK_ICONS[trackType] ?? ""} ${trackType}`);
		console.log("----------------------------------------------------------");
	}

	printConfrontationHeader(runnerOneName, runnerTwoName) {
		console.log(`💥 Confronto Direto: ${runnerOneName} vs ${runnerTwoName}!`);
		console.log("----------------------------------------------------------");
	}

	printRoll(runnerName, trackType, rollInfo) {
		const formattedName = runnerName.padEnd(12, " ");
		const formattedTrack = trackType.padEnd(9, " ");
		console.log(
			` 🎲 ${formattedName} | Dado ${formattedTrack}: ${rollInfo.dice} + Atributo: ${rollInfo.attribute} = Total: ${rollInfo.total}`,
		);
	}

	printRoundOutcome({ result }) {
		console.log("----------------------------------------------------------");

		if (result.isConfrontation) {
			this.#printConfrontationOutcome(result);
			return;
		}

		this.#printTrackOutcome(result);
	}

	#printConfrontationOutcome(result) {
		const { winner, loser, pointDeducted } = result;

		if (!winner) {
			console.log(" 🤝 Confronto empatado! Ninguém perdeu pontos.");
			return;
		}

		const outcome = pointDeducted ? "perdeu 1 ponto." : "já tinha 0 pontos.";
		console.log(` 🥊 ${winner.NOME} venceu! ${loser.NOME} ${outcome}`);
	}

	#printTrackOutcome(result) {
		const { winner } = result;

		if (!winner) {
			console.log(" 🤝 Empate na pista! Ninguém marcou pontos.");
			return;
		}

		console.log(` ✨ ${winner.NOME} foi mais rápido e marcou 1 ponto!`);
	}

	printPartialScore(runnerOne, runnerTwo) {
		console.log(
			`\n Placar Parcial -> ${runnerOne.NOME}: ${runnerOne.PONTOS} | ${runnerTwo.NOME}: ${runnerTwo.PONTOS}`,
		);
		console.log("==========================================================\n");
	}

	printFinalResult(runnerOne, runnerTwo) {
		console.log("🏁 ====================================================== 🏁");
		console.log("                 🏆 CORRIDA FINALIZADA 🏆                  ");
		console.log("==========================================================");
		console.log(
			` 🎮 ${runnerOne.NOME.padEnd(12, " ")} | Pontuação Final: ${runnerOne.PONTOS} pontos`,
		);
		console.log(
			` 🎮 ${runnerTwo.NOME.padEnd(12, " ")} | Pontuação Final: ${runnerTwo.PONTOS} pontos`,
		);
		console.log("==========================================================");

		if (runnerOne.PONTOS > runnerTwo.PONTOS) {
			console.log(
				`\n🎉 VITORIOSO: ${runnerOne.NOME} venceu o GP! Parabéns! 🏆\n`,
			);
		} else if (runnerOne.PONTOS < runnerTwo.PONTOS) {
			console.log(
				`\n🎉 VITORIOSO: ${runnerTwo.NOME} venceu o GP! Parabéns! 🏆\n`,
			);
		} else {
			console.log(
				`\n🤝 FIM DE PROVA: A corrida terminou em um empate emocionante!\n`,
			);
		}
	}
}
