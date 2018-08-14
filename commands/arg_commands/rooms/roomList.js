const Perks = require("../perks/perkList.js");

class Room {
  constructor(map, window_count, connections, price, guns, perks, armor, chest) {
    this.map = map;
    this.window_count = window_count;
    this.connections = connections;
    this.price = price;
    this.guns = guns;
    this.perks = perks;
    this.armor = armor;
    this.chest = chest;
  }
}



exports.alley = new Room("**Dead End**", 4, ["Office", "Hotel"], ["Free", 500, 750], "*None*", [Perks.fast_revive.emoji, "Fast Revive"], "*None*", "**Yes**");
exports.office = new Room("**Office**", 3, ["Alley", "Gallery"], [500, 750], ["SHOTGUN INFO REQUIRED"], [Perks.extra_weapon.emoji, "Extra Weapon"], "**Leather leggings and boots**", "**Yes**");

