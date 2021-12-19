import { ErrorCodes } from "../model/errorCodes.js";
/**
 * Template injector
 */
export class TemplateInjector {
    /**
     * Inject list of template injector
     */
    injectList;
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
                throw new Error(ErrorCodes.TEMPLATE_INJECTOR_ERROR);
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
    /**
     * Gets list
     * @returns list of injected Templates
     */
    getList() {
        return this.injectList;
    }
    /**
     * Checks template
     * @param mode
     * @param [templateName]
     * @param [template]
     * @returns boolean | response object
     */
    checkTemplate(mode, templateName, template) {
        switch (mode) {
            case 'basic':
                if (templateName != ''
                    && templateName != null
                    && templateName != undefined
                    && this.call(templateName) != null) {
                    let tmp = this.call(templateName);
                    if (!tmp
                        || !tmp.template
                        || tmp.template === undefined
                        || tmp.template.width <= 0
                        || tmp.template.height <= 0) {
                        return false;
                    }
                    return true;
                }
                else {
                    return false;
                }
            case 'advanced':
                const cache = [];
                try {
                    cache.push(template);
                }
                catch (error) {
                    return false;
                }
                cache.forEach(tmp => {
                    if (!tmp
                        || tmp.width <= 0
                        || tmp.height <= 0
                        || tmp.template == undefined
                        || tmp.template == null
                        || templateName == ''
                        || templateName == null
                        || templateName == undefined) {
                        return false;
                    }
                    else {
                        return true;
                    }
                });
                return true;
            case 'all':
                let falseList = [];
                this.injectList.forEach(template => {
                    if (template === null
                        || template.callName === null
                        || template.callName === undefined
                        || template.template === null
                        || template.template === undefined
                        || template.template.width <= 0
                        || template.template.height <= 0) {
                        falseList.push(template);
                    }
                });
                if (falseList.length > 0) {
                    let response = {
                        response: false,
                        falseList: falseList
                    };
                    return response;
                }
                return true;
            default:
                return false;
        }
    }
}
//# sourceMappingURL=templateInjector.js.map