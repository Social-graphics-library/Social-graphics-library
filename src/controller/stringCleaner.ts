/**
 * Image renderer
 */
export class StringCleaner {

	/**
	 * Runs string cleaner
	 * @param item
	 * @returns run
	 */
	public static run(item: string): string {

		item = item.replace(/[^a-zA-Z0-9\_\-\.\~]/g, "");

		return item;
	}
}
