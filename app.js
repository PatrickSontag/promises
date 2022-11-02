"use strict";

let baseNumsURL = "http://numbersapi.com/";
let favNumber = 3;

let baseCardsURL = "https://deckofcardsapi.com/api"
let deck;

function numberTrivia(num=favNumber) {
    axios
        .get(`${baseNumsURL}${num}`)
        .then(n1 => {
            console.log(`First number ${num} trivia: ${n1.data}`);
            return axios.get(`${baseNumsURL}${num}`);
        })
        .then(n2 => {
            console.log(`Second number ${num} trivia: ${n2.data}`);
            return axios.get(`${baseNumsURL}${num}`);
        })
        .then(n3 => {
            console.log(`Third number ${num} trivia: ${n3.data}`);
            return axios.get(`${baseNumsURL}${num}`);
        })
        .then(n4 => {
            console.log(`Forth number ${num} trivia: ${n4.data}`);
        })
        .catch(err => {
            console.log(`We have a problem: ${err}`);
        })
}

function drawCards() {
    axios
        // .get(`${baseCardsURL}/deck/new/shuffle/?deck_count=1`)
        .get(`${baseCardsURL}/deck/new/draw/?count=1`)
        .then(d1c1 => {
            console.log(d1c1.data.cards[0].code);
            return axios.get(`${baseCardsURL}/deck/new/shuffle/?deck_count=1`)
            // console.log(d.data.deck_id);
            // let deck = d.data.deck_id;
            // return axios.get(`${baseCardsURL}/deck/${deck}/draw/?count=1`)
        })
        .then(d2 => {
            console.log(d2.data.deck_id);
            deck = d2.data.deck_id;
            return axios.get(`${baseCardsURL}/deck/${deck}/draw/?count=1`)
        })
        .then(d2c1 => {
            console.log(d2c1.data.cards[0].code);
            // let deck = c1.data.cards.code;
            return axios.get(`${baseCardsURL}/deck/${deck}/draw/?count=1`)
        })
        .then(d2c2 => {
            console.log(d2c2.data.cards[0].code);
            return axios.get(`${baseCardsURL}/deck/${deck}/draw/?count=1`)
        })
}