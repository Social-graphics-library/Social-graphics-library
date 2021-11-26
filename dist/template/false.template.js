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
    exports.False_Template = void 0;
    class False_Template {
        //#region setup
        /**
         * Width  of false template
         */
        static width = 1000;
        /**
         * Height  of false template
         */
        static height = 1000;
        //#endregion
        //#region template
        /**
         * Templates false template
         * @returns template
         */
        static template() {
            return '<svg viewBox="0 0 2000 2000" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">\n' +
                '  <path d="M1003.31 833.751l809.64-809.639 164.92 164.916-809.64 809.64 809.64 809.642-164.92 164.91-809.64-809.64-809.64 809.64-164.916-164.91 809.639-809.642-809.639-809.64L193.67 24.112l809.64 809.639z" fill="red"/>\n' +
                '</svg>\n';
        }
    }
    exports.False_Template = False_Template;
});
//# sourceMappingURL=false.template.js.map