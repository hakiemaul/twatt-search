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
    'https://api.twitter.com/1.1/search/tweets.json?q=fernando%20alonso',
    process.env.USER_TOKEN,
    process.env.USER_SEC,
    function (e, data){
      if (e) res.send(e);
      res.send(data)
    })
}

module.exports = {
  getSearch
};