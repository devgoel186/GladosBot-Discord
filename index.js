const discord = require("discord.js");
require("dotenv").config();

const client = new discord.Client();

client.once("ready", () => {
  console.log("GG! GladosBot is Online!");
});

client.login(process.env.TOKEN);
