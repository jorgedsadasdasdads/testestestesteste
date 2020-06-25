const Discord = require('discord.js');

module.exports = {
  run: async(client, message, args) => {

    let emj = '<a:SIM:723738753255997474>';
    let rodape = 'Sandy © Todos Direitos Reservados';

    let prefix = '='
    let cab = '<a:blue_estrelaPDV:724024700308815923> Sandy 2.0 <a:blue_estrelaPDV:724024700308815923>';

    message.channel.send(``).then(async msg => {message.delete(20000)})

    try {

    let embed = new Discord.RichEmbed()

    .setTitle(cab)
    .setDescription('Olá escolha uma das opções!')
    .setDescription("<a:1F:724775846145163274> **Administração** \n `Veja os comandos de Administração!` \n\n <a:2F:724775878277726259> **Diversão** \n `Veja todos os comandos de diversão!` \n\n <a:3F:724775915401248788> **Utilidades** \n `Veja todos os comandos utilidades para seu servidor!` \n\n <a:4F:724775971059662959> **Suporte** \n `Veja todos os comandos de suporte!`")
    .setThumbnail(client.user.avatarURL)
    .setColor(`RED`)
    .setFooter(rodape)

    message.channel.send(embed).then(async msg => {{message.delete(20000)}

    msg.react('724775846145163274').then(r => msg.react('724775878277726259').then(r => msg.react('724775915401248788').then(r => msg.react('724775971059662959').then(r => msg.react('724426121806086196')))))

        const staffs = (reaction, user) => reaction.emoji.id === '724775846145163274' && user.id === message.author.id
        const menu = (reaction, user) => reaction.emoji.id === '724775915401248788' && user.id === message.author.id
        const diversao = (reaction, user) => reaction.emoji.id === '724775878277726259' && user.id === message.author.id
        const suporte = (reaction, user) => reaction.emoji.id === '724775971059662959' && user.id === message.author.id
        const back = (reaction, user) => reaction.emoji.id === '724426121806086196' && user.id === message.author.id

        const s = msg.createReactionCollector(staffs, {time: 60000});
        const di = msg.createReactionCollector(diversao, {time: 60000});
        const m = msg.createReactionCollector(menu, {time: 60000});
        const su = msg.createReactionCollector(suporte, {time: 60000});
        const ba = msg.createReactionCollector(back, {time: 60000});

        s.on('collect', async r => {

            r.remove(r.users.last().id).catch(e => {})
            
                embed.setTitle(cab)
                embed.setDescription('Administração \n\n  **Moderação** \n <:setagif:723714864505290832> s.ban (usuario) (motivo) \n <:setagif:723714864505290832> s.kick (usuario) (motivo) \n <:setagif:723714864505290832> s.unban (usuario) \n <:setagif:723714864505290832> s.mute (usuario) (motivo)\n <:setagif:723714864505290832> s.unmute (usuario) \n <:setagif:723714864505290832> s.lock \n <:setagif:723714864505290832> s.unlock \n <:setagif:723714864505290832> s.listban \n <:setagif:723714864505290832> s.antiinvite <on/off>')

                
                embed.setThumbnail(client.user.avatarURL)
                embed.setColor(`RED`)
                embed.setFooter(rodape)
            
                msg.edit(embed)
        })

        di.on('collect', async r => {

            r.remove(r.users.last().id).catch(e => {})
            
            embed.setTitle(cab)
            embed.setDescription('Diversão \n\n **Comandos de Diversão:** \n <:setagif:723714864505290832> s.beijar (usuario) \n <:setagif:723714864505290832> s.abraçar (usuario) \n <:setagif:723714864505290832> s.piada  \n <:setagif:723714864505290832> s.pergunta (pergunta) \n <:setagif:723714864505290832> s.laranjo (texto) \n <:setagif:723714864505290832> s.ship (@usuário 1) (@usuário 2) \n <:setagif:723714864505290832> s.tempo (cidade)')
            embed.setThumbnail(client.user.avatarURL)
            embed.setColor(`RED`)
            embed.setFooter(rodape)
        
            msg.edit(embed)

        })
        su.on('collect', async r => {

            r.remove(r.users.last().id).catch(e => {})
            
            embed.setTitle(cab)
            embed.setDescription('Suporte \n\n **Comandos de suporte e ajuda** \n <:setagif:723714864505290832> s.suporte \n <:setagif:723714864505290832> s.convite \n <:setagif:723714864505290832> s.ping \n <:setagif:723714864505290832> s.ajuda')
            embed.setThumbnail(client.user.avatarURL)
            embed.setColor(`RED`)
            embed.setFooter(rodape)
        
            msg.edit(embed)

        })

        m.on('collect', async r => {

            r.remove(r.users.last().id).catch(e => {})
            
            embed.setTitle(cab)
            embed.setDescription('Utilidades \n\n **Comandos de Utilidade:** \n <:setagif:723714864505290832> s.votação (votação)  \n <:setagif:723714864505290832> s.sorteio (tempo, item a ser sorteado) \n <:setagif:723714864505290832> s.roleall (cargo)  \n <:setagif:723714864505290832> s.servericon \n\ <:setagif:723714864505290832> s.userinfo (usuário, opicional) \n <:setagif:723714864505290832> s.say (texto) \n <:setagif:723714864505290832> s.clear (1 a 100)')
            embed.setThumbnail(client.user.avatarURL)
            embed.setColor(`RED`)
            embed.setFooter(rodape)
        
            msg.edit(embed)

        })

                ba.on('collect', async r => {

            r.remove(r.users.last().id).catch(e => {})
            
            embed.setTitle(cab)
            embed.setDescription('Escolha uma das Opções')
            embed.setDescription('<a:1F:724775846145163274> **Administração** \n `Veja os comandos de Administração!` \n\n <a:2F:724775878277726259> **Discord** \n `Veja todos os comandos para usar em seu servidor!` \n\n <a:3F:724775915401248788> **Diversão** \n `Veja todos os comandos diversão!` \n\n <a:4F:724775971059662959> **Suporte** \n `Veja todos os comandos de suporte!`')
            embed.setThumbnail(client.user.avatarURL)
            embed.setColor(`RED`)
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
