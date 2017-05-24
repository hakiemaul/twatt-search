var OAuth = require('oauth');
require('dotenv').config()

var getSearch = function(req, res) {
  var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.APP_CONS_KEY,
    process.env.APP_SEC,
    '1.0A',
    null,
    'HMAC-SHA1'
  );
  oauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=semangat%20pagi`,
    process.env.USER_TOKEN,
    process.env.USER_SEC,
    function (e, data){
      if (e) res.send(e);
      res.send(data)
    })
}

var findSomething = function(req, res) {
  var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    process.env.APP_CONS_KEY,
    process.env.APP_SEC,
    '1.0A',
    null,
    'HMAC-SHA1'
  );
  let search = req.body.search;
  search = search.split('');
  for(let i = 0; i < search.length; i++) {
    switch (search[i]) {
      case ' ':
        search[i] = '%20'
        break;
      case '@':
        search[i] = '%40'
        break;
      case '#':
        search[i] = '%23'
        break;
    }
  }
  search = search.join('')
  oauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=${search}`,
    process.env.USER_TOKEN,
    process.env.USER_SEC,
    function (e, data){
      if (e) res.send(e);
      res.send(data)
    })
}

module.exports = {
  getSearch, findSomething
};