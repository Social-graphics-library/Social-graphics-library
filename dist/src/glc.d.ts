import { Call } from "./call";
declare class SocialGraphicsLibrary {
    static generator(teamName: string, playerName: string, mode: string, containerId: string, imgMode: string): void;
    static printImage(svgString: string, width: number, height: number, containerId: string, imgMode: string): void;
    static multiGenerator(teamName: string, playerName: string, calls: Array<Call>): void;
    static info(): object;
}
export default SocialGraphicsLibrary;
