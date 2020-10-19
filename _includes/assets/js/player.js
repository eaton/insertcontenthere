//See https://github.com/sampotts/plyr for customization

const controls = [
 'play',
 'rewind',
 'progress',
 'fast-forward',
 'current-time',
 'mute',
 'volume',
 'settings',
 'airplay'
];

const players = Array.from(document.querySelectorAll(".player"));
  players.map(player => new Plyr(player, {
  controls,
  invertTime: true,
  toggleInvert: true,
  settings: ['quality', 'speed']
}));
