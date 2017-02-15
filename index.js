var path = require('path');
var glob = require('glob');
var assign = require('object-assign');


//for windows: .\src\xx.js ->./src/xx.js
function resolve(inPath){
  return (inPath || '').replace(/\\/g,'/');
}

function globEntries(inGlobPath) {
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


function webpackEntries(inGlobPaths) {
  if(typeof inGlobPaths==='string'){
    return globEntries(inGlobPaths);
  }else{
    var entries={};
    inGlobPaths.forEach(function(globPath){
      assign(entries,globEntries(globPath));
    });
    return entries;
  }
}


module.exports = webpackEntries;
