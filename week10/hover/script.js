const catImg = document.querySelector("cat-img");
console.log(catImg);

const moreInfor = document.querySelector("#more-info");
console.log(moreInfo);

catImg.addEventListener("mouseover", showInfo);
catImg.addEventListener("mouseover", hideInfo);

moreInfo.innerHTML = "<p>Add to cart </p>";

function showInfo() {
  moreInfo.classList.add("show");
  moreInfo.style.backgroundColor = "Lime";
}

function hideInfo() {
  moreInfo.classList.remove("show");
}
