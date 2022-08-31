export class Info {
    //#region vars
    /**
     * Version  of info
     */
    _version = "2.1.1";
    /**
     * Author  of info
     */
    _author = "Jonas Pfalzgraf";
    /**
     * License  of info
     */
    _license = "MPL-2.0";
    /**
     * Repository  of info
     */
    _repository = "https://github.com/Social-graphics-library/Social-graphics-library";
    /**
     * Repository  of info
     */
    _homepage = "https://social-graphics-library.net/";
    /**
     * Install  of info
     */
    _install = "npm i social-graphics-library";
    //#endregion
    //#region constructor
    /**
     * Creates an instance of info.
     */
    constructor() {
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
    getVersion() {
        return this._version;
    }
}
//# sourceMappingURL=info.js.map