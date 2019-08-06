'use strict';

(function randomRapMachine() {

  const lyrics = ['yo','hype','gang','word','swag','bi**es','f**k','weed','gucci','ni**as'];
  const line = [];

  let rand = Math.round(Math.random() * 500);

  for (let i = 0; i < rand; i++) {
      line.push(lyrics[Math.round(Math.random() * (lyrics.length - 1))] + '!');
  }

  console.log(line.join(', '));
})();