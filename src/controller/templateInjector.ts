import ImportTemplate from "../model/importTemplate";

/**
 * Template injector
 */
export default class TemplateInjector {

	private injectList: Array<ImportTemplate>

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
				throw new Error("#SGL001 One of the injected templates is missing a property!");
			}
			this.injectList.push(template)
		})

	}

	public call(templateName: string): ImportTemplate | null {

		let result: ImportTemplate | null = null;

		this.injectList.forEach( template => {
			if ( template.callName == templateName ) {
				result = template
			}
		});

		return result;
	}
}
