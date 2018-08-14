const fs = require("fs");
const ezMod = require("./commands/ez.js");

module.exports = {
  help : readFile("help"),
  chest : readFile("chest"),
  machine : readFile("machine"),
  switch : readFile("switch"),
  perks : readFile("perks"),
  rooms : readFile("rooms"),
  weapons : readFile("weapons"),
  zombies : readFile("zombies"),
  version : readFile("version"),
  ez : function() {
    var ezIndex = Math.floor(Math.random()*(36));
    var ezResult = ezMod.generateResponse(ezIndex);
    return ezResult;
  }
}

function readFile(variable) {
  fs.readFile("./commands/text_commands/" + variable + ".txt", "utf8", function (err, data) {
    if (err) throw (err);
    module.exports[variable] = data;
  })
}