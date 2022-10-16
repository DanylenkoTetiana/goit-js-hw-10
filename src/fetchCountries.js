'use strict';
const inputEl = document.querySelector('#search-box');
export const fetchCountries = name =>
  fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => {
      return response.json();
    })
    .then(country => {
      console.log(country);
    });
