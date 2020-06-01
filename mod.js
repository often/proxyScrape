export default async function proxyScrape(type, timeout, countryCode, ssl, anonymity) {
	if (!type) throw 'missing proxy type'

	const types = ['http', 'socks4', 'socks5']

	if (!types.includes(type)) throw 'invalid proxy type, available ones are: ' + types.join(', ')

	if (!timeout) throw 'missing proxy timeout (in ms)'

	if (!Number.isInteger(timeout)) throw 'timeout must be an integer'

	if (timeout < 50 || timeout > 10000) throw 'timeout must be in range between 50 and 10000ms'

	if (!countryCode) throw 'missing country code, for more see: https://countrycode.org/'

	if (!ssl) throw 'missing SSL support type'

	const ssl_types = ['all', 'yes', 'no']

	if (!ssl_types.includes(ssl)) throw 'invalid SSL support type, available ones are: ' + ssl_types.join(', ')

	if (!anonymity) throw 'missing anonymity type'

	const anonymity_types = ['all', 'elite', 'anonymous', 'transparent']

	if (!anonymity_types.includes(anonymity)) throw 'invalid anonymity type, available ones are: ' + anonymity_types.join(', ')

	const scraped = await fetch('https://api.proxyscrape.com/?request=displayproxies&proxytype=' + type + '&timeout=' + timeout + '&country=' + countryCode + '&ssl=' + ssl + '&anonymity=' + anonymity)

	return scraped.text()
}
