import { Call } from "./model/call";
import { ImportTemplate } from "./model/importTemplate";
export default class SGL {
    private templateInject;
    constructor();
    generator(teamName: string, playerName: string, mode: string, containerId: string, imgMode: string, generateLink?: boolean): void;
    multiGenerator(teamName: string, playerName: string, calls: Array<Call>): void;
    static info(): object;
    inject(importedTemplates: Array<ImportTemplate>): void;
    static readonly VERSION: string;
}
//# sourceMappingURL=sgl.d.ts.map