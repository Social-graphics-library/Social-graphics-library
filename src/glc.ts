import {False_Template} from "./false.template";
import {Logo_Template} from "./logo.template";
import {Call} from "./call";
import { Youtube_Template } from "./youtube-title.template";
import { Elevate_Template } from "./elevate-title.template";
import { Twitch_Template } from "./twitch-title.template";
import { Twitter_Template } from "./twitter-title.template";
import { Info } from "./info";

class SocialGraphicsLibrary {

	//#region generator
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
		let imgPng: string;

        img.onload = async () => {

			ctx = renderCanvas.getContext('2d');

			ctx!.drawImage(img, 0, 0);

			imgPng = renderCanvas.toDataURL(imgAtr, 1.0);

            width = width / 4;
            height = height / 4;

            img2.setAttribute('src', imgPng);
            img2.setAttribute('width', width.toString());
            img2.setAttribute('height', height.toString());
            downloadLink.setAttribute('href', imgPng);
            downloadLink.setAttribute('download', 'image.' + imgMode);
            downloadLink.innerHTML = 'Download Link';

            container.innerHTML = "";

            container.appendChild(img2);
            container.appendChild(downloadLink);
        };

	}
	//#endregion

	//#region multiGenerator
	public static multiGenerator(teamName: string, playerName:string, calls: Array<Call>): void {
        calls.forEach(element => {
			SocialGraphicsLibrary.generator(teamName, playerName, element.mode, element.containerId, element.imgMode);
        });
	}
	//#endregion

	//#region info
	public static info():object {
		return { "SGL Info": new Info() }
	}
	//#endregion
}

export default SocialGraphicsLibrary;
