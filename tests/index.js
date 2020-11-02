const jsdom = require("jsdom");
// const { SocialGraphicsLibrary } = require("../dist/sgl.bundle");

//#region setup
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><body id="body"></body>`, {
    url: "https://example.org/",
    referrer: "https://example.com/",
    contentType: "text/html",
    includeNodeLocations: true,
    storageQuota: 10000000
});
const doc = dom.window.document;
const main = doc.createElement("div");
const testDiv = doc.createElement("div");

main.id = "main";
testDiv.id = "test";
testDiv.className = "test";

doc.getElementById("body").appendChild(main);
doc.getElementById("main").appendChild(testDiv);
//#endregion

//#region test
//#endregion


console.log("Tests done...");
