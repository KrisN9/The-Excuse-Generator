/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#btn").addEventListener("click", function() {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};
let generateExcuse = function() {
  let pronoun = ["A ", "The ", "My "];
  let who = ["dog ", "cat ", "mother ", "clown ", "tree "];
  let action = ["took ", "hit ", "yelled at ", "laughed at ", "fell at "];
  let what = ["my wallet ", "my vase ", "a computer ", "my face ", "my car "];
  let when = [
    "in the morning",
    "while in the street",
    "at the balcony",
    "in a show",
    "in the forest"
  ];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    pronoun[pronounIndex] +
    "" +
    who[whoIndex] +
    "" +
    action[actionIndex] +
    "" +
    what[whatIndex] +
    "" +
    when[whenIndex] +
    ""
  );
};
