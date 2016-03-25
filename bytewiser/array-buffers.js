var Int = process.argv[2];

var A1 = new Uint32Array(1);

A1[0] = Int;

var A2 = new Uint16Array(A1.buffer);

console.error(A1);
console.error(A2);

console.log(JSON.stringify(A2));
