const checkoutButton = document.querySelector("#checkout-button");
console.log(checkoutButton);

checkoutButton.addEventListener("click", gotodetails);

function gotodetails() {
  window.location.href =
    "https://helenewulff.github.io/Assignment3/Navigation/";
}
