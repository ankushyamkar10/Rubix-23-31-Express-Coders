var arrayOfGoods = [];
var typeOfFood = '';
var quantity = 0;
var amount = 0;
var bestbefore = 0;
var val = {};
var totalamount = 0;
var select = '';

const localStorageArrays = JSON.parse(localStorage.getItem('arrayOfGoods'));

/*let arrayOfGoods =
  localStorage.getItem('arrayOfGoods') !== null ? localStorageArrays : [];*/

function storeValue() {
  select = document.getElementById('mySelect');
  typeOfFood = select.options[select.selectedIndex].value;
  //   console.log(typeOfFood);
}

function getQuantity() {
  quantity = document.getElementById('quantity').value;
  //   console.log(quantity);
}
function getAmount() {
  amount = document.getElementById('amount').value;
  //   console.log(amount);
}
function getbestbefore() {
  bestbefore = document.getElementById('bestbefore').value;
  //   console.log(bestbefore);
}

function getMeasure() {
  if (
    typeOfFood === 'Bakery' ||
    typeOfFood === 'Biscuits' ||
    typeOfFood === 'Chocolates' ||
    typeOfFood === 'Packaged Snacks' ||
    typeOfFood === 'Tetra Pack'
  )
    return 'Pieces';
  else if (typeOfFood === 'Dairy' || typeOfFood === 'Milk') return 'litres';
  else return 'kg';
}

document.getElementById('btn').addEventListener('click', function (event) {
  if (
    typeOfFood !== '' &&
    typeOfFood !== 'Select' &&
    quantity > 0 &&
    amount > 0 &&
    bestbefore > 0
  ) {
    val = { typeOfFood, amount, quantity, bestbefore };
    addGoodsDOM();
    setTotalAmount(val);
    arrayOfGoods.push(val);
    updateLocalStorage();
  } else {
    alert('Enter valid values please.');
  }
//   console.log(arrayOfGoods);
  typeOfFood = '';
  quantity = 0;
  amount = 0;
  bestbefore = 0;
  event.preventDefault();
});

const getData = () => {
  
}

document.getElementById("btn1").addEventListener("click", function (event) {
  console.log(arrayOfGoods)
  const data = JSON.stringify({data: arrayOfGoods});
    const response = fetch('http://localhost:3000/savef2',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: data
    })
    if(response.ok){
      const jsonResponse = response.json();
    }
  event.preventDefault();
});

function addGoodsDOM() {
  const item = document.createElement('li');

  item.innerHTML = `
      
         <span> ${val.typeOfFood} "-" ${val.quantity}  "x"   ${val.amount}</span>
      `;

  list.appendChild(item);
}

function updateLocalStorage() {
  localStorage.setItem('arrayOfGoods', JSON.stringify(arrayOfGoods));
}

function setTotalAmount(val) {
  totalamount = Number(totalamount) + Number(val.amount) * Number(val.quantity);
  document.getElementById('totalamount').innerText = totalamount;
  console.log(totalamount);
}
