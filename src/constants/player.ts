function loadSource(file: string) {
  const image = new Image();
  image.src = require(`../assets/sprites/player/${file}.png`);

  return image;
}

const playerSheet = {
  up: loadSource('playerUp'),
  right: loadSource('playerRight'),
  left: loadSource('playerLeft'),
  down: loadSource('playerDown'),
};

export default playerSheet;