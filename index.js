import { SGL } from './dist/sgl.js'

var sgl = new SGL();

console.log(SGL.info());

console.log(SGL.VERSION);

document
	.getElementById("generate")
	.addEventListener("click",
		async function () {
			sgl
				.multiGenerator(document
					.getElementById('tName')
					.value,
					document
						.getElementById('uName').value, [{
							mode: 'twitch-title',
							containerId: 'img-container-1',
							imgMode: 'webp'
						}, {
							mode: 'twitter-title',
							containerId: 'img-container-3',
							imgMode: 'webp'
						}, {
							mode: 'youtube-title',
							containerId: 'img-container-4',
							imgMode: 'jpeg'
						}, {
							mode: 'logo',
							containerId: 'img-container-5',
							imgMode: 'png',
							generateLink: true
						}])

			console.log(
				await sgl.getImageDataUrl(
					document.getElementById('tName').value,
					document.getElementById('uName').value,
					'logo',
					'webp'
					));
		});
