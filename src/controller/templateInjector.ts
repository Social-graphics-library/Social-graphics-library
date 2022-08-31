import { ImportTemplate } from "../model/importTemplate.js";
import { ErrorCodes } from "../model/errorCodes.js";
import { Template } from "src/model/templateBase.js";
import { TcheckTemplateMode } from "src/types/TcheckTemplateMode.js";
import { TcheckAllTemplatesFalse } from "src/types/TchekAllTemplatesFalse.js";

/**
 * Template injector
 */
export class TemplateInjector {

	/**
	 * Inject list of template injector
	 */
	private injectList: Array<ImportTemplate>

	/**
	 * Creates an instance of template injector.
	 */
	constructor() {
		this.injectList = []
	}

	/**
	 * Injectors template injector
	 * @param importedTemplates
	 */
	public injector(importedTemplates: Array<ImportTemplate>): void {

		importedTemplates.forEach(template => {
			if (!template.callName || !template.template) {
				throw new Error(ErrorCodes.TEMPLATE_INJECTOR_ERROR);
			}
			this.injectList.push(template)
		})

	}

	/**
	 * Calls template injector
	 * @param templateName
	 * @returns call
	 */
	public call(templateName: string): ImportTemplate | null {

		let result: ImportTemplate | null = null;

		this.injectList.forEach(template => {
			if (template.callName == templateName) {
				result = template
			}
		});

		return result;
	}

	/**
	 * Gets list
	 * @returns list of injected Templates
	 */
	public getList(): Array<ImportTemplate> {
		return this.injectList
	}

	/**
	 * Checks template
	 * @param mode
	 * @param [templateName]
	 * @param [template]
	 * @returns boolean | response object
	 */
	public checkTemplate(mode: TcheckTemplateMode, templateName?: string, template?: Template): boolean | TcheckAllTemplatesFalse {

		switch (mode) {

			case 'basic':

				if (templateName != ''
					&& templateName != null
					&& templateName != undefined
					&& this.call(templateName) != null
				) {

					const tmp = this.call(templateName)

					if (!tmp
						|| !tmp.template
						|| tmp.template === undefined
						|| tmp.template.width <= 0
						|| tmp.template.height <= 0
					) {
						return false
					}

					return true

				} else {
					return false
				}

			case 'advanced':

				const cache: Template[] = []

				try {
					cache.push(<Template>template)
				} catch (error) {
					return false
				}

				cache.forEach(tmp => {
					if (!tmp
						|| tmp.width <= 0
						|| tmp.height <= 0
						|| tmp.template == undefined
						|| tmp.template == null
						|| templateName == ''
						|| templateName == null
						|| templateName == undefined
					) {
						return false
					} else {
						return true
					}
				})

				return true

			case 'all':

				const falseList: ImportTemplate[] = []

				this.injectList.forEach(template => {
					if (template === null
						|| template.callName === null
						|| template.callName === undefined
						|| template.template === null
						|| template.template === undefined
						|| template.template.width <= 0
						|| template.template.height <= 0
					) {
						falseList.push(template)
					}
				});

				if (falseList.length > 0) {

					const response: TcheckAllTemplatesFalse = {
						response: false,
						falseList: falseList
					}

					return response
				}

				return true

			default:
				return false
		}
	}
}
