// main.js  for scope-chains-closures nodeschool

function foo(arg) {
	var bar;

	function zip(arg) {
		var quux = 234;

		bar = true;
	}

	quux = 123;

	return zip;
}
