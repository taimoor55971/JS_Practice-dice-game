'use strict';
const new_btn = document.querySelector('.btn--new');
const roll_btn = document.querySelector('.btn--roll');
const hold_btn = document.querySelector('.btn--hold');
const score1_Elem = document.querySelector('#score--0');
const score2_Elem = document.querySelector('#score--1');
const current1_Elem = document.querySelector('#current--0');
const current2_Elem = document.querySelector('#current--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

let current_score1 = 0;
let current_score2 = 0;
let score1 = 0;
let score2 = 0;

const dice_img = document.querySelector('.dice');
// ROLL BUTTON FUNTIONALITY CLICK EVENTLISTENER
roll_btn.addEventListener('click', () => {
  const dice_num = Math.floor(Math.random() * 6) + 1;

  dice_img.src = `dice-${dice_num}.png`;

  if (player1.classList.contains('player--active')) {
    if (dice_num !== 1) {
      current_score1 += dice_num;
      score1+=current_score1
      current1_Elem.textContent = current_score1;
    } else {
        current_score1=0
    
      current1_Elem.textContent = current_score1;
      score1_Elem.innerHTML = score1;
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
    }
  } else {
    if (dice_num !== 1) {
      current_score2 += dice_num;
      score2+=current_score2
      current2_Elem.textContent = current_score2;
    } else {
    current_score2=0
      current2_Elem.textContent = current_score2;
      score2_Elem.textContent = score2;
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
    }
  }
});

// HOLD BUTTON EVENTLISTENER

hold_btn.addEventListener('click', () => {
  if (player1.classList.contains('player--active')) {
    score1 += current_score1;
    score1_Elem.textContent = score1;
    current_score1 = 0;
    current1_Elem.textContent = current_score1;
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
  } else {
    score2 += current_score2;
    score2_Elem.textContent = score2;
    current_score2 = 0;
    current2_Elem.textContent = current_score2;
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
  }

  if(current_score1>=100){
    player1.classList.add('.player--winner')
  }else if(current_score2){
    player2.classList.add('.player--winner')
  }
});

// Reset Button
new_btn.addEventListener('click', () => {
  score1 = 0;
  score2 = 0;
  current_score1 = 0;
  current_score2 = 0;
  score1_Elem.textContent = score1;
  score2_Elem.textContent = score2;
  current1_Elem.textContent = current_score1;
  current2_Elem.textContent = current_score2;
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
});
