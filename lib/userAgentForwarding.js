var userAgentParser = require('express-useragent');

module.exports = {
    onPhantomPageCreate: function(phantom, req, res, next) {

        const userAgent = req.headers['user-agent'];
        const ua = userAgentParser.parse(userAgent);
	req.prerender.page.run(userAgent, ua.isMobile, ua.isBot, function(userAgent, isMobile, isBot, resolve, reject) {
            this.settings.userAgent = this.settings.userAgent +' '+userAgent;
            resolve();
        }).then(next);
    }
};
