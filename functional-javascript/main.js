function getShortMessages(messages) {
	return messages.filter(function(val, I, arr){
		return val.length > 50;
	});
}

module.exports = getShortMessages;