const bgm = document.getElementById("bgm");
const title = document.getElementById("title");
const text = document.getElementById("text");
const photo = document.getElementById("photo");
const btn = document.getElementById("startBtn");

photo.style.display = "none";

const screens = [
  {
    t: "For Yuktha ❤️",
    c: "This is a very small surprise.\nPlease don't feel bad...\nBecause we are in long distance."
  },
  {
    t: "From Rahul",
    c: "I want to tell you something..."
  },
  {
    t: "Rose Day 🌹",
    c: "Feb 7 — Happy Rose Day Kandaa.\nI am giving you a rose.\nPlease take it with my heart."
  },
  {
    t: "Propose Day 💍",
    c: "Feb 8 — My heart wants you.\nI need you because you are my happiness.\nI am very lucky to have you in my life.\nI love you.\nI choose you."
  },
  {
    t: "Chocolate Day 🍫",
    c: "Feb 9 — Take this chocolate.\nYour cute smile makes my day happy.\nChocolate is sweet, just like your smile."
  },
  {
    t: "Promise Day 🤞",
    c: "Feb 11 — I promise you this.\nI don't want anything except you.\nYou are mine and I am yours.\nI will always stand with you."
  },
  {
    t: "Hug Day 🤍",
    c: "Feb 12 — Sending you a warm hug from far away."
  },
  {
    t: "Kiss Day 💋",
    c: "Feb 13 — Missing you deeply."
  },
  {
    t: "Valentine's Day ❤️",
    c: "Feb 14 — My heart always belongs to you."
  },
  {
    t: "My Truth",
    c: "Sometimes I may hurt you,\nbut I can't live without you.\n\nJagavaa marethe\nNinnaa berethe...\nHosadondhu looo..ka nodidhe"
  },
  {
    t: "Our Memories ❤️",
    c: "Yuktha ❤️ Rahul"
  },
  {
    t: "Happy Valentine's Day ❤️",
    c: "Happy Valentine's Day baby.\nDon't feel bad that we couldn't meet.\nBecause of distance, I prepared this for you.\nI hope you felt my love.\nThank you for everything. ❤️"
  }
];

let index = 0;
let musicStarted = false;
let slideshowStarted = false;

function showScreen() {
  const s = screens[index];
  title.innerText = s.t;
  text.innerText = s.c;
  photo.style.display = "none";
}

function startSlideshow() {
  slideshowStarted = true;
  btn.style.display = "none";

  title.innerText = "Our Memories ❤️";
  text.innerText = "Every picture holds my heartbeat.";
  photo.style.display = "block";

  const images = [
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg",
    "images/pic4.jpg"
  ];

  let i = 0;
  photo.src = images[i];

  const interval = setInterval(() => {
    i++;
    if (i < images.length) {
      photo.src = images[i];
    } else {
      clearInterval(interval);
      setTimeout(() => {
        index++;
        showScreen();
      }, 3000);
    }
  }, 5000); // 5 sec per photo (cinematic)
}

// first screen
showScreen();

btn.onclick = () => {
  if (!musicStarted) {
    bgm.volume = 0.5;
    bgm.play().catch(() => {});
    musicStarted = true;
  }

  // when reaching slideshow screen
  if (screens[index].t === "Our Memories ❤️" && !slideshowStarted) {
    startSlideshow();
    return;
  }

  index++;
if (index === screens.length) {
  document.querySelector('.card').style.display = "none";
  document.getElementById('finalCelebration').classList.remove('hidden');
}
