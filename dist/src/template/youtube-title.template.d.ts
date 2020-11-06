import Template from "../model/templateBase";
export declare class Youtube_Template extends Template {
    /**
     * Width  of youtube template
     */
    static readonly width: number;
    /**
     * Height  of youtube template
     */
    static readonly height: number;
    /**
     * Templates youtube template
     * @param teamName
     * @param playerName
     * @returns template
     */
    static template(teamName: string, playerName: string): string;
}
