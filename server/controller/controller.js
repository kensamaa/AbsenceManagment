var codeDb = require("../model/code");

exports.findCode = (req, res) => {
  codeDb.find({ code: req.code });
};
exports.findStudents = (req, res) => {};
