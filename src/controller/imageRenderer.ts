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
	public static renderImage(
		svgString: string,
		width: number,
		height: number,
		containerId: string,
		imgMode: string,
		generateLink?: boolean
	): void {
		const xml = svgString,
			parser = new DOMParser(),
			result: XMLDocument = parser.parseFromString(xml, "text/xml"),
			inlineSVG: SVGSVGElement = <SVGSVGElement>(
				result.getElementsByTagName("svg")[0]
			);

		inlineSVG.setAttribute("width", width.toString());
		inlineSVG.setAttribute("height", height.toString());

		const img = new Image(),
			img2 = new Image(),
			canvas = document.createElement("canvas"),
			container = document.getElementById(containerId)!;
		let imgAtr: string,
			data: string =
				"data:image/svg+xml;charset=utf-8;base64, " +
				window.btoa(new XMLSerializer().serializeToString(inlineSVG));

		switch (imgMode) {
			case "svg":
				width = width / 4;
				height = height / 4;
				img.setAttribute("src", data);
				img.setAttribute("width", width.toString());
				img.setAttribute("height", height.toString());

				container.innerHTML = "";

				container.appendChild(img);

				if (generateLink) {
					const downloadLink = document.createElement("a");

					downloadLink.setAttribute("href", data);
					downloadLink.setAttribute("download", "image." + imgMode);
					downloadLink.innerHTML = "Download Link";

					container.appendChild(downloadLink);
				}
				return;

			case "png":
				imgAtr = "image/png";
				break;

			case "jpeg":
				imgAtr = "image/jpeg";
				break;

			case "webp":
				imgAtr = "image/webp";
				break;

			default:
				data =
					"data:image/svg+xml;charset=utf-8;base64, " +
					window.btoa(False_Template.template());
				width = False_Template.width;
				height = False_Template.height;
				imgAtr = "image/png";
				break;
		}

		canvas.setAttribute("width", width.toString());
		canvas.setAttribute("height", height.toString());
		canvas.setAttribute("id", "render-canvas" + containerId);
		canvas.setAttribute("display", "none");

		img.setAttribute("src", data);
		img.setAttribute("width", width.toString());
		img.setAttribute("height", height.toString());

		try {
			container.appendChild(canvas);
		} catch (error) {
			throw new Error(
				"The Container " + containerId + " is not defined!"
			);
		}

		const renderCanvas = <HTMLCanvasElement>(
			document.getElementById("render-canvas" + containerId)!
		);

		const ctx: CanvasRenderingContext2D | null = renderCanvas.getContext("2d");
		let imgDataUrl: string;

		img.onload = () => {
			ctx!.drawImage(img, 0, 0);

			imgDataUrl = renderCanvas.toDataURL(imgAtr, 1.0);

			width = width / 4;
			height = height / 4;
			img2.setAttribute("src", imgDataUrl);
			img2.setAttribute("width", width.toString());
			img2.setAttribute("height", height.toString());

			container.innerHTML = "";

			container.appendChild(img2);

			if (generateLink) {
				const downloadLink = document.createElement("a");

				downloadLink.setAttribute("href", imgDataUrl);
				downloadLink.setAttribute("download", "image." + imgMode);
				downloadLink.innerHTML = "Download Link";

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
	public static async getImageDataUrl(
		svgString: string,
		width: number,
		height: number,
		imgMode: string
	): Promise<string> {
		const xml = svgString,
			parser = new DOMParser(),
			result: XMLDocument = parser.parseFromString(xml, "text/xml"),
			inlineSVG: SVGSVGElement = <SVGSVGElement>(
				result.getElementsByTagName("svg")[0]
			);

		inlineSVG.setAttribute("width", width.toString());
		inlineSVG.setAttribute("height", height.toString());

		let data: string =
				"data:image/svg+xml;charset=utf-8;base64, " +
				window.btoa(new XMLSerializer().serializeToString(inlineSVG)),
			img = new Image(),
			imgAtr: string,
			imgDataUrl: string;
		const containerId: string = new Guid().toString();

		const canvas = document.createElement("canvas");
		const container = document.createElement("div");

		container.id = containerId;


		document.body.appendChild(container);

		switch (imgMode) {
			case "svg":
				width = width / 4;
				height = height / 4;
				img.setAttribute("src", data);
				img.setAttribute("width", width.toString());
				img.setAttribute("height", height.toString());
				imgDataUrl = data;
				break;

			case "png":
				imgAtr = "image/png";
				break;

			case "jpeg":
				imgAtr = "image/jpeg";
				break;

			case "webp":
				imgAtr = "image/webp";
				break;

			default:
				data =
					"data:image/svg+xml;charset=utf-8;base64, " +
					window.btoa(False_Template.template());
				width = False_Template.width;
				height = False_Template.height;
				imgAtr = "image/png";
				break;
		}

		canvas.setAttribute("width", width.toString());
		canvas.setAttribute("height", height.toString());
		canvas.setAttribute(
			"id",
			"render-canvas-string" + new Guid().toString()
		);
		canvas.setAttribute("display", "none");

		img.setAttribute("src", data);
		img.setAttribute("width", width.toString());
		img.setAttribute("height", height.toString());

		try {
			container.appendChild(canvas);
			container.appendChild(img);
		} catch (error) {
			throw new Error(
				"The Container " + containerId + " is not defined!"
			);
		}

		const renderCanvas = <HTMLCanvasElement>(
			document.getElementById(canvas.id)!
		);

		const ctx: CanvasRenderingContext2D | null =
			renderCanvas.getContext("2d");

		return new Promise<string>((resolve) => {
			img.onload = () => {
				ctx!.drawImage(img, 0, 0);

				imgDataUrl = renderCanvas.toDataURL(imgAtr, 1.0);

				document.body.removeChild(container);

				resolve(imgDataUrl);
			};
		});
	}
}
