import SGL from './dist/sgl.js';

console.log(SGL.info());

console.log(new SGL.VERSION)

document
    .getElementById("generate")
    .addEventListener("click",
        async function() {
			new SGL()
                .multiGenerator(document
                    .getElementById('tName')
                    .value,
                    document
                    .getElementById('uName').value, [{
                        mode: 'twitch-title',
                        containerId: 'img-container-1',
                        imgMode: 'webp'
                    }, {
                        mode: 'elavate-title',
                        containerId: 'img-container-2',
                        imgMode: 'jpeg'
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
        });
