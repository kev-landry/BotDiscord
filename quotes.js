
module.exports =

class Quote{

  // constructor(tab, quotes, word){
  //   this.quotes = new Array('J'ai 4.5/5 étoiles sur Photoshop !', 'J'ai appris Symphony à mon patron !', 'ça marche wiiiiiiiiiii', 'Tu me saoul les bottes !', 'Je n'arrive pas à me concentrer !', 'Ma fille va être furax, je lui ai encore piqué ses chaussettes !', 'J'adore Soprano !', 'YES ! J'ai vendu un tableau !')
  //   this.tab = ["J'ai 4.5/5 étoiles sur Photoshop !", "J'ai appris Symphony à mon patron !"]
  //   this._word = "Salut"
  // }

  static setQuotes(){
    let quotes = ["J'ai 4.5/5 étoiles sur Photoshop !", "J'ai appris Symphony à mon patron !", "ça marche wiiiiiiiiiii", "Tu me saoul les bottes !", "Je n'arrive pas à me concentrer !", "Ma fille va être furax, je lui ai encore piqué ses chaussettes !", "J'adore Soprano !", "YES ! J'ai vendu un tableau !", "Je suis pas venu là pour souffrir ok !"]
    return quotes
  }
  static randomQuotes(){
    let n_quotes = this.setQuotes().length
    let rand = Math.floor((Math.random() * n_quotes) + 1)
    console.log(rand);
    return this.setQuotes()[rand]
  }
}
