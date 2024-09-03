let secretNumber = Math.trunc(Math.random() * 20 + 1);

console.log(secretNumber);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  console.log('test');

  //Si il y a aucun chiffre
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Pas de chiffre !';

    //En cas de victoire
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct  !';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    highscore = score;
    document.querySelector(
      '.label-highscore'
    ).textContent = `🥇 record: ${highscore}`;

    // En cas de mauvaise réponse (trop haut)
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Trop haut 📉';
    } else {
      document.querySelector('.message').textContent = 'Perdu 😞';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Trop bas... 📈';
    } else {
      document.querySelector('.message').textContent = 'Perdu 😞';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  guess = '';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Commence...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  console.log('test');
  console.log(secretNumber);
});
