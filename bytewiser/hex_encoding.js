var args = process.argv;

args = args.slice(2);

var B = new Buffer(args);

// var BB = new Buffer(args.join(''), 'hex');

console.log(B.toString('hex'));
