import { AttributeBasedTrackStrategy } from "./index.mjs";

export class StraightTrackStrategy extends AttributeBasedTrackStrategy {
	constructor() {
		super("VELOCIDADE");
	}
}
