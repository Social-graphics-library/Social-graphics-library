export interface Template {
    /**
     * Width  of template
     */
    width: number;
    /**
     * Height  of template
     */
    height: number;
    /**
     * Templates template
     * @param teamName
     * @param playerName
     * @returns template
     */
    template(teamName: string, playerName: string): string;
}
//# sourceMappingURL=templateBase.d.ts.map