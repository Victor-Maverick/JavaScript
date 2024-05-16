const title = document.getElementById('mainHeading')
console.log(title)

const items = document.getElementsByClassName('container')
console.log(items)

const mainTitle = document.querySelector("#mainHeading")
mainTitle.style.color = 'red';

const ul = document.querySelector('ul');
const li = document.createElement('li');
const div = document.querySelector('div');

ul.append(li)
console.log(ul)
console.log(div.childNodes)
console.log(ul.previousSibling)
console.log(ul.nextSibling)
