var path = require('path');
var glob = require('glob');

exports.entries = function() {
  var files = glob.sync(globPath);
  var entries = {},
    entry, dirname, basename;

  for (var i = 0; i < files.length; i++) {
    entry = files[i];
    dirname = path.dirname(entry);
    basename = path.basename(entry, '.js');
    entries[path.join(dirname, basename)] = './' + entry;
  }
  return entries;
};
