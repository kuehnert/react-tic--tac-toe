export default function backgroundColor(value) {
  switch (value) {
    case 1:
      return 'tile-player1';
    case 2:
      return 'tile-player2';
    default:
      return 'tile-neutral';
  }
}
