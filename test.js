import proxyScrape from './mod.js' // import the proxyScrape module

console.log(await proxyScrape.get('http', 10000, 'all')) // type, timeout, countryCode
