'use strict';
import './css/styles.css';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('#search-box');

inputEl.style.border = '#696969 solid 3px';
inputEl.style.margin = '15px';
console.log(inputEl.value);
document.body.style.backgroundImage =
  'url(https://st.depositphotos.com/2016341/2010/i/450/depositphotos_20105595-stock-photo-white-grunge-brick-wall-background.jpg)';
inputEl.addEventListener(
  'input',
  _.debounce(() => {
    fetchCountries(inputEl.value);
    console.log(fetchCountries(inputEl.value));
  }),
  300
);
