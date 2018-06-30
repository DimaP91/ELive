const fs = require('fs');
const path = require('path');


const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);


module.exports = {
  root: appDirectory,
  appHtml: resolveApp('index.html'),
  appIndexJs: resolveApp('source/index.js'),
  appSrc: resolveApp('source'),
};
