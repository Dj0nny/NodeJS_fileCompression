var fs = require("fs");
var zlib = require('zlib');

fs.createReadStream('input.txt')
.pipe(zlib.createGzip()) // creation of a zip archive
.pipe(fs.createWriteStream('input.txt.gz')); // creation of the write stream inside of the zip archive
console.log("File Compressed.");