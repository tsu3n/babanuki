const suits = ['spade', 'heart', 'diamond', 'club'];
const ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'];

const cardMap = new Map();
const cardTextMap = new Map();

const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const player3 = document.getElementById('player3');
const player4 = document.getElementById('player4');
const field = document.getElementById('field')

const players = [player1, player2, player3, player4];

const redo = document.getElementById('redo');

cardMap.set('back', '🂠');
cardMap.set('ace of spades', '🂡');
cardMap.set('two of spades', '🂢');
cardMap.set('three of spades', '🂣');
cardMap.set('four of spades', '🂤');
cardMap.set('five of spades', '🂥');
cardMap.set('six of spades', '🂦');
cardMap.set('seven of spades', '🂧');
cardMap.set('eight of spades', '🂨');
cardMap.set('nine of spades', '🂩');
cardMap.set('ten of spades', '🂪');
cardMap.set('jack of spades', '🂫');
cardMap.set('queen of spades', '🂭');
cardMap.set('king of spades', '🂮');
cardMap.set('ace of hearts', '🂱');
cardMap.set('two of hearts', '🂲');
cardMap.set('three of hearts', '🂳');
cardMap.set('four of hearts', '🂴');
cardMap.set('five of hearts', '🂵');
cardMap.set('six of hearts', '🂶');
cardMap.set('seven of hearts', '🂷');
cardMap.set('eight of hearts', '🂸');
cardMap.set('nine of hearts', '🂹');
cardMap.set('ten of hearts', '🂺');
cardMap.set('jack of hearts', '🂻');
cardMap.set('queen of hearts', '🂽');
cardMap.set('king of hearts', '🂾');
cardMap.set('ace of diamonds', '🃁');
cardMap.set('two of diamonds', '🃂');
cardMap.set('three of diamonds', '🃃');
cardMap.set('four of diamonds', '🃄');
cardMap.set('five of diamonds', '🃅');
cardMap.set('six of diamonds', '🃆');
cardMap.set('seven of diamonds', '🃇');
cardMap.set('eight of diamonds', '🃈');
cardMap.set('nine of diamonds', '🃉');
cardMap.set('ten of diamonds', '🃊');
cardMap.set('jack of diamonds', '🃋');
cardMap.set('queen of diamonds', '🃍');
cardMap.set('king of diamonds', '🃎');
cardMap.set('ace of clubs', '🃑');
cardMap.set('two of clubs', '🃒');
cardMap.set('three of clubs', '🃓');
cardMap.set('four of clubs', '🃔');
cardMap.set('five of clubs', '🃕');
cardMap.set('six of clubs', '🃖');
cardMap.set('seven of clubs', '🃗');
cardMap.set('eight of clubs', '🃘');
cardMap.set('nine of clubs', '🃙');
cardMap.set('ten of clubs', '🃚');
cardMap.set('jack of clubs', '🃛');
cardMap.set('queen of clubs', '🃝');
cardMap.set('king of clubs', '🃞');
cardMap.set('joker', '🃟');

