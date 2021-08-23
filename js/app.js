// total delivery
function totalDeliver(price, delivery) {
  const deliveryCost = document.getElementById(delivery);
  deliveryCost.innerText = price;
}
const allTotalPrice = document.getElementById("all-total");
const extra = document.getElementById("extra-memory");
const extraStorage = document.getElementById("extra-storage");

// total calculate
function updateTotal() {
  const totalPrice = document.getElementById("total");
  const bestPrice = document.getElementById("best-price");
  const deliveryCost = document.getElementById("delivery-cost");
  const deliveryCharge = parseInt(deliveryCost.innerText);
  const extraS = parseInt(extraStorage.innerText);
  const extraCharge = parseInt(extra.innerText);
  const extraTotal = parseInt(bestPrice.innerText);
  const totalExtra = extraCharge + extraTotal;
  totalPrice.innerText = totalExtra + extraS + deliveryCharge;
  allTotalPrice.innerText = totalExtra + extraS + deliveryCharge;
  console.log(totalPrice);
}
const discountCode = document.getElementById("pomo-code");
const totalPrice = document.getElementById("total");
// pomo code
document.getElementById("pomo-button").addEventListener("click", function () {
  const totalPrice = document.getElementById("total");
  let totalAfterPromo = allTotalPrice.innerText;

  if (discountCode.value.toLowerCase() == "stevekaku") {
    allTotalPrice.innerText = totalAfterPromo - (totalAfterPromo * 20) / 100;
  } else {
    alert("Invalid Promo Code");
  }
  discountCode.value = "";
});

// unified memory 8gb
document.getElementById("memory-gb8").addEventListener("click", function () {
  extra.innerText = 0;
  updateTotal();
});
// unified memory 16gb
document.getElementById("memory-gb16").addEventListener("click", function () {
  extra.innerText = 180;
  updateTotal();
});

//  storage ssd card 216gb
document
  .getElementById("ssd-storage256")
  .addEventListener("click", function () {
    extraStorage.innerText = 0;
    updateTotal();
  });
//  storage ssd card 512gb
document
  .getElementById("ssd-storage512")
  .addEventListener("click", function () {
    extraStorage.innerText = 100;
    updateTotal();
  });
//  storage ssd card 1tb
document
  .getElementById("ssd-storage1tb")
  .addEventListener("click", function () {
    extraStorage.innerText = 180;
    updateTotal();
  });

// free delivery
document
  .getElementById("first-delivery")
  .addEventListener("click", function () {
    totalDeliver(0, "delivery-cost");
    updateTotal();
  });
//    extra 20$ delivery charge
document
  .getElementById("second-delivery")
  .addEventListener("click", function () {
    totalDeliver(20, "delivery-cost");
    updateTotal();
  });
