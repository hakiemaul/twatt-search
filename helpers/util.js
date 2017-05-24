var getContent = function(data) {
  let result = [];
  data = JSON.parse(data)
  data.statuses.forEach(status => {
    result.push(status.text)
  })
  return result;
}

module.exports = {
  getContent
};