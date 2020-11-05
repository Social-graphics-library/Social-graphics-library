import Template from "../model/templateBase";
export declare class Logo_Template extends Template {
    /**
     * Width  of logo template
     */
    static width: number;
    /**
     * Height  of logo template
     */
    static height: number;
    /**
     * Templates logo template
     * @param playerName
     * @returns template
     */
    static template(playerName: string): string;
}
