import { SGL } from "./dist/sgl.js";

if (typeof window !== 'undefined') 
{
    window.onload = function () {
        var sgl = new SGL();

        console.log(SGL.info());

        console.log(SGL.VERSION);

        docReady(() => {
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

        document.getElementById("generate").addEventListener("click", async () => {
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
    }
}
