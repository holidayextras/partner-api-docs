var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');

Metalsmith(__dirname)
  .metadata({
    title: "Holiday Extras Partner API Documentation",
    description: "Holiday Extras Partner API (HXAPI) Documentation. HXAPI allows you to programatically query the Holiday Extras reservation system and product information.",
    generator: "Metalsmith",
    url: "http://docs.holidayextras.co.uk"
  })
  .source('./pages')
  .destination('./docs')
  .clean(false)
  .use(markdown())
  .build(function(err, files) {
    if (err) { throw err; }
  });
