export class Info {

	//#region vars
	/**
	 * Version  of info
	 */
	private readonly _version: string = "2.1.0"

	/**
	 * Author  of info
	 */
	private readonly _author: string = "Jonas Pfalzgraf"

	/**
	 * License  of info
	 */
	private readonly _license: string = "MPL-2.0"

	/**
	 * Repository  of info
	 */
	private readonly _repository: string = "https://github.com/Social-graphics-library/Social-graphics-library"

	/**
	 * Repository  of info
	 */
	private readonly _homepage: string = "https://social-graphics-library.net/"

	/**
	 * Install  of info
	 */
	private readonly _install: string = "npm i social-graphics-library"
	//#endregion

	//#region constructor
	/**
	 * Creates an instance of info.
	 */
	public constructor() {
		this._version;
		this._author;
		this._license;
		this._repository;
		this._install;
		this._homepage;
	}
	//#endregion

	//#region get
	/**
	 * Gets version
	 * @returns version
	 */
	public getVersion(): string {
		return this._version;
	}
	//#endregion

}
