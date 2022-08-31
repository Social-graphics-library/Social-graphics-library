/**
 * Generates a new GUID string.
 */
export class Guid {

	private guid: string;

	constructor() {
		this.guid = Guid.newGuid();
	}

	/**
	 * New guid
	 * @returns Guid
	 */
	private static newGuid() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	}

	public toString() {
		return this.guid;
	}
}
