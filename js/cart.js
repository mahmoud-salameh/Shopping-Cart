/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  localStorage.clear();
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart

// let trElement = document.createElement('tr');
// table.appendChild(trElement)
function showCart() {

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  for (let i = 0 ; i<cart.items.length;i++){
    // trElement = document.createElement('tr');
    // table.appendChild(trElement)

    let tdElementR = document.createElement('tr');
    tdElementR.textContent = 'x';
    table.appendChild(tdElementR);

    let tdElementN = document.createElement('td');
    tdElementN.textContent = cart.items[i][0];
    tdElementR.appendChild(tdElementN);

    let tdElementQ = document.createElement('td');
    tdElementQ.textContent = cart.items[i][1];
    tdElementR.appendChild(tdElementQ);
  }
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  console.log(event.target);
  event.target.remove();
}


// TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
// TODO: Save the cart back to local storage
// TODO: Re-draw the cart table



// This will initialize the page and draw the cart on screen

