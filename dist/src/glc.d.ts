import Call from "./model/call";
/**
 * Social graphics library
 */
export default class SocialGraphicsLibrary {
    /**
     * Generators social graphics library
     * @param teamName
     * @param playerName
     * @param mode
     * @param containerId
     * @param imgMode
     * @param [generateLink]
     */
    static generator(teamName: string, playerName: string, mode: string, containerId: string, imgMode: string, generateLink?: boolean): void;
    /**
     * Multis generator
     * @param teamName
     * @param playerName
     * @param calls
     */
    static multiGenerator(teamName: string, playerName: string, calls: Array<Call>): void;
    /**
     * Infos social graphics library
     * @returns info
     */
    static info(): object;
    /**
     * Version of social graphics library
     */
    static readonly VERSION: string;
}
