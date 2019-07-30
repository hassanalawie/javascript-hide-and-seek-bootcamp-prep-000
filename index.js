function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }
}

function deepestChild(){
  let temp = document.querySelector('#grand-node')
  let nextNode = temp.children[0]

  while (nextNode) {
    temp = nextNode
    nextNode = temp.children[0]
  }

  return temp
  }