process.stdin.on ('data', (B)=> {
	var S = B.toString();

	S.replace('.', '!');

	for (var I=0, L=B.length; I < L; I++) {
		if (B[I] == 46) B.write('!', I);
	}

	console.log(B);
});
