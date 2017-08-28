const YoutubeCore = require('ytdl-core');

module.exports =

class Youtube {

    static match(message) {
      return message.content.startsWith('!youplay')
    }

    static action(message) {
      let voiceChannel = message.guild.channels
        .filter(function (channel) {
          return channel.type === 'voice'
        })
        .first()
      let args = message.content.split(' ')
      voiceChannel
        .join()
        .then(function (connection) {
          let stream = YoutubeCore(args[1])
          stream.on('error', function() {
            var emoji_weary = bot.emojis.find("name", "weary")
            message.reply("Je ne trouve pas cette vidéo " + emoji_weary)
            connection.disconnect()
          })
          connection
            .playStream(stream)
            .on('end', function () {
              connection.disconnect()
          })
        })
    }
}
