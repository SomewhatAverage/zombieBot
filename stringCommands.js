var HelpOBJ = require("./commands/help.js");
var ChestOBJ = require("./commands/chest.js");
var machineOBJ = require("./commands/machine.js");

exports.help = HelpOBJ.helpCMD;
exports.chest = ChestOBJ.chestCMD;
exports.machine = machineOBJ.machineCMD;
