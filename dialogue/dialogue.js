module.exports =

class Dialogue {

  static match(message){
    let message_lower = message.content.toLowerCase()
    let tab_message = message_lower.split(" ")
    let i = 0

    while (tab_message[i]) {
      if(tab_message[i] == "pat" || tab_message[i] == "patou") {
        var var1 = tab_message[i]
      }
      if(tab_message[i] == "salut" || tab_message[i] == "hey"){
        var var2 = tab_message[i]
      }
      i++
    }
    if(var1 && var2) {
      return true
    }
  }

  static responseDialogue(message, bot) {
    let emoji_pat = bot.emojis.find("name", "cro")
    message.reply("Coucou " + emoji_pat)
  }

}
