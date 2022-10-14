'use strict';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('#search-box');
console.log(inputEl);
inputEl.style.borderColor = 'blue';
inputEl.style.margin = '15px';
console.log(document.body);
document.body.style.background = 'url(./image/photo.jpg)';
inputEl.style.backgroundImage = 'url(/image/background.jpg)';
// document.body.style.background =
//   '#fff url(https://image.ibb.co/mjdbZ5/bg5.jpg) no-repeat center';
