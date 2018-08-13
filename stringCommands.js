var HelpOBJ = require("./commands/help.js");
var ChestOBJ = require("./commands/chest.js");
var MachineOBJ = require("./commands/machine.js");
var PerksOBJ = require("./commands/perks.js");

exports.help = HelpOBJ.helpCMD;
exports.chest = ChestOBJ.chestCMD;
exports.machine = MachineOBJ.machineCMD;
exports.perks = PerksOBJ.perksCMD;
