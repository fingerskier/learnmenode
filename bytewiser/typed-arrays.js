process.stdin.on('data', function(buf) {
	var L = buf.length;
	var A = new Uint8Array(L);

	for (var I=0; I < L; ++I) {
		A[I] = buf[I];
	}

	console.log(JSON.stringify(A));
});
