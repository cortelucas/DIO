import {
	ConfrontationTrackStrategy,
	CurveTrackStrategy,
	StraightTrackStrategy,
	TRACK_TYPES,
} from "./index.mjs";

export function createTrackStrategyRegistry() {
	const registry = new Map([
		[TRACK_TYPES.STRAIGHT, new StraightTrackStrategy()],
		[TRACK_TYPES.CURVE, new CurveTrackStrategy()],
		[TRACK_TYPES.CONFRONTATION, new ConfrontationTrackStrategy()],
	]);

	return {
		getStrategy(trackType) {
			const strategy = registry.get(trackType);
			if (!strategy) {
				throw new Error(`No strategy registered for track type: ${trackType}`);
			}
			return strategy;
		},
	};
}
