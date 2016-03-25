function getShortMessages(messages) {
	return messages
	.filter(function(val, I, arr) {
		return val.length < 50;
	})
	.map(function (val, I, arr) {
		return val.message;
	})
	;
}

module.exports = getShortMessages;
