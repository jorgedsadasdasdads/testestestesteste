const Discord = require("discord.js");
 
module.exports = {

    run: function (client, message, args) {
      if (!message.guild.me.hasPermission("BAN_MEMBERS"))
            return message.reply("Não tenho permissão para `Banir Membros`"); 
 
    var membro = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!membro) return message.reply(`Mencione um usuário. Ex: s.ban @membro [motivo]`)
    if (membro === message.member) return message.reply(`Você não pode banir a si próprio.`)
 
    var motivo = args.slice(1).join(" ");
    if (!motivo) return message.reply(`Digite um motivo. Ex: s.ban @membro [motivo]`)
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply('Você precisa da permissão de `Banir Membros`.')
 
 
    message.channel.send(`Você realmente deseja punir este usuário?`).then(msg => {
        msg.react("✅")
 
        let filtro = (reaction, usuario) => reaction.emoji.name === "✅" && usuario.id === message.author.id;
        let coletor = msg.createReactionCollector(filtro, {max: 1})
 
        coletor.on("collect", cp => {
            cp.remove(message.author.id);
            message.channel.send(`O usuário ${membro} foi punido com sucesso! <a:SIM:723738753255997474> Motivo: ${motivo}`)
            membro.ban();
        })
    })
},

 conf: {},

  get help () {
    return {
      name: 'ban',
      category: 'Moderação',
      description: 'Bane um usuário do servidor.',
      usage: 'ban'
    }
  }
}