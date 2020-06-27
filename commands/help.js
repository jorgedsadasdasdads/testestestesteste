const Discord = require('discord.js');

module.exports = {
  run: async(client, message, args) => {

    let emj = '<a:SIM:723738753255997474>';
    let rodape = 'Sandy © Todos Direitos Reservados';

    let prefix = '='
    let cab = '<a:CoroaTKF:726199479635673179> ᴀᴊᴜᴅᴀ <a:CoroaTKF:726199479635673179>';

    message.channel.send(``).then(async msg => {message.delete(20000)})

    try {

    let embed = new Discord.RichEmbed()

    .setTitle(cab)
    .setDescription('Olá escolha uma das opções!')
    .setDescription(`<:1_:726157832273002496> **Administração** \n Veja os comandos de Administração! \n\n <:2_:726157829961940994> **Diversão** \n Veja todos os comandos de diversão! \n\n <:3_:726157831954235443> **Utilidades** \n Veja todos os comandos utilidades para seu servidor! \n\n <:4_:726157832226996285> **Suporte** \n Veja todos os comandos de suporte! \n\n <a:seta:726167657052635148> **[Me adicione em seu servidor](https://discord.com/oauth2/authorize?client_id=721879918664876132&scope=bot&permissions=268443710)** \n <a:seta:726167657052635148> **[Meu servidor de suporte](https://discord.gg/TdYpGF2)**`)
    .setThumbnail(client.user.avatarURL)
    .setColor(`#8b00fa`)
    .setFooter(rodape)

    message.channel.send(embed).then(async msg => {{message.delete(20000)}

    msg.react('726157832273002496').then(r => msg.react('726157829961940994').then(r => msg.react('726157831954235443').then(r => msg.react('726157832226996285').then(r => msg.react('726165564153921556')))))

        const staffs = (reaction, user) => reaction.emoji.id === '726157832273002496' && user.id === message.author.id
        const diversao = (reaction, user) => reaction.emoji.id === '726157829961940994' && user.id === message.author.id
        const menu = (reaction, user) => reaction.emoji.id === '726157831954235443' && user.id === message.author.id
        const suporte = (reaction, user) => reaction.emoji.id === '726157832226996285' && user.id === message.author.id
        const back = (reaction, user) => reaction.emoji.id === '726165564153921556' && user.id === message.author.id

        const s = msg.createReactionCollector(staffs, {time: 60000});
        const di = msg.createReactionCollector(diversao, {time: 60000});
        const m = msg.createReactionCollector(menu, {time: 60000});
        const su = msg.createReactionCollector(suporte, {time: 60000});
        const ba = msg.createReactionCollector(back, {time: 60000});

        s.on('collect', async r => {

            r.remove(r.users.last().id).catch(e => {})
            
                embed.setTitle(cab)
                embed.setDescription('Administração \n\n  **Moderação** \n <:seta:726196684211617943> s.ban (usuario) (motivo) \n <:seta:726196684211617943> s.kick (usuario) (motivo) \n <:seta:726196684211617943> s.unban (usuario) \n <:seta:726196684211617943> s.mute (usuario) (motivo)\n <:seta:726196684211617943> s.unmute (usuario) \n <:seta:726196684211617943> s.lock \n <:seta:726196684211617943> s.unlock \n <:seta:726196684211617943> s.listban \n <:seta:726196684211617943> s.antiinvite <on/off>')

                
                embed.setThumbnail(client.user.avatarURL)
                embed.setColor(`#8b00fa`)
                embed.setFooter(rodape)
            
                msg.edit(embed)
        })

        di.on('collect', async r => {

            r.remove(r.users.last().id).catch(e => {})
            
            embed.setTitle(cab)
            embed.setDescription('Diversão \n\n **Comandos de Diversão:** \n <:seta:726196684211617943> s.beijar (usuario) \n <:seta:726196684211617943> s.abraçar (usuario) \n <:seta:726196684211617943> s.piada  \n <:seta:726196684211617943> s.pergunta (pergunta) \n <:seta:726196684211617943> s.laranjo (texto) \n <:seta:726196684211617943> s.ship (@usuário 1) (@usuário 2) \n <:seta:726196684211617943> s.tempo (cidade)')
            embed.setThumbnail(client.user.avatarURL)
            embed.setColor(`#8b00fa`)
            embed.setFooter(rodape)
        
            msg.edit(embed)

        })
        su.on('collect', async r => {

            r.remove(r.users.last().id).catch(e => {})
            
            embed.setTitle(cab)
            embed.setDescription('Suporte \n\n **Comandos de suporte e ajuda** \n <:seta:726196684211617943> s.suporte \n <:seta:726196684211617943> s.convite \n <:seta:726196684211617943> s.ping \n <:seta:726196684211617943> s.ajuda')
            embed.setThumbnail(client.user.avatarURL)
            embed.setColor(`#8b00fa`)
            embed.setFooter(rodape)
        
            msg.edit(embed)

        })

        m.on('collect', async r => {

            r.remove(r.users.last().id).catch(e => {})
            
            embed.setTitle(cab)
            embed.setDescription('Utilidades \n\n **Comandos de Utilidade:** \n <:seta:726196684211617943> s.votação (votação)  \n <:seta:726196684211617943> s.sorteio (tempo, item a ser sorteado) \n <:seta:726196684211617943> s.roleall (cargo)  \n <:seta:726196684211617943> s.servericon \n\ <:seta:726196684211617943> s.userinfo (usuário, opicional) \n <:seta:726196684211617943> s.say (texto) \n <:seta:726196684211617943> s.clear (1 a 100) \n <:seta:726196684211617943> s.slowmode (tempo)')
            embed.setThumbnail(client.user.avatarURL)
            embed.setColor(`#8b00fa`)
            embed.setFooter(rodape)
        
            msg.edit(embed)

        })

                ba.on('collect', async r => {

            r.remove(r.users.last().id).catch(e => {})
            
            embed.setTitle(cab)
            embed.setDescription('Escolha uma das Opções')
            embed.setDescription(`<:1_:726157832273002496> **Administração** \n Veja os comandos de Administração! \n\n <:2_:726157829961940994> **Diversão** \n Veja todos os comandos de diversão! \n\n <:3_:726157831954235443> **Utilidades** \n Veja todos os comandos utilidades para seu servidor! \n\n <:4_:726157832226996285> **Suporte** \n Veja todos os comandos de suporte! \n\n <a:seta:726167657052635148> **[Me adicione em seu servidor](https://discord.com/oauth2/authorize?client_id=721879918664876132&scope=bot&permissions=268443710)** \n <a:seta:726167657052635148> **[Meu servidor de suporte](https://discord.gg/TdYpGF2)**`)
            embed.setThumbnail(client.user.avatarURL)
            embed.setColor(`#8b00fa`)
            embed.setFooter(rodape)
        
            msg.edit(embed)

        })

        })
    } catch(err) {
        console.log(`[AJUDA] O comando de ajuda esta com erro! Erro: -${err}`)
        message.channel.send(`**[AJUDA] O comando ajuda esta com algum erro! (${err})**`)
    }
},

         conf: {},

  help: {
    name: 'ajuda',
    category: 'Diversão',
    description: 'Cria uma batalha de 1vs1 e o mais forte vence.',
    usage: 'ajuda'
  }
}
