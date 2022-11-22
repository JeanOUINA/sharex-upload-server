const fs = require('fs');
const path = require('path');
const exts = require("./exts.json")

const files = new Map();
const filesDir = path.resolve(__dirname, '..', '..', 'files');
for (const file of fs.readdirSync(filesDir)) {
  if (file.startsWith('.')) {
    files.set(file, {
      filename: file,
      ext: '',
      path: path.join(filesDir, file)
    });
    continue;
  }

  const [ id, ...extensions ] = file.split('.');
  const filename = exts[extensions[extensions.length]] ? id : file
  files.set(filename, {
    filename,
    ext: `.${extensions.join('.')}`,
    path: path.join(filesDir, file)
  });
}

module.exports = files;