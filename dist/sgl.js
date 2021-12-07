var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Info } from "./model/info.js";
import { Generator } from "./controller/generator.js";
import { TemplateInjector } from "./controller/templateInjector.js";
/**
 * Social graphics library:
 * a TS Library that generates dynamic Social Media images
 */
export class SGL {
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
        calls.forEach((element) => __awaiter(this, void 0, void 0, function* () {
            this.generator(teamName, playerName, element.mode, element.containerId, element.imgMode, element.generateLink);
        }));
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
    getImageDataUrl(teamName, playerName, mode, imgMode) {
        return __awaiter(this, void 0, void 0, function* () {
            return Generator.getImageDataUrl(teamName, playerName, mode, imgMode, this.templateInject);
        });
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
}
//#endregion
//#region version
/**
 * Version of social graphics library
 */
SGL.VERSION = new Info().getVersion();
//# sourceMappingURL=sgl.js.map