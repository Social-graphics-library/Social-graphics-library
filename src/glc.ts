import Call from "./model/call";
import { Info } from "./model/info";
import Generator from "./controller/generator";

/**
 * Social graphics library
 */
export default class SocialGraphicsLibrary {

	/**
	 * Generators social graphics library
	 * @param teamName
	 * @param playerName
	 * @param mode
	 * @param containerId
	 * @param imgMode
	 * @param [generateLink]
	 */
	public static generator(teamName: string, playerName:string, mode: string, containerId: string, imgMode: string, generateLink?: boolean): void {

		Generator.run(teamName, playerName, mode, containerId, imgMode, generateLink);

	}
	//#endregion


	//#region multiGenerator
	/**
	 * Multis generator
	 * @param teamName
	 * @param playerName
	 * @param calls
	 */
	public static multiGenerator(teamName: string, playerName:string, calls: Array<Call>): void {
        calls.forEach( async element => {
			SocialGraphicsLibrary.generator(teamName, playerName, element.mode, element.containerId, element.imgMode, element.generateLink);
        });
	}
	//#endregion

	//#region info
	/**
	 * Infos social graphics library
	 * @returns info
	 */
	public static info():object {
		return { "SGL Info": new Info() }
	}
	//#endregion

	//#region version
	/**
	 * Version of social graphics library
	 */
	public static readonly VERSION: string = new Info().getVersion()
	//#endregion
}
