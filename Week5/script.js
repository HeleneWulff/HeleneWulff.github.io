let tempInput = document.querySelector("#temperature");
let temperature = temperature.value;
console.log(temperature);
function checkWeather() {
  // let temperature = prompt("What is the temperature outside?");
  if (temperature >= 20 && temperature < 30) {
    console.log("it feels sunny and warm");
  } else if (temperature >= 10 && temperature < 20) {
    console.log("it feels cold");
  } else if (temperature >= 30) {
    console.log("it is boiling hot");
  } else if (temperature < 10) {
    console.log("it is freezing");
  }
}
