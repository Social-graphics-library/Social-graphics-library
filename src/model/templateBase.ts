export default abstract class Template {

	/**
	 * Width  of template
	 */
	public static readonly width: number

	/**
	 * Height  of template
	 */
	public static readonly height: number

	/**
	 * Templates template
	 * @param teamName
	 * @param playerName
	 * @returns template
	 */
	public template(teamName: string, playerName: string): string {
		teamName;
		playerName;
		return 'svg';
	}

}
