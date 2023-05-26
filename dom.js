let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listcard = document.querySelector('.listcard');
let body = document.querySelector('.body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
}) 
openShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
}) 
