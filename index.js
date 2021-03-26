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

  const defaultCommand = com.get(command);

  switch (command) {
    case "ping":
      defaultCommand.execute(message, args, discord);
      break;
    case "youtube":
      defaultCommand.execute(message, args, discord);
      break;
    case "command":
      defaultCommand.execute(message, args, discord);
      break;
    case "clear":
      defaultCommand.execute(message, args, discord);
      break;
    default:
      message.channel.send(
        `Incorrect command!\nCommand format is : '$command'`
      );
      break;
  }
});

client.login(process.env.TOKEN);
