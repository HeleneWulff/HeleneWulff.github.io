const checkoutButton = document.querySelector("#checkout-button");
console.log(checkoutButton);

checkoutButton.addEventListener("click", gotodetails);

function gotodetails() {
  window.location.href =
    "https://helenewulff.github.io/Assignment3/Navigation/";
}
// This function is how the click and navigation work together.
// I have added the event listener that when the user clicks on the checkout button they are being directed to the details page.
