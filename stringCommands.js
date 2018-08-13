var HelpOBJ = require("./commands/help.js");
var ChestOBJ = require("./commands/chest.js");
var machineOBJ = require("./commands/machine.js");
var ezOBJ = require("./commands/ez.js");

exports.help = HelpOBJ.helpCMD;
exports.chest = ChestOBJ.chestCMD;
exports.machine = machineOBJ.machineCMD;
exports.ez = ezOBJ.ezCMD;
