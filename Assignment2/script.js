const video = document.querySelector("#custom-video-player");
const videoSrc = video.getElementsByTagName("source")[0];
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
video.removeAttribute("controls");
// playPauseBtn.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}

// Creating an object array containing the videos
const videoList = [
  {
    name: "video1",
    link: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/berry-bunch_handheld-windmill-fan.mp4",
  },
  {
    name: "video2",
    link: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/berry-bunch_handheld-windmill-fan.mp4",
  },
  {
    name: "video3",
    link: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
  },
  {
    name: "video4",
    link: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
  },
  {
    name: "video5",
    link: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
  },
  {
    name: "video6",
    link: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
  },
];
function pickVideo(index) {
  const video1 = videoList[index];
  video.pause();
  videoSrc.setAttribute("src", video1.link);
  videoSrc.setAttribute("type", "video/mp4");
  video.load();
  video.play();
}
const firstVideoButton = document.querySelector("#first-video-btn");
firstVideoButton.addEventListener("click", function playIt() {
  pickVideo(0);
});

const secondVideoButton = document.querySelector("#second-video-btn");
secondVideoButton.addEventListener("click", function playIt() {
  pickVideo(1);
});

const thirdVideoButton = document.querySelector("#third-video-btn");
thirdVideoButton.addEventListener("click", function playIt() {
  pickVideo(2);
});

const fourthVideoButton = document.querySelector("#fourth-video-btn");
fourthVideoButton.addEventListener("click", function playIt() {
  pickVideo(3);
});

const fifthVideoButton = document.querySelector("#fifth-video-btn");
fifthVideoButton.addEventListener("click", function playIt() {
  pickVideo(4);
});

const sixthVideoButton = document.querySelector("#sixth-video-btn");
sixthVideoButton.addEventListener("click", function playIt() {
  pickVideo(5);
});
