var arrayOfFood = [];
var typeOfFood = '';
var quantity = 0;
var val = {};

function storeValue() {
  var select = document.getElementById('mySelect');
  typeOfFood = select.options[select.selectedIndex].value;
  console.log(typeOfFood);
}

function getQuantity() {
  quantity = document.getElementById('quantity').value;
  console.log(quantity);
}

function getMeasure() {
  if (
    typeOfFood === 'Indian Bread' ||
    typeOfFood === 'Fried Snacks' ||
    typeOfFood === 'Cold Snacks' ||
    typeOfFood === 'Starter Snacks'
  )
    return 'Pieces';
  else return 'kg';
}

document.getElementById('btn').addEventListener('click', function (event) {
  var isChecked = document.getElementById('yes18');

  if (typeOfFood !== '' && quantity > 0) {
    if (isChecked.checked) {
      val = { typeOfFood, quantity };
      const item = document.createElement('li');
      item.innerHTML = `<span>${val.typeOfFood}   x   ${
        val.quantity
      } ${getMeasure()}</span>`;
      list.appendChild(item);
      arrayOfFood.push(val);
    } else alert('please check the checkbox if made less than 18 hrs');
  } else alert('choose every option!!!');
  console.log(arrayOfFood);
  event.preventDefault();
});