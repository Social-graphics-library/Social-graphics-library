"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SGL = void 0;
const info_1 = require("./model/info");
const generator_1 = require("./controller/generator");
const templateInjector_1 = require("./controller/templateInjector");
/**
 * Social graphics library:
 * a TS Library that generates dynamic Social Media images
 */
class SGL {
    //#endregion
    constructor() {
        this.templateInject = new templateInjector_1.TemplateInjector();
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
        generator_1.Generator.run(teamName, playerName, mode, containerId, imgMode, this.templateInject, generateLink);
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
    //#region info
    /**
     * Infos social graphics library
     * @returns info
     */
    static info() {
        return { "SGL Info": new info_1.Info() };
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
exports.SGL = SGL;
//#endregion
//#region version
/**
 * Version of social graphics library
 */
SGL.VERSION = new info_1.Info().getVersion();
//# sourceMappingURL=sgl.js.map