module.exports = {
  name: "command",
  description: "Embed",
  execute(message, args, discord) {
    const newEmbed = new discord.MessageEmbed()
      .setColor("#1affa3")
      .setTitle("Rules")
      .setURL("https://www.youtube.com")
      .setDescription("This is a sample embed!")
      .addFields(
        {
          name: "Rule 1",
          value: "Be polite (don't be racist my ni**a)",
        },
        {
          name: "Rule 2",
          value: "Have fun, don't be a ghot!",
        }
      )
      .setImage("https://media.makeameme.org/created/you-donkey-5bd02a.jpg")
      .setFooter("Have fun. Peace OUT!!");

    message.channel.send(newEmbed);
  },
};
