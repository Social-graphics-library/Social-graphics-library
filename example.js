import "./dist/sgl.bundle.js";

var sgl = new SocialGraphicsLibrary();

document.getElementById("generate").addEventListener("click", async function() {
    sgl.multiGenerator(document.getElementById("tName").value, document.getElementById("uName").value, [{
        mode: "logo",
        containerId: "img-container-1",
        imgMode: "webp",
        generateLink: true
    }, {
        mode: "twitch-title",
        containerId: "img-container-2",
        imgMode: "jpeg",
        generateLink: true
    }])
});