/**
 * Image renderer
 */
export declare class ImageRenderer {
    /**
     * Renders image
     * @param svgString
     * @param width
     * @param height
     * @param containerId
     * @param imgMode
     * @param [generateLink]
     * @returns image
     */
    static renderImage(svgString: string, width: number, height: number, containerId: string, imgMode: string, generateLink?: boolean): void;
    /**
     * Gets image data url
     * @param svgString
     * @param width
     * @param height
     * @param imgMode
     * @returns image data url
     */
    static getImageDataUrl(svgString: string, width: number, height: number, imgMode: string): Promise<string>;
}
//# sourceMappingURL=imageRenderer.d.ts.map