var HelpOBJ = require("./commands/help.js");
var ChestOBJ = require("./commands/chest.js");
var MachineOBJ = require("./commands/machine.js");
var SwitchOBJ = require("./commands/switch.js");
var PerksOBJ = require("./commands/perks.js");
var RoomsOBJ = require("./commands/rooms.js");
var WeaponsOBJ = require("./commands/weapons.js");
var zombiesOBJ = require("./commands/zombies.js");

exports.help = HelpOBJ.helpCMD;
exports.chest = ChestOBJ.chestCMD;
exports.machine = MachineOBJ.machineCMD;
exports.switch = SwitchOBJ.switchCMD;
exports.perks = PerksOBJ.perksCMD;
exports.rooms = RoomsOBJ.roomsCMD;
exports.weapons = WeaponsOBJ.weaponsCMD;
exports.zombies = zombiesOBJ.zombiesCMD;
