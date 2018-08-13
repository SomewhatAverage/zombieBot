var HelpOBJ = require("./commands/help.js");
var ChestOBJ = require("./commands/chest.js");
var machineOBJ = require("./commands/machine.js");
var ezReq = require("./commands/ez.js");
var ezOBJ = new ezReq;

exports.help = HelpOBJ.helpCMD;
exports.chest = ChestOBJ.chestCMD;
exports.machine = machineOBJ.machineCMD;
exports.ez = ezOBJ.ezCMD;
