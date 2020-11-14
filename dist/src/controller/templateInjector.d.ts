import ImportTemplate from "../model/importTemplate";
/**
 * Template injector
 */
export default class TemplateInjector {
    private injectList;
    constructor();
    /**
     * Injectors template injector
     * @param importedTemplates
     */
    injector(importedTemplates: Array<ImportTemplate>): void;
    call(templateName: string): ImportTemplate | null;
}
