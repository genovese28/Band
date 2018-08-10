function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //for the sound
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //to make the transition
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing'); //or e.target.classList
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
