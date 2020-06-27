const Discord = require('discord.js');
const quickdb = require('quick.db')

module.exports = {
  run: async (client, message, args) => {
 
let antiinvite = args.join(" ")

if(!antiinvite) return message.reply("use o formato s.anti-invite <on/off>")
        
if(antiinvite === "on") {
quickdb.set(`${message.guild.id}_antiinvite`, true)
 
  message.channel.send(`<a:Sim1:726216240632168448> <a:setagif:726194910822268970> ${message.author} ativou meu sistema de anti-invite <a:CoroaTKF:726199479635673179> `)
  
} else if(antiinvite === "off") {
quickdb.set(`${message.guild.id}_antiinvite`, false)
message.channel.send(`<a:naoverificado:726216290305441863> <a:setagif:726194910822268970> ${message.author} desativou meu sistema de anti invite <a:CoroaTKF:726199479635673179>`)
}

},
     conf: {},

  help: {
    name: 'antiinvite',
    category: 'Moderação',
    description: 'Bane um usuário do servidor!',
    usage: 'antiinvite'
  }
}
