module.exports =

class Play {

    static match(message) {
      return message.content.startsWith('!play')
    }

    static action(message) {
      let voiceChannel = message.guild.channels
      message.guild.channels
      .filter(function (channel) {return channel.type === 'voice'})
      .first()
      .join()
      .then(function (connection) {
        connection.playFile('./sons/tuveuxjouer.mp3')
      })
    }
}
