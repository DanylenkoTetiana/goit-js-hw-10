'use strict';
import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('#search-box');
const countrisListEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');

countryInfoEl.style.fontSiz = '20px';
inputEl.style.border = '#696969 solid 3px';
inputEl.style.margin = '15px';
document.body.style.backgroundImage =
  'url(https://st.depositphotos.com/2016341/2010/i/450/depositphotos_20105595-stock-photo-white-grunge-brick-wall-background.jpg)';

inputEl.addEventListener(
  'input',
  debounce(() => {
    if (inputEl.value === '') {
      cleanMarkup();
      cleanMarkupContry();
      return;
    }
    fetchCountries()
      .then(countris => {
        if (countris.length > 10) {
          Notify.info(
            `Too many matches found. Please enter a more specific name.`
          );
        } else if (countris.length >= 2 && countris.length <= 10) {
          cleanMarkupContry();
          renderCountrisList(countris);
        }
        if (countris.length === 1) {
          cleanMarkup();
          renderCountry(countris);
        }
      })
      .catch(error => {
        Notify.failure(`Oops, there is no country with that name`);
      });
  }, DEBOUNCE_DELAY)
);

function renderCountrisList(countris) {
  const markup = countris
    .map(country => {
      return `<li style="margin-bottom:15px; list-style: none; font-size:20px;"><img src="${country.flags.svg}" alt=flag width="40"/>  ${country.name.official}
        </li>`;
    })
    .join('');
  countrisListEl.innerHTML = markup;
}

function renderCountry(countris) {
  const markup = countris
    .map(country => {
      return `<dev class="country">
      <p style="margin-bottom:20px; font-size:26px"><img src="${
        country.flags.svg
      }" alt=flag width="40"/>    <b>${country.name.official}</b>
        </p>
          <p><b>Capital</b>: ${country.capital}</p>
          <p><b>Population</b>: ${country.population}</p>
          <p><b>Languages</b>: ${Object.values(country.languages)}</p></dev>`;
    })
    .join('');
  countryInfoEl.innerHTML = markup;
}

function cleanMarkup() {
  countrisListEl.innerHTML = '';
}

function cleanMarkupContry() {
  countryInfoEl.innerHTML = '';
}
