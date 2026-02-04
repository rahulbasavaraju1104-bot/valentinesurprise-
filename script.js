/* =========================
   TYPING ANIMATION
========================= */
function typeText(element, text, speed = 45, callback) {
  element.innerHTML = "";
  let i = 0;
  const timer = setInterval(() => {
    if (text[i] === "\n") {
      element.innerHTML += "<br>";
    } else {
      element.innerHTML += text[i];
    }
    i++;
    if (i >= text.length) {
      clearInterval(timer);
      if (callback) callback();
    }
  }, speed);
}

/* =========================
   STORY SCREENS (FEB 7–14)
========================= */
const screens = [
  {
    title: "For Yuktha ❤️",
    text:
      "This is a very small surprise.\n" +
      "Please don’t feel bad.\n" +
      "Because we are in a long-distance relationship.",
    time: 6000
  },
  {
    title: "",
    text: "Rahul wants to tell you something...\nPlease stay till the end ❤️",
    time: 5000
  },
  {
    title: "🌹 Rose Day – Feb 7",
    text:
      "I can’t give you a real rose today,\n" +
      "but I’m giving you my heart as a rose.\n" +
      "Please take it 🌹",
    time: 7000
  },
  {
    title: "💍 Propose Day – Feb 8",
    text:
      "I didn’t plan to fall in love,\n" +
      "but my heart chose you naturally.",
    time: 6500
  },
  {
    title: "🍫 Chocolate Day – Feb 9",
    text:
      "You made my life sweeter\n" +
      "without even trying.",
    time: 6000
  },
  {
    title: "🧸 Teddy Day – Feb 10",
    text:
      "Whenever I miss you,\n" +
      "I imagine holding you close.",
    time: 6000
  },
  {
    title: "🤝 Promise Day – Feb 11",
    text:
      "I promise to stay honest,\n" +
      "loyal, and true to you.",
    time: 6500
  },
  {
    title: "🤗 Hug Day – Feb 12",
    text:
      "This is a warm virtual hug,\n" +
      "until I hug you in real.",
    time: 6000
  },
  {
    title: "💋 Kiss Day – Feb 13",
    text:
      "This kiss is saved only for you 💋",
    time: 5500
  },
  {
    title: "❤️ Valentine’s Day – Feb 14",
    text:
      "Happy Valentine’s Day, Yuktha ❤️",
    time: 6000
  },
  {
    title: "",
    text:
      "Sometimes I may hurt you,\n" +
      "but I can’t live without you.",
    time: 6000
  },
  {
    title: "",
    text:
      "Jagavaa marethe\n" +
      "Ninnaa berethe...\n" +
      "Hosadondhu looo..ka nodidhe",
    time: 7000
  },
  {
    title: "",
    text:
      "I am truly very lucky\n" +
      "to have you in my life.",
    time: 6000
  }
];

let screenIndex = 0;

/* =========================
   SHOW STORY STEP BY STEP
========================= */
function showScreen() {
  if (screenIndex >= screens.length) {
    startSlideshow();
    return;
  }

  const titleEl = document.getElementById("title");
  const textEl = document.getElementById("text");

  titleEl.innerText = screens[screenIndex].title;

  typeText(textEl, screens[screenIndex].text, 45, () => {
    setTimeout(() => {
      screenIndex++;
      showScreen();
    }, screens[screenIndex].time);
  });
}

/* =========================
   SLIDESHOW
========================= */
const images = [
  "images/pic1.jpg",
  "images/pic2.jpg",
  "images/pic3.jpg",
  "images/pic4.jpg",
  "images/pic5.jpg"
];

let imgIndex = 0;
let slideInterval;

function startSlideshow() {
  document.getElementById("title").innerText = "";
  document.getElementById("text").innerText = "";

  const photoBox = document.querySelector(".photos");
  const img = document.getElementById("slide");

  photoBox.style.display = "block";
  img.src = images[0];
  img.classList.add("show");

  slideInterval = setInterval(() => {
    img.classList.remove("show");
    setTimeout(() => {
      imgIndex = (imgIndex + 1) % images.length;
      img.src = images[imgIndex];
      img.classList.add("show");
    }, 2000);
  }, 6000);

  // After ~45 seconds → final proposal
  setTimeout(finalMessage, 45000);
}

/* =========================
   FINAL PROPOSAL
========================= */
function finalMessage() {
  clearInterval(slideInterval);
  document.querySelector(".photos").style.display = "none";

  document.getElementById("title").innerText = "Yuktha ❤️";
  document.getElementById("text").innerText =
    "This is my first Valentine’s Day after a long gap.\n\n" +
    "Will you be my Valentine? ❤️\n" +
    "Will you marry me? 💍\n\n" +
    "Happy Valentine’s Day ❤️";
}

/* =========================
