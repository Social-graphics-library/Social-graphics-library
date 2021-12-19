import { Info } from "./model/info.js";
import { Generator } from "./controller/generator.js";
import { TemplateInjector } from "./controller/templateInjector.js";
/**
 * Social graphics library:
 * a TS Library that generates dynamic Social Media images
 */
export class SGL {
    //#region properties
    /**
     * Template inject of sgl
     */
    templateInject;
    //#endregion
    /**
     * Creates an instance of sgl.
     */
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
    generator(teamName, playerName, mode, containerId, imgMode, generateLink) {
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
    multiGenerator(teamName, playerName, calls) {
        calls.forEach(async (element) => {
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
    async getImageDataUrl(teamName, playerName, mode, imgMode) {
        return Generator.getImageDataUrl(teamName, playerName, mode, imgMode, this.templateInject);
    }
    //#endregion
    //#region info
    /**
     * Infos social graphics library
     * @returns info
     */
    static info() {
        return { "SGL Info": new Info() };
    }
    //#endregion
    //#region injector
    /**
     * Injects templates into social graphics library
     * @param importedTemplates
     */
    inject(importedTemplates) {
        this.templateInject.injector(importedTemplates);
    }
    /**
     * Checks template
     * @param mode
     * @param [templateName]
     * @param [template]
     * @returns boolean | response object
     */
    checkTemplate(mode, templateName, template) {
        return this.templateInject.checkTemplate(mode, templateName, template);
    }
    /**
     * Gets injected templates
     * @returns injected templates
     */
    getInjectedTemplates() {
        return this.templateInject.getList();
    }
    //#endregion
    //#region version
    /**
     * Version of social graphics library
     */
    static VERSION = new Info().getVersion();
}
//# sourceMappingURL=sgl.js.map