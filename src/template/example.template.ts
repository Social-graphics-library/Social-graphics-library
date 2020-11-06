import Template from "../model/templateBase";

export class Example_Template extends Template {

	//#region setup
	/**
	 * Width  of example template
	 */
	static readonly width: number = 1000;

	/**
	 * Height  of example template
	 */
	static readonly height: number = 1000;
	//#endregion

	//#region template
	/**
	 * Templates example template
	 * @returns template
	 */
	static template(teamName: string, playerName: string): string {
		teamName;
		playerName;
		return 'svg string';
	}
	//#endregion
}
