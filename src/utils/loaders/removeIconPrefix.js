const { getOptions } = require('loader-utils');

module.exports = function (source) {
  const options = getOptions(this); // getOptions用于获取配置
  return source.replace(/id="icon/g, 'id="icon-');
};
