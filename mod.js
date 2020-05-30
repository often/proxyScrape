export default class proxyScrape {
	static async get(type, timeout, countryCode) {
		if (!type) return 'Missing proxy type (http/socks4/socks5)'

		const types = ['http', 'socks4', 'socks5']

		if (!types.includes(type)) return 'Invalid proxy type, available ones are: http, socks4 and socks5'

		if (!timeout) return 'Missing proxy timeout (ms)'

		if (!Number.isInteger(timeout)) return 'Timeout must be an integer'

		if (timeout < 50 || timeout > 10000) return 'Timeout must be in range between 50 and 10000ms'

		if (!countryCode) return 'Missing country code, for more see: https://countrycode.org/'

		const scraped = await fetch('https://api.proxyscrape.com/?request=displayproxies&proxytype=' + type + '&timeout=' + timeout + '&country=' + countryCode + '&ssl=all&anonymity=all')

		return scraped.text()
	}
}
