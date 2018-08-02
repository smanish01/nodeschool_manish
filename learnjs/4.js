function getShortMessages(messages) {
        let result = messages.map(obj => obj.message).filter(message => message.length < 50 );
        return result;
    }

    module.exports = getShortMessages