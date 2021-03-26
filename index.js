const discord = require("discord.js");
require("dotenv").config();
const client = new discord.Client();
const prefix = "$";
const fs = require("fs");

client.commands = new discord.Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("GG! GladosBot is Online!");
});

let com = client.commands;
client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  switch (command) {
    case "ping":
      com.get("ping").execute(message, args);
      break;
    case "youtube":
      com.get("youtube").execute(message, args);
      break;
    default:
      message.channel.send(
        `Incorrect command!\nCommand format is : '$command'`
      );
      break;
  }
});

client.login(process.env.TOKEN);
