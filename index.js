function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
   lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild() {
  let nodes = document.querySelector('#grand-node').querySelectorAll('div');
  let i = 0;
  while (nodes.length > 0) {
    if (nodes[i].children.length === 0) {
      return nodes[i];
    }
    i++;
  }
}




