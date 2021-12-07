/**
 * Image renderer
 */
export class StringCleaner {
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
//# sourceMappingURL=stringCleaner.js.map