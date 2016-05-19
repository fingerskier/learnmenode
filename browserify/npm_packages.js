var uniq = require('uniq');

var prompt = require('prompt');

prompt.start();

prompt.get(['input'], function(err, result) {
	var arr = result.input.split(',');

	console.log(uniq(arr).join(','));
});
