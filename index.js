function getFirstSelector(selector) {return document.querySelector(selector)}
function nestedTarget() {return document.querySelector('div.target')}
function increaseRankBy(n) {const ulRL=document.querySelectorAll('ul.ranked-list');
  for (let i = 0; i < ulRL.length; i++) {
       var a = ulRL[i].querySelectorAll('li');
       for (let j=0; j<a.length; j++) {console.log(a[j]);
            a[j].innerHTML=parseInt(a[j].innerHTML,10)+n
            }
      }
}

function deepestChild() {
    var gN=document.querySelector('#grand-node'); var a=gN.children[0]; var t = [];
    while (a !== undefined) {t.push(a.children[0]); a=a.children[0]}
	for (let i=0; i<t.length; i++) {console.log(t[i])}
	return t[t.length-2]
}
