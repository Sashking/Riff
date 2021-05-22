const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
    if (!args) return;
    message.channel.send(args.join(' ')).then(msg => {
        message.delete()
    })
}