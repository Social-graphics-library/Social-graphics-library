//#region setup
const jsdom = require("jsdom");
require('jsdom-global')()

const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><body id="body"></body>`, {
    url: "https://example.org/",
    referrer: "https://example.com/",
    contentType: "text/html",
    includeNodeLocations: true,
    storageQuota: 10000000
});
const doc = dom.window.document;
const window = dom.window;
const main = doc.createElement("div");
const testDiv = doc.createElement("div");
global.window = window;
global.document = doc;
global.DOMParser = window.DOMParser;
global.XMLSerializer = window.XMLSerializer;
const sgl = require("../dist/sgl.bundle");

main.id = "main";
testDiv.id = "test";
testDiv.className = "test";

doc.getElementById("body").appendChild(main);
doc.getElementById("main").appendChild(testDiv);
//#endregion

//#region test

console.log(sgl.info());

sgl.generator("Tester", "Test", "logo", "test", "jpeg");

//#endregion


console.log("Tests done...");
