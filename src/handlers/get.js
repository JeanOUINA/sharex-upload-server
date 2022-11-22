const files = require("../util/files");

module.exports = async (req, res) => {
  const filename = req.params.filename

  const file = files.get(filename);
  if (!file) {
    return res.status(404).send(`Couldn't find the file you're looking for.`)
  }

  res.status(200).sendFile(file.path)
};
