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
    case 'w03_p1_14':
      p.innerHTML = `<iframe src='./demo/w03_basics_14/p1_14/p1_14.html' width="100%" height="100%" />`;
      break;
    case 'w04_p2_14':
      p.innerHTML = `<iframe src='./demo/w04_basics_14/p2_14/p2_14.html' width="100%" height="100%" />`;
      break;
    case 'w05_p1_14':
      p.innerHTML = `<iframe src='./demo/w05_basics_14/p1_14/p1_14.html' width="100%" height="100%" />`;
      break;
    case 'w05_p2_14':
      p.innerHTML = `<iframe src='./demo/w05_basics_14/p2_14/p2_14.html' width="100%" height="100%" />`;
      break;
    case 'w06_p5_14':
      p.innerHTML = `<iframe src='./demo/w06_prep_test_14/p5_14/src/p5_14.html' width="100%" height="100%" />`;
      break;
    case 'w06_p6_14':
      p.innerHTML = `<iframe src='./demo/w06_prep_test_14/p6_14/src/p6_14.html' width="100%" height="100%" />`;
      break;
    case 'quiz1_14_p1':
      p.innerHTML = `<iframe src='./exams/quiz1_14/p1_14/src/p1_14.html' width="100%" height="100%" />`;
      break;
    case 'quiz1_14_p2':
      p.innerHTML = `<iframe src='./exams/quiz1_14/p2_14/src/p2_14.html' width="100%" height="100%" />`;
      break;
    case 'quiz1_14_p3':
      p.innerHTML = `<iframe src='./exams/quiz1_14/p3_14/p3_14.html' width="100%" height="100%" />`;
      break;
    case 'quiz1_14_p4':
      p.innerHTML = `<iframe src='./exams/quiz1_14/p4_14/p4_14.html' width="100%" height="100%" />`;
      break;
  }
}

function showMid(item) {
  switch (item) {
    case 'm1_14':
      p.innerHTML = `<iframe src='./exams/mid1_14/m1_14/src/p1_14.html' width='100%' height='100%' />`;
      break;
    case 'm2_14':
      p.innerHTML = `<iframe src='./exams/mid1_14/m2_14/p2_14.html' width='100%' height='100%' />`;
      break;
    case 'm3_14':
      p.innerHTML = `<iframe src='./exams/mid1_14/m3_14/p3_14.html' width='100%' height='100%' />`;
      break;
  }
}
