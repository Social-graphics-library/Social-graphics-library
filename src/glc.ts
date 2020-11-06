import { False_Template } from "./template/false.template";
import { Logo_Template } from "./template/logo.template";
import Call from "./model/call";
import { Youtube_Template } from "./template/youtube-title.template";
import { Elevate_Template } from "./template/elevate-title.template";
import { Twitch_Template } from "./template/twitch-title.template";
import { Twitter_Template } from "./template/twitter-title.template";
import { Info } from "./model/info";

class SocialGraphicsLibrary {

	//#region generator
	/**
	 * Generators social graphics library
	 * @param teamName
	 * @param playerName
	 * @param mode
	 * @param containerId
	 * @param imgMode
	 */
	public static generator(teamName: string, playerName:string, mode: string, containerId: string, imgMode: string): void {
        let svgString: string;
        let width: number;
		let height: number;

		if (teamName === "" ) {
			teamName = "Community";
		}

		if (playerName === "") {
			playerName = "Player";
		}

        switch (mode) {
            case "youtube-title":
				svgString = Youtube_Template.template(teamName, playerName);
                width = Youtube_Template.width;
                height = Youtube_Template.height;
                break;

			case "twitch-title":
				svgString = Twitch_Template.template(teamName, playerName);
                width = Twitch_Template.width;
                height = Twitch_Template.height;
                break;

			case "twitter-title":
				svgString = Twitter_Template.template(teamName, playerName);
                width = Twitter_Template.width;
                height = Twitter_Template.height;
                break;

			case "elavate-title":
				svgString = Elevate_Template.template(teamName, playerName);
                width = Elevate_Template.width;
                height = Elevate_Template.height;
                break;

			case "logo":
				svgString = Logo_Template.template(playerName);
				width = Logo_Template.width;
				height = Logo_Template.height;
                break;

            default:
                svgString = False_Template.template();
                width = False_Template.width;
                height = False_Template.height;
                break;
        }

        this.printImage(svgString, width, height, containerId, imgMode);

	}

	//#endregion

	//#region printImage
	/**
	 * Prints image
	 * @param svgString
	 * @param width
	 * @param height
	 * @param containerId
	 * @param imgMode
	 * @returns image
	 */
	static printImage(svgString: string, width: number, height: number, containerId: string, imgMode:string):void {

		let xml = svgString,
			parser = new DOMParser(),
			result: XMLDocument = parser.parseFromString(xml, 'text/xml'),
			inlineSVG = result.getElementsByTagName('svg')[0];

		inlineSVG.setAttribute('width', width.toString());
        inlineSVG.setAttribute('height', height.toString());

		let data = "data:image/svg+xml;charset=utf-8;base64, " + btoa(new XMLSerializer().serializeToString(inlineSVG)),
			img = new Image(),
			img2 = new Image(),
			canvas = document.createElement('canvas'),
			imgAtr: string,
			downloadLink = document.createElement('a'),
			container = document.getElementById(containerId)!
			;

        switch (imgMode) {
            case 'svg':
                width = width / 4;
                height = height / 4;
                img.setAttribute('src', data);
                img.setAttribute('width', width.toString());
                img.setAttribute('height', height.toString());

                downloadLink.setAttribute('href', data);
                downloadLink.setAttribute('download', 'image.' + imgMode);
                downloadLink.innerHTML = 'Download Link';

                container.innerHTML = "";

                container.appendChild(img);
                container.appendChild(downloadLink);
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
                data = "data:image/svg+xml;charset=utf-8;base64, " + btoa(False_Template.template());
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
		} catch (error) {
			throw new Error("The Container " + containerId + " is not defined!");
		}

		let renderCanvas = <HTMLCanvasElement>document.getElementById('render-canvas' + containerId)!;

		let ctx: CanvasRenderingContext2D | null;
		let imgDataUrl: string;

        img.onload = async function() {

			ctx = renderCanvas.getContext('2d');

			ctx!.drawImage(img, 0, 0);

			imgDataUrl = renderCanvas.toDataURL(imgAtr, 1.0);

            width = width / 4;
			height = height / 4;

            img2.setAttribute('src', imgDataUrl);
            img2.setAttribute('width', width.toString());
            img2.setAttribute('height', height.toString());
            downloadLink.setAttribute('href', imgDataUrl);
            downloadLink.setAttribute('download', 'image.' + imgMode);
			downloadLink.innerHTML = 'Download Link';

            container.innerHTML = "";

            container.appendChild(img2);
            container.appendChild(downloadLink);
		};

	}
	//#endregion

	//#region multiGenerator
	/**
	 * Multis generator
	 * @param teamName
	 * @param playerName
	 * @param calls
	 */
	public static multiGenerator(teamName: string, playerName:string, calls: Array<Call>): void {
        calls.forEach( async element => {
			SocialGraphicsLibrary.generator(teamName, playerName, element.mode, element.containerId, element.imgMode);
        });
	}
	//#endregion

	//#region info
	/**
	 * Infos social graphics library
	 * @returns info
	 */
	public static info():object {
		return { "SGL Info": new Info() }
	}
	//#endregion

	//#region version
	/**
	 * Version of social graphics library
	 */
	public static readonly VERSION: string = new Info().getVersion()
	//#endregion
}

export default SocialGraphicsLibrary;
