export default class proxyScrape {
	static async get(type, timeout, countryCode, ssl, anonymity) {
		if (!type) return 'Missing proxy type (http/socks4/socks5)'

		const types = ['http', 'socks4', 'socks5']

		if (!types.includes(type)) return 'Invalid proxy type, available ones are: http, socks4 and socks5'

		if (!timeout) return 'Missing proxy timeout (ms)'

		if (!Number.isInteger(timeout)) return 'Timeout must be an integer'

		if (timeout < 50 || timeout > 10000) return 'Timeout must be in range between 50 and 10000ms'

		if (!countryCode) return 'Missing country code, for more see: https://countrycode.org/'

		if (!ssl) return 'Missing SSL support type (all/yes/no)'

		const ssl_types = ['all', 'yes', 'no']

		if (!ssl_types.includes(ssl)) return 'Invalid SSL support type, available ones are: all, yes and no'

		if (!anonymity) return 'Missing anonymity type (all/elite/anonymous/transparent)'

		const anonymity_types = ['all', 'elite', 'anonymous', 'transparent']

		if (!anonymity_types.includes(anonymity)) return 'Invalid anonymity type, available ones are: all, elite, anonymous, transparent'

		const scraped = await fetch('https://api.proxyscrape.com/?request=displayproxies&proxytype=' + type + '&timeout=' + timeout + '&country=' + countryCode + '&ssl=' + ssl + '&anonymity=' + anonymity)

		return scraped.text()
	}
}
