export const TRACK_TYPES = {
	STRAIGHT: "RETA",
	CURVE: "CURVA",
	CONFRONTATION: "CONFRONTO",
};

export class TrackSelector {
	select() {
		const random = Math.random();

		if (random < 0.33) return TRACK_TYPES.STRAIGHT;
		if (random < 0.66) return TRACK_TYPES.CURVE;
		return TRACK_TYPES.CONFRONTATION;
	}
}
