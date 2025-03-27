const p = document.querySelector('.show-classdemo');
console.log('p', p);

function showClassDemo(item) {
  switch (item) {
    case 'w01_dom_14':
      p.innerHTML = `<iframe src='./demo/w01_dom_14/index.html' width='100%' height='100%' />`;
      break;
    case 'w02_dom_14':
      p.innerHTML = `<iframe src='./demo/w02_dom_14/index.html' width='100%' height='100%' />`;
      break;
    case 'w03_tictactoe_14':
      p.innerHTML = `<iframe src='./demo/w03_tictactoe_14/tictactoe_14.html' width="100%" height="100%" />`;
      break;
    case 'w03_p1_14:
      p.innerHTML = `<iframe src='./demo/w03_basics_14/p1_14/p1_14.html' width="100%" height="100%" />`;
      break;
    case 'w04_p2_14':
      p.innerHTML = `<iframe src='./demo/w04_basics_14/p2_14/p2_14.html' width="100%" height="100%" />`;
      break;
  }
}
