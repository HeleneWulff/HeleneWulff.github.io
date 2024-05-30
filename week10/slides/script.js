const slides = document.querySelectorAll(".slides");
// bruger all for at den tager alle slides i stedet for kun det første
console.log(slides);
let slideIndex = 0;

const rightArrowButton = document.querySelector("#right-arrow-button");
console.log(rightArrowButton);
rightArrowButton.addEventListener("click", gotoNextSlide);
// tilføjer event listener til knapperne --> klik --> gør noget (her gå til næste slide)

const leftArrowButton = document.querySelector("#left-arrow-button");
console.log(leftArrowButton);
leftArrowButton.addEventListener("click", gotoPreviousSlide);

function gotoNextSlide() {
  if (slideIndex === slides.length - 1) {
    rightArrowButton.disabled = true;
    return;
  }
  if (slideIndex < slides.length - 1) {
    slideIndex++;
    const nextSlide = slides[slideIndex];
    const newLeftPosition = nextSlide.offsetLeft;
    console.log(newLeftPosition);
    window.scrollTo({ left: newLeftPosition, behavior: "smooth" });
    leftArrowButton.disabled = false;
    // Her kunne man bruge top i stedet for left hvis man ville lave en vertikal slideshow. Det samme i style sheet --> ændre flex til column
  }
}

function gotoPreviousSlide() {
  if (slideIndex === 0) {
    leftArrowButton.disabled = true;
    return;
  }
  if (slideIndex > 0) {
    slideIndex--;
    const previousSlide = slides[slideIndex];
    const newLeftPosition = previousSlide.offsetLeft;
    console.log(newLeftPosition);
    window.scrollTo({ left: newLeftPosition, behavior: "smooth" });
    rightArrowButton.disabled = false;
  }
}
