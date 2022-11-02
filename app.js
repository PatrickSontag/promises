"use strict";

let baseNumsURL = "http://numbersapi.com/";
let favNumber = 3;

let numberForm = document.getElementById('number-form');
let inputNum;
let numBtn = document.getElementById('number-button');
let triviaHTML = document.getElementById('trivia-list');

let baseCardsURL = "https://deckofcardsapi.com/api"
let deck;
let cardBtn = document. getElementById('card-button');
let cardHTML = document.getElementById('card-pile');

function numberTrivia(num=favNumber) {
    axios
        .get(`${baseNumsURL}${num}`)
        .then(n1 => {
            console.log(`First number ${num} trivia: ${n1.data}`);
            triviaHTML.innerHTML += `<li>${n1.data}</li>`;
            return axios.get(`${baseNumsURL}${num}`);
        })
        .then(n2 => {
            console.log(`Second number ${num} trivia: ${n2.data}`);
            triviaHTML.innerHTML += `<li>${n2.data}</li>`;
            return axios.get(`${baseNumsURL}${num}`);
        })
        .then(n3 => {
            console.log(`Third number ${num} trivia: ${n3.data}`);
            triviaHTML.innerHTML += `<li>${n3.data}</li>`;
            return axios.get(`${baseNumsURL}${num}`);
        })
        .then(n4 => {
            console.log(`Forth number ${num} trivia: ${n4.data}`);
            triviaHTML.innerHTML += `<li>${n4.data}</li>`;
        })
        .catch(err => {
            console.log(`We have a problem: ${err}`);
        })
}

function cardsAPI() {
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

function drawCard() {
    axios
        .get(`${baseCardsURL}/deck/new/shuffle/?deck_count=1`)
        .then(d => {
            deck = d.data.deck_id;
            return
        })
}


numBtn.addEventListener("click", (e) => {
    e.preventDefault();
    inputNum = document.getElementById('input-number').value;
    numberTrivia(inputNum)
});
// onClick="numberTrivia(${inputNum})"

cardBtn.addEventListener("click", (e) => {
    e.preventDefault();

})