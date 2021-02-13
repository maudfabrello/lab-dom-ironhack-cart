// ITERATION 1


  function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');
    const price = product.querySelector('.price span').innerHTML
    const quantity = product.querySelector('.quantity input').value
    console.log(price, quantity)
    const subtotal = product.querySelector('.subtotal span') //Hint: it is the element with the class subtotal : span in .html
    subtotal.innerHTML = price * quantity
    return price * quantity
   


  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
const products = document.querySelectorAll('.product')
let totalValue = 0
products.forEach((product) => {
  totalValue += updateSubtotal(product)
  })

  // ITERATION 3
const total = document.querySelector('#total-value span')
total.textContent = totalValue
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
