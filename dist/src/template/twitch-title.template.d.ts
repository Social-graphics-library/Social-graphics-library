import Template from "../model/templateBase";
export declare class Twitch_Template extends Template {
    /**
     * Width  of twitch template
     */
    static width: number;
    /**
     * Height  of twitch template
     */
    static height: number;
    /**
     * Templates twitch template
     * @param teamName
     * @param playerName
     * @returns template
     */
    static template(teamName: string, playerName: string): string;
}
