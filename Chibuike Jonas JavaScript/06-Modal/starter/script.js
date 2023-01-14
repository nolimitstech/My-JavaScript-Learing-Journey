'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal'); // 'querySelectorAll' used to select classes of same name


// NON DRY METHD
/*
for (let i = 0; i < btnsOpenModal.length; i++) // loop is needed to access the other classed
// console.log(btnsOpenModal[i].textContent);
 
btnsOpenModal[i].addEventListener('click', function () {  // functn for display/unhide
  modal.classList.remove('hidden');  // classlist allows u to select the classes given  to an element
  overlay.classList.remove('hidden');
}); // this function is called by javascrpt as soon there is a click.

btnCloseModal.addEventListener('click', function () {  // functn for hide
modal.classList.add('hidden');
overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {  // functn to exit the overlay display
modal.classList.add('hidden');
overlay.classList.add('hidden');
});
*/




////// SEE DRY METHOD BELOW

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

////KEY PRESS EVENTS
// function To know the keyboard key pressed.
/*
 document.addEventListener('keydown', function (e) { // allows event to be listened from different points on the page as soon we hit any key 'KEYDOWN' on the key
  // console.log(e.key); with this functn you can detect the key that was pressed in the keyboaard
 });
*/

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {  // for closing with 'ESCAPE' key
    closeModal();
  }
});


