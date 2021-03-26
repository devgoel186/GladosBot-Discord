const discord = require("discord.js");
require("dotenv").config();

const client = new discord.Client();

const prefix = "$";

client.once("ready", () => {
  console.log("GG! GladosBot is Online!");
});

client.on("message", (message) => {
  let msg = message.channel;
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  switch (command) {
    case command === "ping":
      msg.send("POG!");
      break;
    case command === "youtube":
      msg.send("https://www.youtube.com");
      break;
    default:
      msg.send(`Incorrect command!\nCommand format is : '$command'`);
      break;
  }
});

client.login(process.env.TOKEN);
