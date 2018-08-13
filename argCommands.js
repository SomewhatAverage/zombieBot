var Perks = require("./commands/perks/perks.js");

exports.p = function perks(name) {
  var perkString = Perks.perks(name);
  return perkString;
}
