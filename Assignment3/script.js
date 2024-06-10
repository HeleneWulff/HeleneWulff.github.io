const checkoutButton = document.querySelector("#checkout-button");
console.log(checkoutButton);

checkoutButton.addEventListener("click", gotodetails);

function gotodetails() {
  window.location.href =
    "http://127.0.0.1:3000/Assignment3/Navigation/index.html";
}
