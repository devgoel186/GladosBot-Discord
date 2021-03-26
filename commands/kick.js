module.exports = {
  name: "kick",
  description: "For kicking a member",
  execute(message, args, discord) {
    const member = message.mentions.users.first();
    if (member) {
      const memberTarget = message.guild.members.cache.get(member.id);
      memberTarget
        .kick()
        .then(message.channel.send("User has been kicked!"))
        .catch(console.error);
    } else {
      message.channel.send("No user specified / User doesn't exist");
    }
  },
};
