const bgm = document.getElementById("bgm");
const titleEl = document.getElementById("title");
const textEl = document.getElementById("text");
const btn = document.getElementById("startBtn");
const photoEl = document.getElementById("photo");

let index = 0;
let started = false;

/* =========================
   SCREENS (FEB 7–14)
========================= */
const screens = [
  { t: "Yuktha ❤️", c: "This is a very small surprise.\nPlease don’t feel bad…\nBecause we are in long distance." },
  { t: "From Rahul", c: "I want to tell you something…" },
  { t: "Rose Day 🌹", c: "Feb 7 — Happy Rose Day Kandaa.\nI am giving you a rose.\nPlease take it with my heart." },
  { t: "Propose Day 💍", c: "Feb 8 — My heart wants you.\nYou are my happiness.\nI choose you.\nI love you." },
  { t: "Chocolate Day 🍫", c: "Feb 9 — Take this chocolate.\nSweet like your smile.\nYou make my day happy." },
  { t: "Promise Day 🤞", c: "Feb 11 — I promise,\nI don’t need anything except you.\nI’ll always stand with you." },
  { t: "Hug Day 🤍", c: "Feb 12 — A warm hug from far away." },
  { t: "Kiss Day 💋", c: "Feb 13 — Missing you deeply." },
  { t: "Valentine’s Day ❤️", c: "Feb 14 — My heart always belongs to you." },
  { t: "My Truth", c: "Sometimes I may hurt you,\nbut I can’t live without you.\n\nJagavaa marethe\nNinnaa berethe...\nHosadondhu looo..ka nodidhe" },
  { t: "My Question", c: "How did I change your life?\nHow do you feel about me?" },
  { t: "My Wish", c: "Will you be my Valentine?\nWill you marry me? ❤️" }
];

/* =========================
   CONTINUE BUTTON
========================= */
btn.onclick = () => {
  if (!started) {
    bgm.play();
    started = true;
  }

  if (index < screens.length) {
    titleEl.innerText = screens[index].t;
    textEl.innerHTML = screens[index].c.replace(/\n/g, "<br>");
    index++;
  } else {
    showFinalScreen();
  }
};

/* =========================
   FINAL GRAND SCREEN
========================= */
function showFinalScreen() {
  document.querySelector(".card").style.display = "none";
  document.getElementById("finalCelebration").classList.remove("hidden");
  startSlideshow();
  typeFinalMessage();
}

/* =========================
   PHOTO SLIDESHOW (FINAL)
========================= */
const photos = [
  "images/pic1.jpg",
  "images/pic2.jpg",
  "images/pic3.jpg",
  "images/pic4.jpg"
];

let photoIndex = 0;

function startSlideshow() {
  const img = document.getElementById("finalPhoto");
  img.src = photos[0];

  setInterval(() => {
    photoIndex = (photoIndex + 1) % photos.length;
    img.src = photos[photoIndex];
  }, 3000);
}

/* =========================
   TYPING EFFECT (FINAL)
========================= */
const finalMessage =
"Happy Valentine’s Day Baby ❤️\n\n" +
"Don’t feel bad that we can’t meet.\n" +
"I made this with all my love 💕";

function typeFinalMessage() {
  const el = document.getElementById("typingFinal");
  let i = 0;
  el.innerHTML = "";

  const typing = setInterval(() => {
    el.innerHTML += finalMessage[i] === "\n" ? "<br>" : finalMessage[i];
    i++;
    if (i >= finalMessage.length) clearInterval(typing);
  }, 80);
}
/* ===== GRAND FINAL SCREEN LOGIC ===== */

function showGrandFinal() {
  const container = document.getElementById("screen");
  container.innerHTML = `
    <div class="final-grand">
      <div id="hearts"></div>

      <div class="names" id="names"></div>

      <div class="photo-heart">
        <img src="images/her.jpg">
        <img src="images/me.jpg">
      </div>

      <div class="final-text" id="finalText"></div>
    </div>
  `;

  startHeartRain();
  animateNames("RAHUL ❤️ YUKTHA");
  typeFinalText();
}

/* Heart Rain */
function startHeartRain() {
  const hearts = document.getElementById("hearts");
  setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "❤";
    h.style.left = Math.random() * 100 + "vw";
    h.style.animationDuration = 3 + Math.random() * 3 + "s";
    hearts.appendChild(h);
    setTimeout(() => h.remove(), 6000);
  }, 300);
}

/* Names Animation */
function animateNames(text) {
  const el = document.getElementById("names");
  [...text].forEach((ch, i) => {
    const span = document.createElement("span");
    span.textContent = ch;
    span.style.animationDelay = i * 0.15 + "s";
    el.appendChild(span);
  });
}

/* Typing Final Wish */
function typeFinalText() {
  const text = 
`Happy Valentine’s Day baby ❤️

This is my first Valentine’s Day
after a long gap…
and it feels special because of YOU.

Don’t feel bad that we can’t meet.
So I made this small world for us.

Sometimes I may hurt you,
but I can’t live without you.

Jagavaa marethe
Ninnaa berethe…
Hosadondhu looo..ka nodidhe

I am lucky every single day
because you came into my life.

Thank you for reading,
thank you for feeling,
thank you for being mine 💖`;

  let i = 0;
  const el = document.getElementById("finalText");
  const interval = setInterval(() => {
    el.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 45);
}
