"use strict";

class Card {
    constructor() {
        this.deck = this.newDeck();
    }
    newDeck() {
        axios
            .get(`${baseCardsURL}/deck/new/shuffle/?deck_count=1`)
            .then(d => {
                deck = d.data.deck_id;
                return deck
        })
    }
    // newCard() {

    // }
}