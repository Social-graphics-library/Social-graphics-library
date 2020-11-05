export default abstract class Template {
    /**
     * Width  of template
     */
    static readonly width: number;
    /**
     * Height  of template
     */
    static readonly height: number;
    /**
     * Templates template
     * @param teamName
     * @param playerName
     * @returns template
     */
    template(teamName: string, playerName: string): string;
}
