import { ImportTemplate } from "../model/importTemplate.js";
/**
 * Template injector
 */
export declare class TemplateInjector {
    /**
     * Inject list of template injector
     */
    private injectList;
    /**
     * Creates an instance of template injector.
     */
    constructor();
    /**
     * Injectors template injector
     * @param importedTemplates
     */
    injector(importedTemplates: Array<ImportTemplate>): void;
    /**
     * Calls template injector
     * @param templateName
     * @returns call
     */
    call(templateName: string): ImportTemplate | null;
}
//# sourceMappingURL=templateInjector.d.ts.map