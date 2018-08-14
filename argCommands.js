var Perks = require("./commands/arg_commands/perks/perks.js");
var Report = require("./commands/arg_commands/report.js");

const prefix = "<";

exports.p = function perks(message, args) {
  var name = args[0];
  var perkString = Perks.perks(name);
  return perkString;
}

exports.report = function report(message, args) {
  return Report.report(message.author.id, args);
}