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
  document.getElementsByClassName('tr').innerHTML = '';
  // let removeRow = document.querySelector('tr').remove();
  //target the tbody and use innerHTMl to equal none
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // DONE: Find the table body
  let cart = document.querySelector('tbody');
  // TODO: Iterate over the items in the cart
  for (let i=0; i < cart.items.length; i++) {
    // TODO: Create a TR
    let createNewRow = document.createElement('tr');
    cart.appendChild(createNewRow);
  // TODO: Create a TD for the delete link, quantity, and the item
    let createNewData = document.createElement('td');
    createNewData.textContent = "X";
    createNewRow.appendChild(createNewData);
    let newQuantity = document.createElement('td');
    newQuantity.textContent = `${Cart.allCart[i].quantity}`
    createNewRow.appendChild(newQuantity)
    let newItem = document.createElement('td');
    newItem.textContent = `${Cart.allCart[i].product}`
    createNewRow.appendChild(newItem);

     // TODO: Add the TR to the TBODY and each of the TD's to the TR
  }
  
 

}

function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  
  //if (the link = X) {cart.removeItem()}

  // TODO: Save the cart back to local storage
  let stringProducts = JSON.stringify(cart.items);
  localStorage.setItem('cart',stringProducts);
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
