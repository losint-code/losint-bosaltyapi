const { Discord, MessageEmbed } = require("discord.js")
const Settings = require("../Settings/Settings.json")
const prefix = Settings.BotSettings.prefix
exports.run = async(client, message, args) => {


   let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])

   const embed = new MessageEmbed()
   .setAuthor(user.user.username, user.user.avatarURL({ dynamic: true }))
   .setDescription(`• \`${prefix}yardım\` = Yardım Menüsünü Gösterir.`)
   .setTimestamp()
   .setFooter('Losint ♥ Development')
   .setColor(Settings.Colors.Red)
   message.channel.send(embed)

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["yardım"],
    permLevel: 0
};

exports.help = {
    name: "yardım"
}