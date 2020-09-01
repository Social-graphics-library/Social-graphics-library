import {False_Template} from "./false.template";
import {Logo_Template} from "./logo.template";
import {Call} from "./call";
import { ENGINE_METHOD_DIGESTS } from "constants";

class SocialGraphicsLibrary {

    public static generator(teamName: string, mode: string, containerId: string, imgMode: string): void {
        let svgString: string;
        let width: number;
        let height: number;

        switch (mode) {
            case 'youtube-title':
                svgString = Youtube_Template.template(teamName);
                width = Youtube_Template.width;
                height = Youtube_Template.height;
                break;

            case 'twitch-title':
                svgString = Twitch_Template.template(teamName);
                width = Twitch_Template.width;
                height = Twitch_Template.height;
                break;

            case 'twitter-title':
                svgString = Twitter_Template.template(teamName);
                width = Twitter_Template.width;
                height = Twitter_Template.height;
                break;

            case 'elavate-title':
                svgString = Elevate_Template.template(teamName);
                width = Elevate_Template.width;
                height = Elevate_Template.height;
                break;

            case 'logo':
				svgString = Logo_Template.template();
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

    static printImage(svgString: string, width: any, height: any, containerId: string, imgMode:string) {

        let xml = svgString,
            data = "data:image/svg+xml;charset=utf-8;base64, " + btoa(xml),
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
                img.setAttribute('width', width);
                img.setAttribute('height', height);

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


        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);
        canvas.setAttribute('id', 'render-canvas' + containerId);

        img.setAttribute('src', data);
        img.setAttribute('width', width);
        img.setAttribute('height', height);

        container.appendChild(canvas);
        let renderCanvas = <HTMLCanvasElement>  document.getElementById('render-canvas' + containerId)!;

        let ctx = renderCanvas.getContext('2d');

        img.onload = function() {

            ctx!.drawImage(img, 0, 0);

            let imgPng = renderCanvas.toDataURL(imgAtr, 1);

            width = width / 4;
            height = height / 4;

            img2.setAttribute('src', imgPng);
            img2.setAttribute('width', width);
            img2.setAttribute('height', height);
            downloadLink.setAttribute('href', imgPng);
            downloadLink.setAttribute('download', 'image.' + imgMode);
            downloadLink.innerHTML = 'Download Link';

            container.innerHTML = "";

            container.appendChild(img2);
            container.appendChild(downloadLink);
        };

    }

    public static multiGenerator(teamName: string, calls: Array<Call>): void {
        calls.forEach(element => {
			SocialGraphicsLibrary.generator(teamName, element.mode, element.containerId, element.imgMode);
        });
    }
}

export default SocialGraphicsLibrary;
