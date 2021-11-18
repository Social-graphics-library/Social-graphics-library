import { ImportTemplate } from "../model/importTemplate";
export declare class TemplateInjector {
    private injectList;
    constructor();
    injector(importedTemplates: Array<ImportTemplate>): void;
    call(templateName: string): ImportTemplate | null;
}
//# sourceMappingURL=templateInjector.d.ts.map