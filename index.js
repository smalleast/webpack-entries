var path = require('path');
var glob = require('glob');

function normalize(inPath){
  return (inPath || '').replace('\\','/');
}

module.exports = function(inGlobPath) {
  var files = glob.sync(inGlobPath);
  var entries = {},
    entry, dirname, basename;

  for (var i = 0; i < files.length; i++) {
    entry = files[i];
    dirname = path.dirname(entry);
    basename = path.basename(entry, '.js');
    entries[normalize(path.join(dirname, basename))] = './' + entry;
  }
  return entries;
};
