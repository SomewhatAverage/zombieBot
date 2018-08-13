var Perks = require("./perkList.js");

exports.perks = function perks(name) {
  var flameBulletException;
  if (!Perks[name]) {
    var invalidPerk = "Please enter a valid perk.\n";
    return invalidPerk;
  } else {
    if (name == "flame_bullets") {
      flameBulletException = "";
    } else {
      flameBulletException = (
       "    Location in Bad Blood: **" +
        Perks[name].location.badBlood +
       "**\n"
      );
    }
    
    var completedString = (
      Perks[name].emoji +
      " **" + Perks[name].name + "**\n" +
      "**Description:** "+ Perks[name].description + "\n" +
      "**How to obtain it?**\n" +
      "    Price: **" + Perks[name].price + "** gold\n" +
      "    Location in Dead End: **" + Perks[name].location.deadEnd + "**\n" +
      flameBulletException
    )
    
    return completedString;
  }
}
