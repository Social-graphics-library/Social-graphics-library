var fs = require('fs');

var packageFile = "./package.json";
var targetFile = "./src/model/info.ts";

fs.readFile(packageFile, 'utf8', (err, data) => {
	if (err) {
		console.error(err)
		return
	}
	const package = JSON.parse(data)

	fs.readFile(targetFile, 'utf8', (err, target) => {
		if (err) {
			console.error(err)
			return
		}

		target = replaceLine(target, 'readonly _version', package.version);
		target = replaceLine(target, 'readonly _license', package.license);
		target = replaceLine(target, 'readonly _author', package.author.name);
		target = replaceLine(target, 'readonly _repository', package.repository.url);
		target = replaceLine(target, 'readonly _homepage', package.homepage);

		fs.writeFile(targetFile, target, 'utf8', function (err) {
			if (err) return console.log(err);
		});
	})
})

function replaceLine(target, searchString, package) {
	let re = new RegExp('^.*' + searchString + '.*$', 'gm');
	target = target.replace(re, '	private ' + searchString + ': string = "' + package +'"');
	return target;
}
