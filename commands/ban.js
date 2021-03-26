module.exports = {
  name: "ban",
  description: "For banning a member",
  execute(message, args, discord) {
    const member = message.mentions.users.first();
    if (member) {
      const memberTarget = message.guild.members.cache.get(member.id);
      memberTarget.ban();
      message.channel.send("User has been banned!");
    } else {
      message.channel.send("No Member specified / Member doesn't exist");
    }
  },
};
