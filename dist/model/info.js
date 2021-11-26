(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Info = void 0;
    class Info {
        //#region vars
        /**
         * Version  of info
         */
        _version = "2.0.0_beta_19112021";
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
        _repository = "https://github.com/JosunLP/Social-graphics-library";
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
    exports.Info = Info;
});
//# sourceMappingURL=info.js.map