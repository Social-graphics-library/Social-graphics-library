import { ImportTemplate } from "../model/importTemplate.js";
import { Template } from "src/model/templateBase.js";
import { TcheckTemplateMode } from "src/types/TcheckTemplateMode.js";
import { TcheckAllTemplatesFalse } from "src/types/TchekAllTemplatesFalse.js";
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
    /**
     * Gets list
     * @returns list of injected Templates
     */
    getList(): Array<ImportTemplate>;
    /**
     * Checks template
     * @param mode
     * @param [templateName]
     * @param [template]
     * @returns boolean | response object
     */
    checkTemplate(mode: TcheckTemplateMode, templateName?: string, template?: Template): boolean | TcheckAllTemplatesFalse;
}
//# sourceMappingURL=templateInjector.d.ts.map