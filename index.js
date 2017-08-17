const Discord = require('discord.js');
const bot = new Discord.Client();
const Google = require ('./commands/google');
const Quote = require('./quotes');
const Play = require ('./commands/play');


bot.on('ready', function(){
  bot.user.setAvatar('img/pat.jpg')
    .then( () => console.log('J\'ai mon nouvel avatar !'))
    .catch(console.error)
  bot.user.setGame('Photoshop')
    .then( () => console.log('Mon activité du moment'))
    .catch(console.error)
})

bot.on('guildMemberAdd', function(member){
  member.createDM().then(function (channel){
    return channel.send('Bienvenu sur notre channel ' + member.displayName + ' !')
  }).catch(console.error)
})

bot.on('message', function(message) {
  if (message.content === 'Salut Pat') {
    message.reply('wiiiiiiiiiii')
  }
  if (message.content === 'Pat fais moi rêver !') {
    message.reply(Quote.randomQuotes())
  }
  if (message.content === 'J\'ai mal Pat') {
    message.reply('Tu devrais mettre du baum du Tigre !')
  }
  if (Google.match(message)) {
    return Google.action(message)
  }
  if (Play.match(message)) {
    return Play.action(message)
  }
})


bot.login('MzQ2MjI4OTY0NDk2MjQ0NzM5.DHG22A.LV2t8ECPMM_zJbD4L94hnE3GaRg')
