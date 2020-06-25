module.exports = {
  run: function (client, message, args) {
    client.on('message', message => {
  if (message.content === '') {
    message.channel.send(``)
  }
})
  },

    
     conf: {},

  help: {
    name: 'convite',
    category: 'Ajuda',
    description: 'Me convide para seu servidor!',
    usage: 'convite'
  }
}
