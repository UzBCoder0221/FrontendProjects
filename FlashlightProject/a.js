function voila() {
  if (isFlashlighEnabled) {
    const flashStyle = document.getElementsByClassName("flashlight")[0];
    flashStyle.style.animation = "none";
    flashStyle.offsetHeight;
    flashStyle.style.animation = null;
    flashStyle.style.animation = "abracadabra-voila 0.7s ease-in-out";
  }
}
function resetAnim() {
  const flashStyle = document.getElementsByClassName("flashlight")[0].style;
  flashStyle.animation = "none";
}
document.getElementById("clickBtn").addEventListener("click", () => {
  voila();
  document.body.style.backgroundColor = "#FFD700";
  setTimeout(() => {
    document.body.style.backgroundColor = "#f0f0f0";
  }, 300);
  // resetAnim()
});

document.getElementById("dblClickBtn").addEventListener("dblclick", () => {
  voila();
  document.body.style.backgroundColor = "#87CEEB";
  setTimeout(() => {
    document.body.style.backgroundColor = "#f0f0f0";
  }, 300);
});

document
  .getElementById("mousemoveBtn")
  .addEventListener("mouseover", (event) => {
    document.body.style.backgroundColor = `#f3a444`;
  });
document
  .getElementById("mousemoveBtn")
  .addEventListener("mouseout", (event) => {
    document.body.style.backgroundColor = `#f0f0f0`;
  });

const video = document.getElementById("myVideo");

function openVideoInFullScreen() {
  video.style.display = "block";
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
  video.play();
}

function exitFullScreen() {
  if (document.fullscreenElement) {
    video.style.display = "none";
    document.exitFullscreen();
    video.pause();
  }
}

document.addEventListener("keydown", (event) => {
  document.getElementById("writtter").textContent += event.key;
  if (event.key === "f" || event.key === "F") {
    video.focus();
    openVideoInFullScreen();
  }
  if (event.key === "m" || event.key === "M" || event.key == "Escape") {
    exitFullScreen();
  }
});

let isFlashlighEnabled = false;
document.getElementById("enableShadow").addEventListener("click", () => {
  const flashStyle = document.getElementsByClassName("flashlight")[0].style;
  if (isFlashlighEnabled) {
    isFlashlighEnabled = false;
    flashStyle.animation = "abracadabra-reverse 0.7s ease-in-out";
    setTimeout(() => {
      document.getElementById(
        "enableShadow"
      ).textContent = `Click me to use "flashlight"`;
      flashStyle.display = "none";
    }, 300);
    return;
  }
  document.getElementById(
    "enableShadow"
  ).textContent = `Click me to disable "flashlight"`;
  isFlashlighEnabled = true;

  flashStyle.animation = "abracadabra .5s ease-in-out";
  setTimeout(() => {
    flashStyle.display = "inline-block";
  }, 300);
});

function stopVoila() {
  const flashElement = document.getElementsByClassName("flashlight")[0];
  flashElement.style.animation = "none"; // Stop animation on slow movement
}

const cursor = document.querySelector(".cursor");
let lastX = 0,
  lastY = 0,
  lastTime = Date.now();
const flashyStyle = document.getElementsByClassName("flashlight")[0];
const g = document.querySelector(".flashlight");
const d = document.querySelector(".dot");

let isScalingUp = false;
const speedThreshold = 0.5; // Increased sensitivity by lowering threshold

document.addEventListener("mousemove", (e) => {
  d.style.left = e.pageX - d.offsetWidth / 2 + "px";
  d.style.top = e.pageY - d.offsetHeight / 2 + "px";

  if (isFlashlighEnabled) {
    g.style.left = e.pageX - g.offsetWidth / 2 + "px";
    g.style.top = e.pageY - g.offsetHeight / 2 + "px";

    const currentTime = Date.now();
    const deltaX = e.pageX - lastX;
    const deltaY = e.pageY - lastY;
    const timeElapsed = currentTime - lastTime;

    const velocityX = deltaX / timeElapsed;
    const velocityY = deltaY / timeElapsed;

    if (
      Math.abs(velocityX) > speedThreshold ||
      Math.abs(velocityY) > speedThreshold
    ) {
      if (!isScalingUp) {
        isScalingUp = true;
        flashyStyle.style.transform = "scale(20)";
        flashyStyle.style.transition = "none"; // Remove delay for instant scale-up
      }
    } else if (isScalingUp) {
      isScalingUp = false;
      flashyStyle.style.transform = "scale(1)";
      flashyStyle.style.transition = "none"; // Reset immediately
    }

    lastX = e.pageX;
    lastY = e.pageY;
    lastTime = currentTime;
  }
});




// const cursor = document.querySelector(".cursor");
// let lastX = 0,
//   lastY = 0,
//   lastTime = Date.now();
// const flashyStyle = document.getElementsByClassName("flashlight")[0];
// const g = document.querySelector(".flashlight");
// const d = document.querySelector(".dot");

// document.addEventListener("mousemove", (e) => {
//   d.style.left = e.pageX - d.offsetWidth / 2 + "px";
//   d.style.top = e.pageY - d.offsetHeight / 2 + "px";
//   if (isFlashlighEnabled) {
//     g.style.left = e.pageX - g.offsetWidth / 2 + "px";
//     g.style.top = e.pageY - g.offsetHeight / 2 + "px";
//     const currentTime = Date.now();
//     const deltaX = e.pageX - lastX;
//     const deltaY = e.pageY - lastY;
//     const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
//     const timeElapsed = currentTime - lastTime;

//     const speed = distance / timeElapsed;
//     const speedThreshold = 15;

//     if (speed > speedThreshold) {
//       if (flashyStyle.style.transform!="scale(20)"){
//         console.log(123);
//       flashyStyle.style.transform="scale(20)"
//       flashyStyle.style.transition="none"
//       flashyStyle.style.animation = "none";
//       flashyStyle.offsetHeight;
//       flashyStyle.style.animation = null; 
//       }
//     } 
//     // else if (speedThreshold > speed && speed > 5) {
//       //  flashyStyle.style.transform="none"
//     // }

//     lastX = e.pageX;
//     lastY = e.pageY;
//     lastTime = currentTime;
//   }
// });
