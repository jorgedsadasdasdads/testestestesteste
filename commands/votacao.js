module.exports = {
  run: function (client, message, args) {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Você precisa ter a permissão de `Gerenciar Mensagens` ")
    if (!args.join(' ')) return message.channel.send({embed: {
        title: "Uso incorreto !",
        description: "Uso correto: votacao <titulo> \nEx. votacao Devemos banir fulano do servidor?",
        footer: {
            icon_url: message.author.avatarURL,
            text: `Comando utilizado por ${message.author.username}`
        },
        color: 13632027,
        timestamp: new Date()
    }});

    message.delete();
    message.channel.send({embed: {
        title: args.join(``),
        footer: {
            text: `Votação iniciada por ${message.author.username}`
        },
        color: 8463563,
        timestamp: new Date()
    }}).then((message) => {
        message.react("724323656603271270");
        message.react("723741855572819969");
    });
  },
  
  conf: {},

  help: {
    name: 'votaçao',
    category: 'Utilitários',
    description: 'Cria uma votacao no chat',
    usage: 'votaçao'
  }
}