cardTextMap.set('back', '');
cardTextMap.set('ace of spades', '♠A');
cardTextMap.set('two of spades', '♠2');
cardTextMap.set('three of spades', '♠3');
cardTextMap.set('four of spades', '♠4');
cardTextMap.set('five of spades', '♠5');
cardTextMap.set('six of spades', '♠6');
cardTextMap.set('seven of spades', '♠7');
cardTextMap.set('eight of spades', '♠8');
cardTextMap.set('nine of spades', '♠9');
cardTextMap.set('ten of spades', '♠10');
cardTextMap.set('jack of spades', '♠J');
cardTextMap.set('queen of spades', '♠Q');
cardTextMap.set('king of spades', '♠K');
cardTextMap.set('ace of hearts', '♥A');
cardTextMap.set('two of hearts', '♥2');
cardTextMap.set('three of hearts', '♥3');
cardTextMap.set('four of hearts', '♥4');
cardTextMap.set('five of hearts', '♥5');
cardTextMap.set('six of hearts', '♥6');
cardTextMap.set('seven of hearts', '♥7');
cardTextMap.set('eight of hearts', '♥8');
cardTextMap.set('nine of hearts', '♥9');
cardTextMap.set('ten of hearts', '♥10');
cardTextMap.set('jack of hearts', '♥J');
cardTextMap.set('queen of hearts', '♥Q');
cardTextMap.set('king of hearts', '♥K');
cardTextMap.set('ace of diamonds', '♦A');
cardTextMap.set('two of diamonds', '♦2');
cardTextMap.set('three of diamonds', '♦3');
cardTextMap.set('four of diamonds', '♦4');
cardTextMap.set('five of diamonds', '♦5');
cardTextMap.set('six of diamonds', '♦6');
cardTextMap.set('seven of diamonds', '♦7');
cardTextMap.set('eight of diamonds', '♦8');
cardTextMap.set('nine of diamonds', '♦9');
cardTextMap.set('ten of diamonds', '♦10');
cardTextMap.set('jack of diamonds', '♦J');
cardTextMap.set('queen of diamonds', '♦Q');
cardTextMap.set('king of diamonds', '♦K');
cardTextMap.set('ace of clubs', '♣A');
cardTextMap.set('two of clubs', '♣2');
cardTextMap.set('three of clubs', '♣3');
cardTextMap.set('four of clubs', '♣4');
cardTextMap.set('five of clubs', '♣5');
cardTextMap.set('six of clubs', '♣6');
cardTextMap.set('seven of clubs', '♣7');
cardTextMap.set('eight of clubs', '♣8');
cardTextMap.set('nine of clubs', '♣9');
cardTextMap.set('ten of clubs', '♣10');
cardTextMap.set('jack of clubs', '♣J');
cardTextMap.set('queen of clubs', '♣Q');
cardTextMap.set('king of clubs', '♣K');
cardTextMap.set('joker', 'JOKER');

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function findPairsFromArray(array) {
  const pairs = [];
  const checkedValue = [];

  array.forEach((v, i, a) => {
    j = a.indexOf(v, i + 1);
    if (!checkedValue.includes(i) && j !== -1) {
      checkedValue.push(i, j);
      pairs.push([i, j]);
    }
  });

  return pairs;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function Card(suit, rank, isJoker) {
  this.suit = suit;
  this.rank = rank;
  this.isJoker = isJoker;
}

function makeCards() {
  const cards = [];

  suits.forEach((suit) => ranks.forEach(rank => cards.push(new Card(suit, rank, false))));

  cards.push(new Card(null, null, true)); // joker

  return cards;
}

function dealCards(cards) {
  const hands = [[], [], [], []];

  cards.forEach((card, index) => {
    hands[index % 4].push(card);
  });

  return hands;
}

function discardCardsOnfield(game, playerNumber, pair) {
  game.field.push(game.hands[playerNumber][pair[0]], game.hands[playerNumber][pair[1]]);
  game.hands[playerNumber].splice(pair[0], 1, null);
  game.hands[playerNumber].splice(pair[1], 1, null);
}

function cardToSrting(card) {
  if (card.isJoker) {
    return 'joker'
  }
  return card.rank + ' of ' + card.suit + 's';
}

function stringToCard(string) {
  if (string === 'joker') {
    return new Card(null, null, true);
  }
  return new Card(string.toString().split(' ')[2].slice(0, -1), string.toString().split(' ')[0], false)
}

function Game(hands, field) {
  this.hands = hands;
  this.field = field;
}

function createGame() {
  return new Game(dealCards(shuffleArray(makeCards())), []);
}

function play() {
  const game = createGame();

  const after = structuredClone(game);

  const discardedCards = after.hands.map(value => findPairsFromArray(value.map((v2) => v2.rank)));
  discardedCards.forEach((pairs, index) => pairs.forEach((pair) => discardCardsOnfield(after, index, pair)));
  after.hands = after.hands.map(hand => hand.filter(value => value));

  game.hands = game.hands.map(hand => hand.map(card => cardToSrting(card)));
  game.field = game.field.map(card => cardToSrting(card));
  after.hands = after.hands.map(hand => hand.map(card => cardToSrting(card)));
  after.field = after.field.map(card => cardToSrting(card));

  const response = {
    before: game,
    after: after,
    discardedCards: discardedCards
  }

  return response;
}

function draw(game, draw, skipTurn) {
  const before0 = game;
  before0.hands = before0.hands.map(hand => hand.map(card => stringToCard(card)));
  before0.field = before0.field.map(card => stringToCard(card));

  const response = [];

  let after0;
  if (!skipTurn) {
    const from0 = whichPlayerToDrawCardsFrom0(before0.hands);
    const card = before0.hands[from0][draw];

    before0.hands[0].push(card);
    before0.hands[from0].splice(draw, 1);

    after0 = structuredClone(before0);

    const discardedCards0 = after0.hands.map(value => findPairsFromArray(value.map((v2) => v2.rank)));
    discardedCards0.forEach((pairs, index) => pairs.forEach(pair => discardCardsOnfield(after0, index, pair)));
    after0.hands = after0.hands.map(hand => hand.filter(value => value));

    after0.hands[0] = shuffleArray(structuredClone(after0.hands[0]));

    response.push({ before: before0, after: after0, discardedCards: discardedCards0 });
  } else {
    after0 = structuredClone(before0);
    response.push({ before: before0, after: after0, discardedCards: [[], [], [], []] });
  }

  const before1 = structuredClone(after0);

  before0.hands = before0.hands.map(hand => hand.map(card => cardToSrting(card)));
  before0.field = before0.field.map(card => cardToSrting(card));
  after0.hands = after0.hands.map(hand => hand.map(card => cardToSrting(card)));
  after0.field = after0.field.map(card => cardToSrting(card));

  let after1;
  if (before1.field.length < 52) {
    if (before1.hands[1].length) {
      const from1 = whichPlayerToDrawCardsFrom1(before1.hands);
      const random1 = random(0, before1.hands[from1].length);
      before1.hands[1].push(before1.hands[from1][random1]);
      before1.hands[from1].splice(random1, 1);

      after1 = structuredClone(before1);

      const discardedCards1 = after1.hands.map(value => findPairsFromArray(value.map((v2) => v2.rank)));
      discardedCards1.forEach((pairs, index) => pairs.forEach(pair => discardCardsOnfield(after1, index, pair)));
      after1.hands = after1.hands.map(hand => hand.filter(value => value));

      after1.hands[1] = shuffleArray(structuredClone(after1.hands[1]));

      response.push({ before: before1, after: after1, discardedCards: discardedCards1 });
    } else {
      after1 = structuredClone(before1);
      response.push({ before: before1, after: after1, discardedCards: [[], [], [], []] });
    }
  } else {
    after1 = structuredClone(before1);
    response.push({ before: before1, after: after1, discardedCards: [[], [], [], []] });
  }

  const before2 = structuredClone(after1);

  before1.hands = before1.hands.map(hand => hand.map(card => cardToSrting(card)));
  before1.field = before1.field.map(card => cardToSrting(card));
  after1.hands = after1.hands.map(hand => hand.map(card => cardToSrting(card)));
  after1.field = after1.field.map(card => cardToSrting(card));

  let after2;
  if (before2.field.length < 52) {
    if (before2.hands[2].length) {

      const from2 = whichPlayerToDrawCardsFrom2(before2.hands);
      const random2 = random(0, before2.hands[from2].length);
      before2.hands[2].push(before2.hands[from2][random2]);
      before2.hands[from2].splice(random2, 1);

      after2 = structuredClone(before2);

      const discardedCards2 = after2.hands.map(value => findPairsFromArray(value.map((v2) => v2.rank)));
      discardedCards2.forEach((pairs, index) => pairs.forEach(pair => discardCardsOnfield(after2, index, pair)));
      after2.hands = after2.hands.map(hand => hand.filter(value => value));

      after2.hands[2] = shuffleArray(structuredClone(after2.hands[2]));

      response.push({ before: before2, after: after2, discardedCards: discardedCards2 });
    } else {
      after2 = structuredClone(before2);
      response.push({ before: before2, after: after2, discardedCards: [[], [], [], []] });
    }
  } else {
    after2 = structuredClone(before2);
    response.push({ before: before2, after: after2, discardedCards: [[], [], [], []] });
  }

  const before3 = structuredClone(after2);

  before2.hands = before2.hands.map(hand => hand.map(card => cardToSrting(card)));
  before2.field = before2.field.map(card => cardToSrting(card));
  after2.hands = after2.hands.map(hand => hand.map(card => cardToSrting(card)));
  after2.field = after2.field.map(card => cardToSrting(card));

  let after3;
  if (before3.field.length < 52) {
    if (before3.hands[3].length) {
      const from3 = whichPlayerToDrawCardsFrom3(before3.hands);
      const random3 = random(0, before3.hands[from3].length);
      before3.hands[3].push(before3.hands[from3][random3]);
      before3.hands[from3].splice(random3, 1);

      after3 = structuredClone(before3);

      const discardedCards3 = after3.hands.map(value => findPairsFromArray(value.map((v2) => v2.rank)));
      discardedCards3.forEach((pairs, index) => pairs.forEach(pair => discardCardsOnfield(after3, index, pair)));
      after3.hands = after3.hands.map(hand => hand.filter(value => value));

      after3.hands[3] = shuffleArray(structuredClone(after3.hands[3]));

      response.push({ before: before3, after: after3, discardedCards: discardedCards3 });
    } else {
      after3 = structuredClone(before3);

      response.push({ before: before3, after: after3, discardedCards: [[], [], [], []] });
    }
  } else {
    after3 = structuredClone(before3);
   
    response.push({ before: before3, after: after3, discardedCards: [[], [], [], []] });
  }

  before3.hands = before3.hands.map(hand => hand.map(card => cardToSrting(card)));
  before3.field = before3.field.map(card => cardToSrting(card));
  after3.hands = after3.hands.map(hand => hand.map(card => cardToSrting(card)));
  after3.field = after3.field.map(card => cardToSrting(card));

  return response;
}

function whichPlayerToDrawCardsFrom0(hands) {
  if (hands[3].length) {
    return 3;
  }

  if (hands[2].length) {
    return 2;
  }

  if (hands[1].length) {
    return 1;

  }
}

function whichPlayerToDrawCardsFrom1(hands) {
  if (hands[0].length) {
    return 0;
  }

  if (hands[3].length) {
    return 3;
  }

  if (hands[2].length) {
    return 2;

  }
}

function whichPlayerToDrawCardsFrom2(hands) {
  if (hands[1].length) {
    return 1;
  }

  if (hands[0].length) {
    return 0;
  }

  if (hands[3].length) {
    return 3;
  }
}

function whichPlayerToDrawCardsFrom3(hands) {
  if (hands[2].length) {
    return 2;
  }

  if (hands[1].length) {
    return 1;
  }

  if (hands[0].length) {
    return 0;
  }
}

function start() {
  const game = play();

  showCards(game.before.hands);

  discardCards(game);

  setTimeout(() => {
    possibleDrawCard(game);
  }, 3000);
}

redo.addEventListener('click', () => location.reload());

function showCards(hands) {
  players.forEach(player => player.textContent = '');

  hands[0].forEach(card => {
    player1.appendChild(makeCard(card));
  });

  hands[1].forEach(() => {
    const div = makeCard('back');
    div.classList.add('bg-white', '-margin-right-2rem');
    player2.appendChild(div);
  });

  hands[2].forEach(() => {
    const div = makeCard('back');
    div.classList.add('bg-white', '-margin-left-2rem');
    player3.appendChild(div);
  });

  hands[3].forEach(() => {
    const div = makeCard('back');
    div.classList.add('bg-white', '-margin-left-2rem');
    player4.appendChild(div);
  });
}

function discardCards(value) {
  value.discardedCards.forEach((player, index) => player.forEach((pairs, index2) => {
    const cardDiv1 = players[index].children[pairs[0]];
    const cardDiv2 = players[index].children[pairs[1]];

    cardDiv1.classList.add('border', 'border-warning', 'border-2', 'z-1');
    cardDiv2.classList.add('border', 'border-warning', 'border-2', 'z-1');

    setTimeout(() => {
      cardDiv1.classList.remove('border', 'border-warning', 'border-2', 'z-1');
      cardDiv2.classList.remove('border', 'border-warning', 'border-2', 'z-1');

      field.textContent = ""
      field.appendChild(makeCard(value.before.hands[index][pairs[0]]));
      field.appendChild(makeCard(value.before.hands[index][pairs[1]]));

      players[index].removeChild(cardDiv1);
      players[index].removeChild(cardDiv2);
    }, (index2 + 1) * 500);
  }));
}

function possibleDrawCard(value) {
  const from = whichPlayerToDrawCardsFrom0(value.after.hands);

  if (value.after.field.length < 52) {
    if (!value.after.hands[0].length) {
      const games = draw(value.after, null, true);

      showCardsMovement(from,games);
    } else {
      players[from].classList.add('border', 'border-warning', 'border-2');
      Array.from(players[from].children).forEach((card, index) => {
        card.addEventListener('click', () => {
          const games = draw(value.after, index, false);

          showCardsMovement(from,games);
        });
      });
    }
  }
}

function showCardsMovement(from,games) {
  showCards(games[0].before.hands);
  discardCards(games[0]);

  setTimeout(() => {
    showCards(games[0].after.hands);

    setTimeout(() => {
      players[from].classList.remove('border', 'border-warning', 'border-2');

      showCards(games[1].before.hands);
      discardCards(games[1]);

      setTimeout(() => {
        showCards(games[1].after.hands);

        setTimeout(() => {
          showCards(games[2].before.hands);
          discardCards(games[2]);

          setTimeout(() => {
            showCards(games[2].after.hands);

            setTimeout(() => {
              showCards(games[3].before.hands);
              discardCards(games[3]);

              setTimeout(() => {
                showCards(games[3].after.hands);

                setTimeout(() => {
                  possibleDrawCard(games[3]);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}


function makeCard(card) {
  const div = document.createElement('div');
  div.classList.add('d-flex', 'flex-column', 'align-items-center');

  if (card.split(' ')[2] === 'hearts' || card.split(' ')[2] === 'diamonds') {
    div.classList.add('text-danger');
  }

  const span1 = document.createElement('span');
  span1.classList.add('text-6rem');
  const text1 = document.createTextNode(cardMap.get(card));
  const span2 = document.createElement('span');
  const text2 = document.createTextNode(cardTextMap.get(card));
  span1.appendChild(text1);
  span2.appendChild(text2);
  div.appendChild(span1);
  div.appendChild(span2);

  return div
}

start();