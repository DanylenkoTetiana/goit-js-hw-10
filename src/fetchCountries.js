'use strict';

export const fetchCountries = name => {
  return fetch(
    `https://restcountries.com/v3.1/name/${document
      .querySelector('#search-box')
      .value.trim()}?fields=name,capital,population,flags,languages`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
