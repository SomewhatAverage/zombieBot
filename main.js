const Discord = require("discord.js");
const bot = new Discord.Client();
const stringCommands = require("./stringCommands.js");
const argCommands = require("argCommands.js");

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
      message.reply(commands[command]);
  } else if (argCommands[command]) {
    
  }
});
  
