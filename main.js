const Discord = require("discord.js");
const bot = new Discord.Client();
const stringCommands = require("./stringCommands.js");
const argCommands = require("./argCommands.js");

bot.on('ready', () => {
  console.log('Hello World!');
});

const prefix = "<";

bot.on('message', message => {
  if (message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if (stringCommands[command]) {
    message.channel.send(stringCommands[command]);
  } else if (argCommands[command]) {
    message.channel.send(argCommands[command](args[0]));
  } else {
		const fluctuatingCommand = require("./commands/" + command + ".js");
		message.channel.send(fluctuatingCommand.mainCMD());
  }
});
  
