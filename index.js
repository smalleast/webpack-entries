var path = require('path');
var glob = require('glob');

//for windows: .\src\xx.js ->./src/xx.js
function resolve(inPath){
  return (inPath || '').replace(/\\/g,'/');
}

module.exports = function(inGlobPath) {
  var files = glob.sync(inGlobPath);
  var entries = {},
    entry, dirname, basename;

  for (var i = 0; i < files.length; i++) {
    entry = files[i];
    dirname = path.dirname(entry);
    basename = path.basename(entry, '.js');
    entries[resolve(path.join(dirname, basename))] = './' + entry;
  }
  return entries;
};
