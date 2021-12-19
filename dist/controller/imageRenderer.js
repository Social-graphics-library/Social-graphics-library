import { False_Template } from "../template/false.template.js";
import { Guid } from "./guid.js";
/**
 * Image renderer
 */
export class ImageRenderer {
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
    static renderImage(svgString, width, height, containerId, imgMode, generateLink) {
        let xml = svgString, parser = new DOMParser(), result = parser.parseFromString(xml, 'text/xml'), inlineSVG = result.getElementsByTagName('svg')[0];
        inlineSVG.setAttribute('width', width.toString());
        inlineSVG.setAttribute('height', height.toString());
        let data = "data:image/svg+xml;charset=utf-8;base64, " + window.btoa(new XMLSerializer().serializeToString(inlineSVG)), img = new Image(), img2 = new Image(), canvas = document.createElement('canvas'), imgAtr, container = document.getElementById(containerId);
        switch (imgMode) {
            case 'svg':
                width = width / 4;
                height = height / 4;
                img.setAttribute('src', data);
                img.setAttribute('width', width.toString());
                img.setAttribute('height', height.toString());
                container.innerHTML = "";
                container.appendChild(img);
                if (generateLink) {
                    let downloadLink = document.createElement('a');
                    downloadLink.setAttribute('href', data);
                    downloadLink.setAttribute('download', 'image.' + imgMode);
                    downloadLink.innerHTML = 'Download Link';
                    container.appendChild(downloadLink);
                }
                return;
            case 'png':
                imgAtr = 'image/png';
                break;
            case 'jpeg':
                imgAtr = 'image/jpeg';
                break;
            case 'webp':
                imgAtr = 'image/webp';
                break;
            default:
                data = "data:image/svg+xml;charset=utf-8;base64, " + window.btoa(False_Template.template());
                width = False_Template.width;
                height = False_Template.height;
                imgAtr = 'image/png';
                break;
        }
        canvas.setAttribute('width', width.toString());
        canvas.setAttribute('height', height.toString());
        canvas.setAttribute('id', 'render-canvas' + containerId);
        canvas.setAttribute('display', 'none');
        img.setAttribute('src', data);
        img.setAttribute('width', width.toString());
        img.setAttribute('height', height.toString());
        try {
            container.appendChild(canvas);
        }
        catch (error) {
            throw new Error("The Container " + containerId + " is not defined!");
        }
        let renderCanvas = document.getElementById('render-canvas' + containerId);
        let ctx;
        let imgDataUrl;
        ctx = renderCanvas.getContext('2d');
        img.onload = () => {
            ctx.drawImage(img, 0, 0);
            imgDataUrl = renderCanvas.toDataURL(imgAtr, 1.0);
            width = width / 4;
            height = height / 4;
            img2.setAttribute('src', imgDataUrl);
            img2.setAttribute('width', width.toString());
            img2.setAttribute('height', height.toString());
            container.innerHTML = "";
            container.appendChild(img2);
            if (generateLink) {
                let downloadLink = document.createElement('a');
                downloadLink.setAttribute('href', imgDataUrl);
                downloadLink.setAttribute('download', 'image.' + imgMode);
                downloadLink.innerHTML = 'Download Link';
                container.appendChild(downloadLink);
            }
        };
    }
    /**
     * Gets image data url
     * @param svgString
     * @param width
     * @param height
     * @param imgMode
     * @returns image data url
     */
    static async getImageDataUrl(svgString, width, height, imgMode) {
        let xml = svgString, parser = new DOMParser(), result = parser.parseFromString(xml, 'text/xml'), inlineSVG = result.getElementsByTagName('svg')[0];
        inlineSVG.setAttribute('width', width.toString());
        inlineSVG.setAttribute('height', height.toString());
        let data = "data:image/svg+xml;charset=utf-8;base64, " + window.btoa(new XMLSerializer().serializeToString(inlineSVG)), img = new Image(), canvas = document.createElement('canvas'), imgAtr, imgDataUrl, containerId = new Guid().toString(), container = document.createElement('div');
        container.id = containerId;
        document.body.appendChild(container);
        switch (imgMode) {
            case 'svg':
                width = width / 4;
                height = height / 4;
                img.setAttribute('src', data);
                img.setAttribute('width', width.toString());
                img.setAttribute('height', height.toString());
                imgDataUrl = data;
                break;
            case 'png':
                imgAtr = 'image/png';
                break;
            case 'jpeg':
                imgAtr = 'image/jpeg';
                break;
            case 'webp':
                imgAtr = 'image/webp';
                break;
            default:
                data = "data:image/svg+xml;charset=utf-8;base64, " + window.btoa(False_Template.template());
                width = False_Template.width;
                height = False_Template.height;
                imgAtr = 'image/png';
                break;
        }
        canvas.setAttribute('width', width.toString());
        canvas.setAttribute('height', height.toString());
        canvas.setAttribute('id', 'render-canvas-string' + new Guid().toString());
        canvas.setAttribute('display', 'none');
        img.setAttribute('src', data);
        img.setAttribute('width', width.toString());
        img.setAttribute('height', height.toString());
        try {
            container.appendChild(canvas);
            container.appendChild(img);
        }
        catch (error) {
            throw new Error("The Container " + containerId + " is not defined!");
        }
        let renderCanvas = document.getElementById(canvas.id);
        let ctx;
        ctx = renderCanvas.getContext('2d');
        return new Promise((resolve) => {
            img.onload = () => {
                ctx.drawImage(img, 0, 0);
                imgDataUrl = renderCanvas.toDataURL(imgAtr, 1.0);
                document.body.removeChild(container);
                resolve(imgDataUrl);
            };
        });
    }
}
//# sourceMappingURL=imageRenderer.js.map