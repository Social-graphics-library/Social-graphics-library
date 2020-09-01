import "./dist/sgl.bundle.js";

document
    .getElementById("generate")
    .addEventListener("click",
        function() {
            new SocialGraphicsLibrary
                .multiGenerator(document
                    .getElementById('uName')
                    .value, [{
                        mode: 'twitch-title',
                        containerId: 'img-container-1',
                        imgMode: 'jpeg'
                    }, {
                        mode: 'elavate-title',
                        containerId: 'img-container-2',
                        imgMode: 'jpeg'
                    }, {
                        mode: 'twitter-title',
                        containerId: 'img-container-3',
                        imgMode: 'jpeg'
                    }, {
                        mode: 'youtube-title',
                        containerId: 'img-container-4',
                        imgMode: 'jpeg'
                    }, {
                        mode: 'logo',
                        containerId: 'img-container-5',
                        imgMode: 'png'
                    }])
        });