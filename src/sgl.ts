import { Call } from "./model/call.js";
import { Info } from "./model/info.js";
import { Generator } from "./controller/generator.js";
import { TemplateInjector } from "./controller/templateInjector.js";
import { ImportTemplate } from "./model/importTemplate.js";

/**
 * Social graphics library:
 * a TS Library that generates dynamic Social Media images
 */
export class SGL {

	//#region properties
	private templateInject: TemplateInjector;
	//#endregion

	constructor() {
		this.templateInject = new TemplateInjector();
	}

	//#region generator
	/**
	 * Generators social graphics library
	 * @param teamName
	 * @param playerName
	 * @param mode
	 * @param containerId
	 * @param imgMode
	 * @param [generateLink]
	 */
	public generator(teamName: string, playerName: string, mode: string, containerId: string, imgMode: string, generateLink?: boolean): void {

		Generator.run(teamName, playerName, mode, containerId, imgMode, this.templateInject, generateLink);

	}
	//#endregion

	//#region multiGenerator
	/**
	 * Multis generator
	 * @param teamName
	 * @param playerName
	 * @param calls
	 */
	public multiGenerator(teamName: string, playerName: string, calls: Array<Call>): void {

		calls.forEach(async element => {
			this.generator(teamName, playerName, element.mode, element.containerId, element.imgMode, element.generateLink);
		});

	}
	//#endregion

	//#region getImageDataUrl
	/**
	 * Gets image data url
	 * @param teamName
	 * @param playerName
	 * @param mode
	 * @param imgMode
	 * @returns image data url
	 */
	public async getImageDataUrl(teamName: string, playerName: string, mode: string, imgMode: string): Promise<string> {
		return await Generator.getImageDataUrl(teamName, playerName, mode, imgMode, this.templateInject);
	}
	//#endregion

	//#region info
	/**
	 * Infos social graphics library
	 * @returns info
	 */
	public static info(): object {

		return { "SGL Info": new Info() }

	}
	//#endregion

	//#region injector
	/**
	 * Injects templates into social graphics library
	 * @param importedTemplates
	 */
	public inject(importedTemplates: Array<ImportTemplate>): void {

		this.templateInject.injector(importedTemplates)

	}
	//#endregion

	//#region version
	/**
	 * Version of social graphics library
	 */
	public static readonly VERSION: string = new Info().getVersion()
	//#endregion
}
