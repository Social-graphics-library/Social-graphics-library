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
    exports.Example_Template = void 0;
    class Example_Template {
        //#region setup
        /**
         * Width  of example template
         */
        static width = 1000;
        /**
         * Height  of example template
         */
        static height = 1000;
        //#endregion
        //#region template
        /**
         * Templates example template
         * @returns template
         */
        static template(teamName, playerName) {
            teamName;
            playerName;
            return 'svg string';
        }
    }
    exports.Example_Template = Example_Template;
});
//# sourceMappingURL=example.template.js.map