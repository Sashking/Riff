const { MessageEmbed } = require('discord.js');

exports.run = async (client, message) => {
    if (!args) return;
    message.channel.send(args.join(' ')).then(msg => {
        msg.delete()
    })
}