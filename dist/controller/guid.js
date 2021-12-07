/**
 * Generates a new GUID string.
 */
export class Guid {
    constructor() {
        this.guid = Guid.newGuid();
    }
    /**
     * New guid
     * @returns Guid
     */
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    toString() {
        return this.guid;
    }
}
//# sourceMappingURL=guid.js.map