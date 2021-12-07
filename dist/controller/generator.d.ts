import { TemplateInjector } from "./templateInjector.js";
/**
 * Generator
 */
export declare class Generator {
    /**
     * Runs generator
     * @param teamName
     * @param playerName
     * @param mode
     * @param containerId
     * @param imgMode
     * @param [generateLink]
     */
    static run(teamName: string, playerName: string, mode: string, containerId: string, imgMode: string, templateInjector: TemplateInjector, generateLink?: boolean): void;
    static getImageDataUrl(teamName: string, playerName: string, mode: string, imgMode: string, templateInjector: TemplateInjector): Promise<string>;
}
//# sourceMappingURL=generator.d.ts.map