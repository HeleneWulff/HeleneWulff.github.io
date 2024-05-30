const abcButton = document.querySelector("#abc-button");
console.log(abcButton);

abcButton.addEventListener("click", gotoABC);
// der er ikke event listener for navigate, derfor arbejder vi med click

function gotoABC() {
  window.location.href = "https://www.abc.net.au/";
  //   Ofte skal vi bare navigere inden for vores egen side og linke til eksterne sider
}

const footerButton = document.querySelector("#footer-button");
console.log(footerButton);

footerButton.addEventListener("click", gotoFooter);

function gotoFooter() {
  window.location.href = "#bottom";
}
