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
    exports.StringCleaner = void 0;
    /**
     * Image renderer
     */
    class StringCleaner {
        /**
         * Runs string cleaner
         * @param item
         * @returns run
         */
        static run(item) {
            item = item.replace(/[^a-zA-Z0-9\_\-\.\~]/g, "");
            return item;
        }
    }
    exports.StringCleaner = StringCleaner;
});
//# sourceMappingURL=stringCleaner.js.map