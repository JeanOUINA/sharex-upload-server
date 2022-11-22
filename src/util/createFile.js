const path = require('path');
const files = require('./files.js');
const config = require('../../config.json');
const exts = require("./exts.json")

const idGenerator = require(`../formats/${config.format}`);

function createFile (ext) {
  const id = idGenerator(config.fileIDLength);
  if (files.has(id)) {
    return createFile(ext);
  }

  const filename = exts[ext.replace(/\./g, "")] ? id : id + ext
  const data = {
    filename: filename,
    ext,
    path: path.resolve(__dirname, '..', '..', 'files', id + ext)
  };
  files.set(filename, data);

  return data;
}

module.exports = createFile;