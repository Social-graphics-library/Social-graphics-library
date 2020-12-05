import { Elevate_Template } from "../template/elevate-title.template";
import { False_Template } from "../template/false.template";
import { Logo_Template } from "../template/logo.template";
import { Twitch_Template } from "../template/twitch-title.template";
import { Twitter_Template } from "../template/twitter-title.template";
import { Youtube_Template } from "../template/youtube-title.template";
import { ImageRenderer } from "./imageRenderer";
import { Template } from "../model/templateBase";
import { TemplateInjector } from "./templateInjector";

/**
 * Generator
 */
export class Generator {

	/**
	 * Runs generator
	 * @param teamName
	 * @param playerName
	 * @param mode
	 * @param containerId
	 * @param imgMode
	 * @param [generateLink]
	 */
	public static run(teamName: string, playerName: string, mode: string, containerId: string, imgMode: string, generateLink?: boolean, templateInjector?: TemplateInjector): void {
		let svgString: string,
			width: number,
			height: number,
			tempTemplate: Template;

		if (teamName === "") {
			teamName = "Community";
		}

		if (playerName === "") {
			playerName = "Player";
		}

		teamName = encodeURI(teamName.replace("&", "and"));
		playerName = encodeURI(playerName.replace("&", "and"));

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

		if (templateInjector!.call(mode) != null) {
			tempTemplate = templateInjector!.call(mode)!.template
			svgString = tempTemplate.template(teamName, playerName)
			width = tempTemplate.width
			height = tempTemplate.height
		}

		ImageRenderer.renderImage(svgString, width, height, containerId, imgMode, generateLink)
	}
}
