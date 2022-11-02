"use strict";

class Deck {
    constructor() {
        this.deck = this.newDeck();
        this.currentCard = '';
        this.nextCard = '';
    }
    newDeck() {
       axios
            .get(`${baseCardsURL}/deck/new/shuffle/?deck_count=1`)
            .then(d => {
                deck = d.data.deck_id;
                this.deck = deck;
                return axios.get(`${baseCardsURL}/deck/${deck}/draw/?count=1`)
            .then(c => {
                let card = c.data.cards[0].code;
                this.nextCard = card;
            })
        })
    }
    newCard() {
        this.currentCard = this.nextCard;
        this.showCard();
        axios
            .get(`${baseCardsURL}/deck/${deck}/draw/?count=1`)
            .then(c => {
                let card = c.data.cards[0].code;
                this.nextCard = card;
            })
    }

    showCard() {
        console.log("showCard", this.currentCard);
        return this.currentCard;
    }
}

// .get(`${baseCardsURL}/deck/new/shuffle/?deck_count=1`)

// .then(d2 => {
//     console.log(d2.data.deck_id);
//     deck = d2.data.deck_id;
//     return axios.get(`${baseCardsURL}/deck/${deck}/draw/?count=1`)
// })