// The heart button
const btn = document.querySelectorAll(".heart");
btn.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    if (btn.classList.contains("far")) {
      btn.classList.remove("far");
      btn.classList.add("fas");
    } else {
      btn.classList.remove("fas");
      btn.classList.add("far");
    }
  });
});

//  the trash button
const remove = document.querySelectorAll(".trash-button");
const phone = document.querySelectorAll(".smartphone-card");
remove.forEach((btn, i) => {
  btn.addEventListener("click", function (event) {
    let phonePrice = parseInt(prices[i].innerHTML);
    let quantity = parseInt(plusButton[i].nextElementSibling.value);
    total.innerHTML = parseInt(total.innerHTML) - phone * quantity;
    phone[i].remove();
  });
});

//  the total
var total = document.querySelector(".total-bying");
// -------------------------
// + & -
var unit = 0;
//   button +
var prices = document.querySelectorAll(".price");
const plusButton = document.querySelectorAll(".plus-plus");
console.log(prices);
Array.from(plusButton).forEach((button, i) => {
  button.addEventListener("click", () => {
    button.nextElementSibling.value =
      parseInt(button.nextElementSibling.value) + 1;
    console.log(total);
    var price = prices[i];
    total.innerHTML = parseInt(total.innerHTML) + parseInt(price.innerHTML);
  });
});

// button -
const minusButton = document.querySelectorAll(".minus-minus");
Array.from(minusButton).forEach((button, i) => {
  button.addEventListener("click", () => {
    if (button.previousElementSibling.value > 0) {
      button.previousElementSibling.value =
        parseInt(button.previousElementSibling.value) - 1;
      var price = prices[i];
      total.innerHTML = parseInt(total.innerHTML) - parseInt(price.innerHTML);
    }
  });
});
