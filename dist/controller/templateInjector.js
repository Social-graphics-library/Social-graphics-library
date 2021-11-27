"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateInjector = void 0;
/**
 * Template injector
 */
class TemplateInjector {
    /**
     * Creates an instance of template injector.
     */
    constructor() {
        this.injectList = [];
    }
    /**
     * Injectors template injector
     * @param importedTemplates
     */
    injector(importedTemplates) {
        importedTemplates.forEach(template => {
            if (!template.callName || !template.template) {
                throw new Error("#SGL001 One of the injected templates is missing a property!");
            }
            this.injectList.push(template);
        });
    }
    /**
     * Calls template injector
     * @param templateName
     * @returns call
     */
    call(templateName) {
        let result = null;
        this.injectList.forEach(template => {
            if (template.callName == templateName) {
                result = template;
            }
        });
        return result;
    }
}
exports.TemplateInjector = TemplateInjector;
//# sourceMappingURL=templateInjector.js.map