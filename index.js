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
  const array = Array.prototype.slice.call(document.querySelector('#grand-node').querySelectorAll('div'));
  let current = array;
  let next = [];
  while (current.length > 0) {
    if (current[0].children.length === 0) {
      return current[0].innerHTML;
    } else {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i]);
      }
    }
    current = next.shift()
  }
 
  // if we haven't
  return null;
}

console.log(deepestChild())


