const profileButton = document.querySelector("#profile-button");
console.log(profileButton);
// Dette er for at få adgang til den del vi gerne vil tilføje event listeners til

const profileContent = document.querySelector("#profile-content");
console.log(profileContent);

profileButton.addEventListener("click", toggleContent);
// toggle er når man kan klikke én gang for at vise noget og én gang igen for at skjule det

function toggleContent() {
  console.log("I am clicked");
  profileContent.classList.toggle("show");
}
