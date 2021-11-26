(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../template/false.template", "../template/logo.template", "../template/twitch-title.template", "../template/twitter-title.template", "../template/youtube-title.template", "./imageRenderer", "./stringCleaner"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Generator = void 0;
    const false_template_1 = require("../template/false.template");
    const logo_template_1 = require("../template/logo.template");
    const twitch_title_template_1 = require("../template/twitch-title.template");
    const twitter_title_template_1 = require("../template/twitter-title.template");
    const youtube_title_template_1 = require("../template/youtube-title.template");
    const imageRenderer_1 = require("./imageRenderer");
    const stringCleaner_1 = require("./stringCleaner");
    /**
     * Generator
     */
    class Generator {
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
            teamName = stringCleaner_1.StringCleaner.run(teamName);
            playerName = stringCleaner_1.StringCleaner.run(playerName);
            switch (mode) {
                case "youtube-title":
                    svgString = youtube_title_template_1.Youtube_Template.template(teamName, playerName);
                    width = youtube_title_template_1.Youtube_Template.width;
                    height = youtube_title_template_1.Youtube_Template.height;
                    break;
                case "twitch-title":
                    svgString = twitch_title_template_1.Twitch_Template.template(teamName, playerName);
                    width = twitch_title_template_1.Twitch_Template.width;
                    height = twitch_title_template_1.Twitch_Template.height;
                    break;
                case "twitter-title":
                    svgString = twitter_title_template_1.Twitter_Template.template(teamName, playerName);
                    width = twitter_title_template_1.Twitter_Template.width;
                    height = twitter_title_template_1.Twitter_Template.height;
                    break;
                case "logo":
                    svgString = logo_template_1.Logo_Template.template(playerName);
                    width = logo_template_1.Logo_Template.width;
                    height = logo_template_1.Logo_Template.height;
                    break;
                default:
                    svgString = false_template_1.False_Template.template();
                    width = false_template_1.False_Template.width;
                    height = false_template_1.False_Template.height;
                    break;
            }
            if (templateInjector.call(mode) !== null) {
                tempTemplate = templateInjector.call(mode).template;
                svgString = tempTemplate.template(teamName, playerName);
                width = tempTemplate.width;
                height = tempTemplate.height;
            }
            imageRenderer_1.ImageRenderer.renderImage(svgString, width, height, containerId, imgMode, generateLink);
        }
    }
    exports.Generator = Generator;
});
//# sourceMappingURL=generator.js.map