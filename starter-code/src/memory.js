class MemoryGame {
  constructor(card){
    this.cards = card
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }
  shuffleCards() { // Sacado de Fisher–Yates shuffle javascript Stackoverflow
    let currentIndex = this.cards.length
    let temporaryValue
    let randomIndex

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++
    if (card1 === card2) {
    this.pairsGuessed++
    return true
    } else {
      return false
    }
  }

  isFinished() {
    if (this.pairsGuessed === this.cards.length/2) {
      return true
    } else {
      return false
    }
  }
}