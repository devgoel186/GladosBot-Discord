module.exports = {
  name: "clear",
  description: "Clear command",
  async execute(message, args, discord) {
    // has to be async as we are fetching and then deleting messages
    if (!args[0])
      return message.reply("please enter the number of messages to clear!");
    if (isNaN(args[0])) return message.reply("Please enter a +ve number");
    if (args[0] >= 100)
      return message.reply("cannot delete 100 or more messages!");
    if (args[0] < 1)
      return message.reply("messages to delete must be atleast 1");

    await message.channel.messages
      .fetch({ limit: Number(args[0]) + 1 })
      .then((messages) => {
        message.channel.bulkDelete(messages);
        message.channel.send(`Deleted ${args[0]} message(s)`);
      });
  },
};
