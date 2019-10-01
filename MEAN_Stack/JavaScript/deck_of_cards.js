class Card {
    constructor(suit, num) {
        var dictionary = { 1: 'Ace', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five', 6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine', 10: 'Ten', 11: 'Jack', 12: 'Queen', 13: 'King' }
        this.suit = suit
        this.num = num
        this.value = dictionary[num]
    }
    show() {
        console.log('Suite: ' + this.suit + ', Value: ' + this.value + ', Num: ' + this.num)
    }
}
var card = new Card('Hearts',12)
card.show()

class Deck {
    shuffle(array) {
        var copy = [], n = array.length, i;
        while (n) {
          i = Math.floor(Math.random() * n--);
          copy.push(array.splice(i, 1)[0]);
        }
        return copy;
    }

    reset() {
        var suites = ['Hearts','Clubs','Diamonds','Spades']
        this.cards = []
        for (var i=0; i<suites.length; i++) {
            for (var j=1; j<= 13; j++) {
                var card = new Card(suites[i], j)
                this.cards.push(card)
            }
        }
    }

    deal () {
        var position = Math.floor(Math.random() * (52 - 1) ) + 1;
        var card = this.cards[position]
        delete this.cards[position]
        return card
    }

    constructor() {
        this.reset()
    }
}


class Player {
    constructor(name, deck) {
        this.name = name
        this.deck = deck
    }
    take() {
        this.hand.push(this.deck.deal)
    }
    discard() {
        this.deck.push(this.hand.pop())
    }
}