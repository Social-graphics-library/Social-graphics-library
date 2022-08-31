import { Template } from '../dist/model/templateBase.js';
import { SGL } from '../dist/sgl.js'
import { Example_Template } from '../dist/template/example.template.js'

const sgl = new SGL();

console.log(SGL.info());

console.log(SGL.VERSION);

const generate = document.getElementById('generate') as HTMLButtonElement;
const tName = document.getElementById('tName') as HTMLInputElement;
const uName = document.getElementById('uName') as HTMLInputElement;

generate
	.addEventListener("click",
		async function () {
			sgl
				.multiGenerator(
					tName
					.value,
					uName.value, [{
							mode: 'twitch-title',
							containerId: 'img-container-1',
							imgMode: 'webp',
							generateLink: false
						}, {
							mode: 'twitter-title',
							containerId: 'img-container-3',
							imgMode: 'webp',
							generateLink: false
						}, {
							mode: 'youtube-title',
							containerId: 'img-container-4',
							imgMode: 'jpeg',
							generateLink: true
						}, {
							mode: 'logo',
							containerId: 'img-container-5',
							imgMode: 'png',
							generateLink: true
						}])

			console.log(
				await sgl.getImageDataUrl(
					tName.value,
					uName.value,
					'logo',
					'webp'
				));
		});

sgl.inject([
	{
		"callName": "example_template",
		"template": new Example_Template() as Template
	},
	{
		"callName": "example_template2",
		"template": new Example_Template() as Template
	}
]);

console.log(
	sgl.checkTemplate("basic", "example_template")
);

console.log(
	sgl.checkTemplate("advanced", "example_template", new Example_Template() as Template)
);

console.log(
	sgl.checkTemplate("all")
);

console.log(
	sgl.getInjectedTemplates()
)
