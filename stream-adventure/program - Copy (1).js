var argument = process.argv[2];

var fs = require('fs');

var out = fs.createReadStream(argument);

out.pipe(process.stdout);
