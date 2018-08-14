const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const bot = new Discord.Client();
const stringCommands = require("./stringCommands.js");
const argCommands = require("./argCommands.js");

const fs = require("fs");

bot.on('ready', () => {
  console.log('Hello World!');
});

const prefix = "<";

const reportPath = "./data/lastReport.txt";

bot.on('message', message => {
  if (message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if (typeof stringCommands[command] != "undefined") {
    if (typeof stringCommands[command] == "function") {
      message.channel.send(stringCommands[command]());
    } else {
      message.channel.send(stringCommands[command]);
    }
  } else if (argCommands[command]) {
    message.channel.send(argCommands[command](message, args));
  }
  
  fs.readFile(reportPath, "utf8", function (err, data) {
    if (err) throw (err);
    
    if (data != "") {
      const owner = bot.fetchUser(process.env.OWNER_ID)
        .then((User) => User.send(data))
        .catch((err) => {
          console.log(err);
        });
      
        fs.writeFile(reportPath, "", function (err) {
        if (err) throw (err);
      });
    }
    
    
    
  });
});
bot.login(process.env.BOT_TOKEN);
