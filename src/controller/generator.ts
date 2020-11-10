import { Elevate_Template } from "../template/elevate-title.template";
import { False_Template } from "../template/false.template";
import { Logo_Template } from "../template/logo.template";
import { Twitch_Template } from "../template/twitch-title.template";
import { Twitter_Template } from "../template/twitter-title.template";
import { Youtube_Template } from "../template/youtube-title.template";
import ImageRenderer from "./imageRenderer";

/**
 * Generator
 */
export default class Generator {

	/**
	 * Runs generator
	 * @param teamName
	 * @param playerName
	 * @param mode
	 * @param containerId
	 * @param imgMode
	 * @param [generateLink]
	 */
	public static run(teamName: string, playerName: string, mode: string, containerId: string, imgMode: string, generateLink?: boolean): void {
		let svgString: string;
		let width: number;
		let height: number;

		if (teamName === "") {
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

		ImageRenderer.renderImage(svgString, width, height, containerId, imgMode, generateLink)
	}
}
