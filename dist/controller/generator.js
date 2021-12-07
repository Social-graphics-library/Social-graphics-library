var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { False_Template } from "../template/false.template.js";
import { Logo_Template } from "../template/logo.template.js";
import { Twitch_Template } from "../template/twitch-title.template.js";
import { Twitter_Template } from "../template/twitter-title.template.js";
import { Youtube_Template } from "../template/youtube-title.template.js";
import { ImageRenderer } from "./imageRenderer.js";
import { StringCleaner } from "./stringCleaner.js";
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
    static run(teamName, playerName, mode, containerId, imgMode, templateInjector, generateLink) {
        let svgString, width, height, tempTemplate;
        if (teamName === "") {
            teamName = "Community";
        }
        if (playerName === "") {
            playerName = "Player";
        }
        teamName = StringCleaner.run(teamName);
        playerName = StringCleaner.run(playerName);
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
        if (templateInjector.call(mode) !== null) {
            tempTemplate = templateInjector.call(mode).template;
            svgString = tempTemplate.template(teamName, playerName);
            width = tempTemplate.width;
            height = tempTemplate.height;
        }
        ImageRenderer.renderImage(svgString, width, height, containerId, imgMode, generateLink);
    }
    static getImageDataUrl(teamName, playerName, mode, imgMode, templateInjector) {
        return __awaiter(this, void 0, void 0, function* () {
            let svgString, width, height, tempTemplate;
            if (teamName === "") {
                teamName = "Community";
            }
            if (playerName === "") {
                playerName = "Player";
            }
            teamName = StringCleaner.run(teamName);
            playerName = StringCleaner.run(playerName);
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
            if (templateInjector.call(mode) !== null) {
                tempTemplate = templateInjector.call(mode).template;
                svgString = tempTemplate.template(teamName, playerName);
                width = tempTemplate.width;
                height = tempTemplate.height;
            }
            return ImageRenderer.getImageDataUrl(svgString, width, height, imgMode);
        });
    }
}
//# sourceMappingURL=generator.js.map