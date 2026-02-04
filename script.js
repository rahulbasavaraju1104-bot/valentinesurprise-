const slides = [
  { t:"Yuktha ❤️", c:"This is a very small surprise.\nPlease don’t feel bad…\nBecause we are in long distance." },
  { t:"From Rahul", c:"I want to tell you something…" },

  { t:"Rose Day 🌹", c:"Feb 7\nI am giving you a rose.\nPlease take it with my heart." },
  { t:"Propose Day 💍", c:"Feb 8\nI choose you.\nYou are my happiness.\nI am lucky to have you." },
  { t:"Chocolate Day 🍫", c:"Feb 9\nYour smile is sweeter than chocolate." },
  { t:"Promise Day 🤞", c:"Feb 11\nI promise you.\nI will always stand with you." },
  { t:"Hug Day 🤍", c:"Feb 12\nA warm hug from far away." },
  { t:"Kiss Day 💋", c:"Feb 13\nMissing you deeply." },

  { t:"Valentine’s Day ❤️", c:"Feb 14\nMy heart always belongs to you." },

  { t:"My Truth", c:"Sometimes I may hurt you,\nbut I can’t live without you.\n\nJagavaa marethe\nNinnaa berethe...\nHosadondhu looo..ka nodidhe" },

  { t:"My Question", c:"How did I change your life?\nHow do you feel about me?" },

  { t:"Our Memories ❤️", c:"" },

  { t:"My Wish", c:"Will you be my Valentine?\nWill you marry me? ❤️" },

  { t:"Forever Us 💖", c:"Happy Valentine’s Day baby.\nThis is my first Valentine after long gap.\nI prepared this with all my heart.\n— Rahul ❤️" }
];

let index = 0;
let typingInterval;

function typeText(text) {
  const el = document.getElementById("text");
  let i = 0;
  el.innerHTML = "";
  clearInterval(typingInterval);

  typingInterval = setInterval(() => {
    el.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(typingInterval);
  }, 45);
}

function showSlide() {
  const s = slides[index];

  if (index === 11) {
    document.getElementById("screen").innerHTML = `
      <h1>Our Memories ❤️</h1>
      <div class="slideshow">
        <img id="slideImg" src="images/pic1.jpg">
      </div>
      <button class="heart-btn" onclick="next()">❤️ Continue</button>
    `;
    startSlideshow();
    return;
  }

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

function next() {
  const music = document.getElementById("bgm");
  if (music.paused) {
    music.play().catch(()=>{});
  }

  index++;
  if (index < slides.length) showSlide();
}

showSlide();
