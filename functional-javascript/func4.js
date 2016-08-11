function getShortMessages(messages) {
	return messages
	.map(function(el, I, arr) {
		return el.message;
	})
	.filter(function(el, I, arr) {
		return el.length < 50;
	});
}

module.exports = getShortMessages;
