/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.

const cart = new Cart([]);
console.log(Product.allProducts);
// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //DONE: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    let option = document.createElement('option');
    option.textContent = Product.allProducts[i].name;
    option.value = Product.allProducts[i].name;
    selectElement.appendChild(option);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // DONE: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// DONE: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // DONE: suss out the item picked from the select list
  let itemPicked = document.getElementById('items').value;
  // DONE: get the quantity
  let itemQuantity = document.getElementById('quantity').value;
  // DONE: using those, add one item to the Cart
  cart.addItem(itemPicked, itemQuantity);
  console.log(cart);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  // let sum = document.getElementById('quantity').value;
  const counter = document.querySelector('nav');

  // if (document.getElementById('count')){
  //   document.getElementById('count')
  // }else{
  //   document.createElement('h2');
  // }
  // Apparently using this formatting is what is needed to delete the repeating element from the top when we push it.

  let headerNav =  document.getElementById('count')?document.getElementById('count'):document.createElement('h2');
  headerNav.setAttribute('id', 'count');
 
  let sum =0;
  headerNav.innerHTML = '';
  for (let i=0; i<cart.items.length; i++){
    sum += parseInt(cart.items[i].quantity);
  }

  headerNav.textContent = `${sum}`;
  counter.appendChild(headerNav);
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  console.log(cart);
  // TODO: Add a new element to the cartContents div with that information
  const contents = document.getElementById('cartContents');

  console.log(cart);

  contents.innerHTML = '';

  for (let i=0; i<cart.items.length;i++){
  let preview = document.createElement('p');
  preview.setAttribute('id', 'peak');
  preview.textContent = `The product is ${cart.items[i].product} and the quantity is ${cart.items[i].quantity}`;
  contents.appendChild(preview);
  }
  
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
