import { Call } from "./model/call.js";
import { ImportTemplate } from "./model/importTemplate.js";
/**
 * Social graphics library:
 * a TS Library that generates dynamic Social Media images
 */
export declare class SGL {
    private templateInject;
    constructor();
    /**
     * Generators social graphics library
     * @param teamName
     * @param playerName
     * @param mode
     * @param containerId
     * @param imgMode
     * @param [generateLink]
     */
    generator(teamName: string, playerName: string, mode: string, containerId: string, imgMode: string, generateLink?: boolean): void;
    /**
     * Multis generator
     * @param teamName
     * @param playerName
     * @param calls
     */
    multiGenerator(teamName: string, playerName: string, calls: Array<Call>): void;
    /**
     * Gets image data url
     * @param teamName
     * @param playerName
     * @param mode
     * @param imgMode
     * @returns image data url
     */
    getImageDataUrl(teamName: string, playerName: string, mode: string, imgMode: string): Promise<string>;
    /**
     * Infos social graphics library
     * @returns info
     */
    static info(): object;
    /**
     * Injects templates into social graphics library
     * @param importedTemplates
     */
    inject(importedTemplates: Array<ImportTemplate>): void;
    /**
     * Version of social graphics library
     */
    static readonly VERSION: string;
}
//# sourceMappingURL=sgl.d.ts.map