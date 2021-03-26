module.exports = {
  name: "ping",
  description: "This is a ping command!",
  execute(message, args, discord) {
    message.channel.send("POG!");
  },
};
