import proxyScrape from 'https://deno.land/x/proxyScrape/mod.js' // import the proxyScrape module

console.log(await proxyScrape('http', 10000, 'all', 'all', 'all')) // type, timeout, countryCode, ssl, anonymity
