const Discord = require('discord.js')

module.exports = {
  run: async (bot, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Você não tem permissão para usar este comando`);
    message.channel.setRateLimitPerUser(args[0])
    message.reply(`o tempo do Slowmode alterado com sucesso para ${args[0]} segundos!`)
},

   conf: {},

  get help () {
    return {
      name: 'slowmode',
      category: 'Moderação',
      description: 'Avisa um usuário do servidor.',
      usage: 'slowmode'
    }
  }
}
