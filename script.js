const slides = [
  { t:"Hey Yuktha 💖", c:"This is a very small gift / surprise maa..\nPlease don’t feel bad…\nBecause we are in long distance." },
  { t:"From Rahul", c:"I want to tell you something…\nClick continue to know that..." },

  { t:"Rose Day 🌹", c:"Feb 7\nJust like this rose, my love for you keeps blooming more beautiful every day. \nI am giving you a rose.\nPlease take it with my heart." },
  { t:"Propose Day 💍", c:"Feb 8\nEvery love story is special, but ours is my favorite. Will you always be mine?\nI choose you.\nYou are my happiness.\nI am lucky to have you." },
  { t:"Chocolate Day 🍫", c:"Feb 9\nLife with you is sweeter than chocolate and warmer than love.\nYour smile is sweeter than chocolate." },
  { t:"Promise Day 🤞", c:"Feb 11\nI promise you.\nI will always stand with you." },
  { t:"Hug Day 🤍", c:"Feb 12\nIf hugs could speak, mine would say “stay with me forever.”\nA warm hug from far away." },
  { t:"Kiss Day 💋", c:"Feb 13\nOne kiss from you is enough to silence my worries and fill my heart with peace.\nMissing you deeply." },

  { t:"Valentine’s Day ❤️", c:"Feb 14\nMy heart always belongs to you.\nI don’t need a special day to love you… but today I want to say it louder — I love you forever },

  { t:"My Truth", c:"Sometimes I may hurt you,\nbut I can’t live without you.\n\nJagavaa marethe\nNinnaa berethe...\nHosadondhu looo..ka nodidhe" },

  { t:"My Dear Yukthaa", c:"Thank you so much for changing me like this and you made my life beautiful \nDont know what do you feel about me? but I am very lucky to have you in my life" },

  { t:"Our Memories ❤️", c:"" },

  { t:"Forever Us 💖", c:
    "Happy Valentine’s Day baby ❤️\n\n" +
    "This is my first Valentine’s Day after a long gap,\n" +
    "and I am very happy because of you.\n\n" +
    "Sometimes I may hurt you,\n" +
    "but I can’t live without you.\n\n" +
    "Thank you for coming into my life.\n" +
    "— Rahul ❤️"
  }
];

let index = 0;
let typingInterval;

function typeText(text) {
  const el = document.getElementById("text");
  let i = 0;
  el.innerHTML = "";
  clearInterval(typingInterval);

  typingInterval = setInterval(() => {
    el.innerHTML += text[i] === "\n" ? "<br>" : text[i];
    i++;
    if (i >= text.length) clearInterval(typingInterval);
  }, 45);
}

function showSlide() {
  if (index >= slides.length) return;
  const s = slides[index];

  // Memories slideshow
  if (s.t === "Our Memories ❤️") {
    document.getElementById("screen").innerHTML = `
      <div class="card">
        <h1>Our Memories ❤️</h1>
        <div class="slideshow">
          <img id="slideImg" src="images/pic1.jpg">
        </div>
      </div>
      <button class="heart-btn" onclick="next()">❤️ Continue</button>
    `;
    startSlideshow();
    return;
  }

  // FINAL GRAND SCREEN
  if (s.t === "Forever Us 💖") {
    document.getElementById("screen").innerHTML = `
      <div class="final-grand">
        <div class="photo-row">
          <img src="images/her.jpg" class="final-pic">
          <img src="images/me.jpg" class="final-pic">
        </div>

        <h1 class="final-title">Happy Valentine’s Day ❤️</h1>
        <p id="text" class="final-text"></p>
      </div>
    `;
    typeText(s.c);
    setInterval(createHeart, 350);
    return;
  }

  // Normal screens
  document.getElementById("screen").innerHTML = `
    <div class="card">
      <h1>${s.t}</h1>
      <p id="text"></p>
    </div>
    <button class="heart-btn" onclick="next()">❤️ Continue</button>
  `;
  typeText(s.c);
}

let imgIndex = 1;
function startSlideshow() {
  const img = document.getElementById("slideImg");
  setInterval(() => {
    imgIndex++;
    img.src = `images/pic${imgIndex}.jpg`;
    if (imgIndex > 4) imgIndex = 1;
  }, 6000);
}

function createHeart() {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerHTML = "❤️";
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = (16 + Math.random() * 20) + "px";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 7000);
}

function next() {
  const music = document.getElementById("bgm");
  if (music && music.paused) {
    music.play().catch(()=>{});
  }
  index++;
  showSlide();
}

showSlide();
