var Perks = require("./perkList.js");

exports.perks = perks(name) {
  var flameBulletException;
  if (!Perks[name]) {
    string invalidPerk = "Please enter a valid perk.\n";
    return invalidPerk;
  } else {
    if (name == "flame_bullets") {
      flameBulletException = "";
    } else {
      flameBulletException = (
       "Location in Bad Blood: **" +
        Perks[name].location.badBlood +
       "**\n"
      );
    }
    
    var completedString = (
      Perks[name].emoji +
      " **" + name + "**\n" +
      "**Description:** "+ Perks[name].description + "\n" +
      "**How to obtain it?**\n" +
      "    Price: **" + Perks[name].price + "** gold\n" +
      "    Location in Dead End: **" + Perks[name].location.deadEnd + "**\n" +
      flameBulletException
    )
    
    return completedString;
  }
}
