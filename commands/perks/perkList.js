class Perk {
  constructor(emoji, name, description, price, location) {
    this.emoji = emoji;
    this.name = name;
    this.description = description;
    this.price = price;
    this.location = location
  }
}

exports.extra_health = new Perk("<:extra_health:478382875842969611>", "Extra Health", "", 1000, location = { deadEnd : "Roof Top", badBlood : "Dungeon" });
exports.quick_fire = new Perk("<:quick_fire:478382875910078489>", "Quick Fire", "*Increase the fire rate of all guns by 25%.*", 1000, location = { deadEnd : "Apartments", badBlood : "Mansion"});
exports.fast_revive = new Perk("<:fast_revive:478382875838906375>", "Fast Revive", "*Revive fallen teammates much faster.*", 500, location ={ deadEnd : "Alley", badBlood : "Courtyard"});
exports.extra_weapon = new Perk(":extra_weapon:478382875889238026>", "Extra Weapon", "*Gain an extra weapon slot.*", 1500, location = { deadEnd : "Office", badBlood : "Library" });
exports.frozen_bullets = new Perk("<:frozen_bullets:478382875872460802>", "rozen Bullets", "*All your bullets are ice cold, slowing enemies down briefly.*", 1000, location = { deadEnd : "Hotel", badBlood : "Balcony"});
exports.flame_bullets = new Perk("<:flame_bullets:478382875465744392>", "Flame Bullets", "*All your bullets set enemies on fire, including enemies immune to fire.*", 750, location = { deadEnd : "Hotel" });
exports.speed = new Perk("<:speed:478382876098822148>", "Speed", "*Gain Speed I.*", 500, location = { deadEnd : "Gallery", badBlood : "Crypts"});

