/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(".card").classList.add(randomSuit());
  document.querySelector(".number").innerHTML = randomPalos();
};

let randomPalos = () => {
  let palos = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let Palos = Math.floor(Math.random() * palos.length);
  return palos[Palos];
};

let randomSuit = () => {
  let suit = ["diamond", "spade", "heart", "club"];
  let iSuit = Math.floor(Math.random() * suit.length);
  return suit[iSuit];
};
