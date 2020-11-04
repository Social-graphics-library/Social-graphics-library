import { Call } from "./call";
declare class SocialGraphicsLibrary {
    /**
     * Generators social graphics library
     * @param teamName
     * @param playerName
     * @param mode
     * @param containerId
     * @param imgMode
     */
    static generator(teamName: string, playerName: string, mode: string, containerId: string, imgMode: string): void;
    /**
     * Prints image
     * @param svgString
     * @param width
     * @param height
     * @param containerId
     * @param imgMode
     * @returns image
     */
    static printImage(svgString: string, width: number, height: number, containerId: string, imgMode: string): void;
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
}
export default SocialGraphicsLibrary;
