const createFile = require('../util/createFile.js');
const mimeTypes = require('../util/mimeTypes.json');
const config = require('../../config.json');
const { createWriteStream } = require('fs');

module.exports = async (req, res) => {
  if (req.headers['authorization'] !== config.key) {
    return res.status(401).send({
      message: 'Authorization header incorrect'
    })
  }
  
  const file = createFile(
    mimeTypes.find(([ type ]) => type === req.headers['content-type'])[1]
  );
  
  req.pipe(
    createWriteStream(file.path)
  );
  
  req.on('end', () => {
    res.status(200).send(file)
  });
}