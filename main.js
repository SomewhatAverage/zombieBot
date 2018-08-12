const Discord = require("discord.js");
const bot = new Discord.Client();
const commands = require("./commands.js");

bot.on('ready', () => {
    console.log('Hello World!');
});

const prefix = "<";

bot.on('message', message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if (commandStrings.command) {
      message.reply(commands.command);
  }

});
  
