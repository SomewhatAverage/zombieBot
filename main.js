const Discord = require("discord.js");
const bot = new Discord.Client();
const commands = require("./commands.js");

bot.on('ready', () => {
  console.log('Hello World!');
});

const prefix = "<";

bot.on('message', message => {
  if (message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if (commands[command]) {
    if (command == "w" || command == "p" || command == "r") {
          
    } else {
      message.reply(commands[command]);
    }
  }

});
  
