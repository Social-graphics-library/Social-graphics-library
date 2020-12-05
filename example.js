import "./dist/sgl.bundle.js";

var sgl = new SocialGraphicsLibrary();

docReady(function() {
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
})

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

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}