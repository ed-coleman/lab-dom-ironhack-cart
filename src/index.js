// ITERATION 1

function updateSubtotal(product) {
  const priceElement = parseFloat(
    product.querySelector(".price span").innerText
  );
  const quantityElement = parseFloat(
    product.querySelector(".quantity input").value
  );
  //const subtotalElement = document.querySelector(".subtotal span").innerText;
  /*console.log(
    'Calculating subtotal, yey!"',
    priceElement,
    quantityElement,
    subtotalElement
  );*/
  let subtotal = priceElement * quantityElement;

  product.querySelector(".subtotal span").innerText = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector(".product");
  updateSubtotal(singleProduct);
  // end of test*/

  const allProducts = document.querySelectorAll(".product");
  let sum = 0;
  allProducts.forEach((product) => {
    sum += updateSubtotal(product);
  });
  document.querySelector("#total-value span").innerText = sum;
  return sum;
}

// ITERATION 3

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const parentNode = target.parentNode.parentNode;
  console.log("The target in remove is:", target.parentNode.parentNode);
  //... your code goes here
  parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  let textInput = document.querySelector('#textInput').value;
  let priceInput = document.querySelector('#priceInput').value;

  console.log(textInput, priceInput);

  let newProduct = document.createElement('tr');
  newProduct.className = 'product';
  newProduct.innerHTML = `
  <td class="name">
            <span>${textInput}</span>
          </td>
          <td class="price">$<span>${priceInput}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>`;

let productsParent = document.querySelector('tbody')
productsParent.appendChild(newProduct)
  //console.log(newProduct);
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here

  const removeButton = document.querySelectorAll(".btn-remove");
  removeButton.forEach((btn) => btn.addEventListener("click", removeProduct));

  const createButton = document.querySelector("#create");
  createButton.addEventListener("click", createProduct);
});
