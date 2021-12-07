export class Info {
    //#endregion
    //#region constructor
    /**
     * Creates an instance of info.
     */
    constructor() {
        //#region vars
        /**
         * Version  of info
         */
        this._version = "2.0.0";
        /**
         * Author  of info
         */
        this._author = "Jonas Pfalzgraf";
        /**
         * License  of info
         */
        this._license = "MPL-2.0";
        /**
         * Repository  of info
         */
        this._repository = "https://github.com/Social-graphics-library/Social-graphics-library";
        /**
         * Repository  of info
         */
        this._homepage = "https://social-graphics-library.net/";
        /**
         * Install  of info
         */
        this._install = "npm i social-graphics-library";
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